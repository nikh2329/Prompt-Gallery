import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { session } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!session?.user) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("favorites")
          .select("prompt_id")
          .eq("user_id", session.user.id);
        
        if (error) throw error;
        if (data) setFavorites(data.map((f: any) => f.prompt_id));
      } catch (error) {
        console.error("Error loading favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [session]);

  const isFavorite = (promptId: string): boolean => {
    return favorites.includes(promptId);
  };

  const toggleFavorite = async (promptId: string) => {
    if (!session?.user) {
      toast({
        title: "Login Required",
        description: "Please sign in to save favorites.",
        variant: "destructive",
      });
      return;
    }

    const isFav = favorites.includes(promptId);
    
    try {
      if (isFav) {
        await supabase.from("favorites").delete().eq("user_id", session.user.id).eq("prompt_id", promptId);
        setFavorites(prev => prev.filter(id => id !== promptId));
      } else {
        await supabase.from("favorites").insert({ user_id: session.user.id, prompt_id: promptId });
        setFavorites(prev => [...prev, promptId]);
      }
    } catch (error) {
      toast({ title: "Error", description: "Could not update favorites.", variant: "destructive" });
    }
  };

  return { favorites, loading, isFavorite, toggleFavorite };
};
