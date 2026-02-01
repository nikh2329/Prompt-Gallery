import { useState } from 'react';
import { Copy, Check, Sparkles, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import PromptLightbox from './PromptLightbox';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import type { Prompt } from '@/lib/prompts';

interface PromptCardProps {
  prompt: Prompt;
  index?: number;
}

const categoryColors: Record<string, string> = {
  men: 'bg-primary/20 text-primary border-primary/30',
  women: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  couple: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  kids: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

const PromptCard = ({ prompt, index = 0 }: PromptCardProps) => {
  const [copied, setCopied] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { toast } = useToast();
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const favorited = isFavorite(prompt.id);

  const handleCopy = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    await navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    toast({
      title: 'Copied!',
      description: 'Prompt copied to clipboard',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="glass-card group flex flex-col overflow-hidden"
      >
        {/* Image Section */}
        <div 
          className="relative overflow-hidden cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            src={prompt.imageSrc}
            alt={prompt.title}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <span className="rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground">
              Click to expand
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-1 flex-col p-5">
          {/* Category & Action Icons Row */}
          <div className="mb-3 flex items-center justify-between">
            <span
              className={cn(
                'inline-flex rounded-full border px-3 py-1 text-xs font-medium capitalize',
                categoryColors[prompt.category]
              )}
            >
              {prompt.category}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(prompt.id);
                }}
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full transition-all',
                  favorited
                    ? 'bg-favorite/20 text-favorite'
                    : 'bg-secondary text-muted-foreground hover:text-favorite'
                )}
              >
                <Heart className={cn('h-4 w-4', favorited && 'fill-current')} />
              </button>
              <button
                onClick={handleCopy}
                className="glow-border flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:text-foreground"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-success" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {prompt.title}
          </h3>

          {/* Full Prompt Content */}
          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {prompt.content}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs">AI Generated</span>
            </div>
            <button
              onClick={handleCopy}
              className="text-sm font-medium text-primary transition-all hover:text-primary/80 hover:underline"
            >
              {copied ? 'Copied!' : 'Copy Prompt'}
            </button>
          </div>
        </div>
      </motion.article>

      <PromptLightbox
        prompt={prompt}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
};

export default PromptCard;
