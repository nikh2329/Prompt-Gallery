import { categories, type Category } from '@/lib/prompts';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <section id="categories" className="border-b border-border/40 bg-background px-4 py-4">
      <div className="container mx-auto">
        <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                'flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200',
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
