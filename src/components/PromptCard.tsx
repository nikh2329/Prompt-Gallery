import { useState } from 'react';
import { Copy, Check, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import type { Prompt } from '@/lib/prompts';
import { Button } from '@/components/ui/button';

interface PromptCardProps {
  prompt: Prompt;
}

const categoryColors: Record<string, string> = {
  men: 'bg-category-men/10 text-category-men border-category-men/20',
  women: 'bg-category-women/10 text-category-women border-category-women/20',
  couple: 'bg-category-couple/10 text-category-couple border-category-couple/20',
  kids: 'bg-category-kids/10 text-category-kids border-category-kids/20',
  landscapes: 'bg-category-landscapes/10 text-category-landscapes border-category-landscapes/20',
  scifi: 'bg-category-scifi/10 text-category-scifi border-category-scifi/20',
};

const PromptCard = ({ prompt }: PromptCardProps) => {
  const [copied, setCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [upvotes, setUpvotes] = useState(prompt.upvotes);
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

  const handleUpvote = () => {
    setUpvotes((prev) => prev + 1);
    toast({
      title: 'Upvoted!',
      description: 'Thanks for your feedback',
    });
  };

  const handleFavorite = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? 'Removed from favorites' : 'Added to favorites',
      description: isLiked ? 'Prompt removed from your collection' : 'Prompt saved to your favorites',
    });
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Image Preview Section */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-secondary via-secondary/80 to-muted">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <p className="line-clamp-4 text-center text-xs leading-relaxed text-foreground/70 italic">
            "{prompt.image}"
          </p>
        </div>
        <span
          className={cn(
            'absolute left-3 top-3 inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize backdrop-blur-sm',
            categoryColors[prompt.category]
          )}
        >
          {prompt.category}
        </span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-3 p-5 pb-0">
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-snug text-foreground">
            {prompt.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 pt-3">
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {prompt.content}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 px-5 pb-4">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border/40 bg-secondary/30 px-5 py-3">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleUpvote}
            className="h-8 gap-1.5 px-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="text-xs font-medium">{upvotes}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleFavorite}
            className={cn(
              'h-8 px-2',
              isLiked ? 'text-category-women' : 'text-muted-foreground hover:text-category-women'
            )}
          >
            <Heart className={cn('h-4 w-4', isLiked && 'fill-current')} />
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 px-3 text-muted-foreground hover:text-foreground"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-xs">Run</span>
          </Button>
          <Button
            variant={copied ? 'default' : 'ghost'}
            size="sm"
            onClick={handleCopy}
            className={cn(
              'h-8 gap-1.5 px-3 transition-all duration-200',
              copied
                ? 'bg-success text-success-foreground hover:bg-success/90'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span className="text-xs">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PromptCard;
