export type Category = 'all' | 'men' | 'women' | 'couple' | 'kids';

export interface Prompt {
  id: string;
  title: string;
  category: Exclude<Category, 'all'>;
  content: string;
  image: string;
  imageSrc: string;
  tags: string[];
  upvotes: number;
  createdAt: string;
}

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'couple', label: 'Couple' },
  { id: 'kids', label: 'Kids' },
];

export const mockPrompts: Prompt[] = [];
