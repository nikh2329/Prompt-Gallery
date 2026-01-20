import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Hero = ({ searchQuery, onSearchChange }: HeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-secondary/30 px-4 py-16 md:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-category-scifi/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-3xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
          <span>1,000+ curated prompts</span>
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Discover the Best
          <span className="mt-2 block bg-gradient-to-r from-category-men via-category-scifi to-category-women bg-clip-text text-transparent">
            AI Prompts
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
          Explore expertly crafted prompts for Gemini, Midjourney, DALL·E, and Stable Diffusion. Copy, customize, and create stunning images.
        </p>

        {/* Search Bar */}
        <div className="relative mx-auto max-w-md">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search prompts by keyword, style, or category..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-12 rounded-xl border-border/60 bg-card pl-12 pr-4 shadow-card transition-shadow focus:shadow-card-hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
