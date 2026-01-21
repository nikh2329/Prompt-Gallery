import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  User, 
  Users, 
  Heart, 
  Baby, 
  Mountain, 
  Rocket 
} from 'lucide-react';
import type { Category } from '@/lib/prompts';

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All', icon: <Sparkles className="h-4 w-4" /> },
  { id: 'men', label: 'Men', icon: <User className="h-4 w-4" /> },
  { id: 'women', label: 'Women', icon: <Users className="h-4 w-4" /> },
  { id: 'couple', label: 'Couple', icon: <Heart className="h-4 w-4" /> },
  { id: 'kids', label: 'Kids', icon: <Baby className="h-4 w-4" /> },
  { id: 'landscapes', label: 'Landscapes', icon: <Mountain className="h-4 w-4" /> },
  { id: 'scifi', label: 'Sci-Fi', icon: <Rocket className="h-4 w-4" /> },
];

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="categories"
      className="sticky top-16 z-40 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4">
        <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto py-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                'glow-border flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'border-primary bg-primary/20 text-primary shadow-glow'
                  : 'border-border bg-secondary text-muted-foreground hover:border-primary/50 hover:text-foreground'
              )}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CategoryFilter;
