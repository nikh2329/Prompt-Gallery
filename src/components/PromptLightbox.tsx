import { useState } from 'react';
import { Copy, Check, X, ZoomIn, ZoomOut, Sparkles, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import type { Prompt } from '@/lib/prompts';

interface PromptLightboxProps {
  prompt: Prompt | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryColors: Record<string, string> = {
  men: 'bg-primary/20 text-primary border-primary/30',
  women: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  couple: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  kids: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

const PromptLightbox = ({ prompt, isOpen, onClose }: PromptLightboxProps) => {
  const [copied, setCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const { toast } = useToast();
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  if (!prompt) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    toast({
      title: 'Copied!',
      description: 'Prompt copied to clipboard',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleClose = () => {
    setZoomLevel(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 gap-0 bg-background/95 backdrop-blur-xl border-border/50 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{prompt.title}</DialogTitle>
        </VisuallyHidden>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[95vh]">
          {/* Image Section */}
          <div className="relative flex-1 bg-black/50 flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-[500px]">
            {/* Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-sm px-3 py-2 border border-border/50">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>

            {/* Image with zoom */}
            <div className="overflow-auto w-full h-full flex items-center justify-center p-4">
              <motion.img
                src={prompt.imageSrc}
                alt={prompt.title}
                className="max-w-full max-h-full object-contain cursor-grab active:cursor-grabbing"
                style={{ transform: `scale(${zoomLevel})` }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                transition={{ duration: 0.3 }}
                draggable={false}
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-[380px] p-6 overflow-y-auto border-t lg:border-t-0 lg:border-l border-border/50 bg-background/50">
            {/* Category Badge */}
            <span
              className={cn(
                'inline-flex rounded-full border px-3 py-1 text-xs font-medium capitalize mb-4',
                categoryColors[prompt.category]
              )}
            >
              {prompt.category}
            </span>

            {/* Title */}
            <h2 className="text-xl font-bold text-foreground mb-4">{prompt.title}</h2>

            {/* Full Prompt Content */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Prompt</h3>
              <div className="glass-card p-4 rounded-lg">
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                  {prompt.content}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta Info */}
            <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>AI Generated</span>
              </div>
              <span>•</span>
              <span>{prompt.upvotes} upvotes</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => toggleFavorite(prompt.id)}
                className={cn(
                  'flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all border',
                  isFavorite(prompt.id)
                    ? 'bg-favorite/20 text-favorite border-favorite/30'
                    : 'bg-secondary text-muted-foreground border-border hover:text-favorite'
                )}
              >
                <Heart className={cn('h-5 w-5', isFavorite(prompt.id) && 'fill-current')} />
                {isFavorite(prompt.id) ? 'Saved' : 'Save'}
              </button>
              <button
                onClick={handleCopy}
                className="flex-1 btn-gradient flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all"
              >
                {copied ? (
                  <>
                    <Check className="h-5 w-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromptLightbox;
