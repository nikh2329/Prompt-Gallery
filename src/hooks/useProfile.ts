import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export const useProfile = () => {
  const { session } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    let mounted = true;

    const getProfile = async () => {
      try {
        setLoading(true);
        if (!session?.user) {
          if (mounted) {
            setProfile(null);
            setLoading(false);
          }
          return;
        }

        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.warn('Error loading profile:', error.message);
        }

        if (mounted && data) {
          setProfile(data);
        }
      } catch (error) {
        console.error('Error in useProfile:', error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    getProfile();

    return () => {
      mounted = false;
    };
  }, [session]);

  const updateProfile = async (updates: any) => {
    try {
      setUpdating(true);
      if (!session?.user) throw new Error('No user logged in');

      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: session.user.id,
          ...updates,
          updated_at: new Date(),
        });

      if (error) throw error;
      
      // Refresh local state
      setProfile((prev: any) => ({ ...prev, ...updates }));
      toast({ title: "Success", description: "Profile updated successfully." });
      return { error: null };
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
      return { error };
    } finally {
      setUpdating(false);
    }
  };

  const uploadAvatar = async (file: File) => {
    try {
      setUpdating(true);
      if (!session?.user) throw new Error('No user logged in');

      const fileExt = file.name.split('.').pop();
      const filePath = `${session.user.id}/avatar.${fileExt}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // Update the profile record
      const { error: updateError } = await supabase
        .from('profiles')
        .upsert({
          id: session.user.id,
          avatar_url: publicUrl,
          updated_at: new Date(),
        });

      if (updateError) throw updateError;

      setProfile((prev: any) => ({ ...prev, avatar_url: publicUrl }));
      toast({ title: "Success", description: "Avatar updated successfully." });
    } catch (error: any) {
      console.error('Error uploading avatar:', error);
      toast({ title: "Error", description: error.message || "Could not upload avatar.", variant: "destructive" });
    } finally {
      setUpdating(false);
    }
  };

  return { profile, loading, updating, updateProfile, uploadAvatar };
};
