import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Hero = ({ searchQuery, onSearchChange }: HeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border px-4 py-20 md:py-32">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-glow" />
          <span>1,000+ curated AI prompts</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Discover the Best
          <span className="mt-2 block gradient-text">
            AI Prompts
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Explore expertly crafted prompts for Gemini, Midjourney, DALL·E, and Stable Diffusion. 
          Copy, customize, and create stunning AI-generated images.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mx-auto max-w-lg"
        >
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search prompts by keyword, style, or category..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-14 rounded-xl border-border bg-secondary/50 pl-12 pr-4 text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-all focus:border-primary/50 focus:bg-secondary focus:shadow-glow"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">100+</span>
            <span>Prompts</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">6</span>
            <span>Categories</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">Free</span>
            <span>to Use</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
