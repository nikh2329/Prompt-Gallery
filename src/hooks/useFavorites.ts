import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  // Fetch user's favorites
  const fetchFavorites = useCallback(async () => {
    if (!user) {
      setFavorites(new Set());
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('prompt_id')
        .eq('user_id', user.id);

      if (error) throw error;

      setFavorites(new Set(data?.map(f => f.prompt_id) || []));
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  // Toggle favorite status
  const toggleFavorite = useCallback(async (promptId: string) => {
    if (!user) {
      toast({
        title: 'Sign in required',
        description: 'Please sign in to save favorites',
        variant: 'destructive',
      });
      return;
    }

    const isFavorited = favorites.has(promptId);

    // Optimistic update
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (isFavorited) {
        newSet.delete(promptId);
      } else {
        newSet.add(promptId);
      }
      return newSet;
    });

    try {
      if (isFavorited) {
        const { error } = await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('prompt_id', promptId);

        if (error) throw error;

        toast({
          title: 'Removed from favorites',
          description: 'Prompt removed from your favorites',
        });
      } else {
        const { error } = await supabase
          .from('favorites')
          .insert({ user_id: user.id, prompt_id: promptId });

        if (error) throw error;

        toast({
          title: 'Added to favorites',
          description: 'Prompt saved to your favorites',
        });
      }
    } catch (error) {
      // Revert optimistic update on error
      setFavorites(prev => {
        const newSet = new Set(prev);
        if (isFavorited) {
          newSet.add(promptId);
        } else {
          newSet.delete(promptId);
        }
        return newSet;
      });

      console.error('Error toggling favorite:', error);
      toast({
        title: 'Error',
        description: 'Failed to update favorites',
        variant: 'destructive',
      });
    }
  }, [user, favorites, toast]);

  const isFavorite = useCallback((promptId: string) => {
    return favorites.has(promptId);
  }, [favorites]);

  return {
    favorites,
    loading,
    toggleFavorite,
    isFavorite,
    refetch: fetchFavorites,
  };
};
