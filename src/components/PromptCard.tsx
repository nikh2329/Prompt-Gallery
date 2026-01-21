import { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
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
  landscapes: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  scifi: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

const PromptCard = ({ prompt, index = 0 }: PromptCardProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    toast({
      title: 'Copied!',
      description: 'Prompt copied to clipboard',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass-card group flex flex-col overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={prompt.imageSrc}
          alt={prompt.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category & Copy Icon Row */}
        <div className="mb-3 flex items-center justify-between">
          <span
            className={cn(
              'inline-flex rounded-full border px-3 py-1 text-xs font-medium capitalize',
              categoryColors[prompt.category]
            )}
          >
            {prompt.category}
          </span>
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
  );
};

export default PromptCard;
