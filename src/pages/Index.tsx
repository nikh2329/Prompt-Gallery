import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryFilter from '@/components/CategoryFilter';
import PromptGrid from '@/components/PromptGrid';
import Footer from '@/components/Footer';
import { mockPrompts, type Category } from '@/lib/prompts';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrompts = useMemo(() => {
    return mockPrompts.filter((prompt) => {
      const matchesCategory = activeCategory === 'all' || prompt.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <PromptGrid prompts={filteredPrompts} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
