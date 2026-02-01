import { useState, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { Heart, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import PromptGrid from '@/components/PromptGrid';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { mockPrompts, type Category } from '@/lib/prompts';
import { useAuth } from '@/contexts/AuthContext';
import { useFavoritesContext } from '@/contexts/FavoritesContext';

const Favorites = () => {
  const { user, loading: authLoading } = useAuth();
  const { favorites, loading: favoritesLoading } = useFavoritesContext();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const favoritePrompts = useMemo(() => {
    return mockPrompts.filter((prompt) => {
      const isFavorite = favorites.has(prompt.id);
      const matchesCategory = activeCategory === 'all' || prompt.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return isFavorite && matchesCategory && matchesSearch;
    });
  }, [favorites, activeCategory, searchQuery]);

  // Redirect to auth if not logged in
  if (!authLoading && !user) {
    return <Navigate to="/auth" replace />;
  }

  const isLoading = authLoading || favoritesLoading;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background px-4 py-16">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-favorite/10 px-4 py-2"
            >
              <Heart className="h-4 w-4 fill-favorite text-favorite" />
              <span className="text-sm font-medium text-favorite">My Collection</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              My Favorites
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground"
            >
              Your curated collection of saved prompts, ready to inspire your next creation.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-xl"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search your favorites..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 w-full rounded-xl border-border bg-background pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        ) : favorites.size === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 rounded-full bg-secondary p-4">
              <Heart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">No favorites yet</h3>
            <p className="mb-6 max-w-md text-muted-foreground">
              Start building your collection by clicking the heart icon on any prompt you love.
            </p>
            <a
              href="/"
              className="btn-gradient rounded-lg px-6 py-3 text-sm font-medium"
            >
              Explore Prompts
            </a>
          </div>
        ) : (
          <PromptGrid prompts={favoritePrompts} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
