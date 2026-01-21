import { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import type { Prompt } from '@/lib/prompts';

interface PromptCardProps {
  prompt: Prompt;
}

const categoryColors: Record<string, string> = {
  men: 'bg-purple-100 text-purple-800',
  women: 'bg-pink-100 text-pink-800',
  couple: 'bg-rose-100 text-rose-800',
  kids: 'bg-amber-100 text-amber-800',
  landscapes: 'bg-emerald-100 text-emerald-800',
  scifi: 'bg-cyan-100 text-cyan-800',
};

const PromptCard = ({ prompt }: PromptCardProps) => {
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
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          src={prompt.imageSrc}
          alt={prompt.title}
          className="h-56 w-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category & Copy Icon Row */}
        <div className="mb-3 flex items-center justify-between">
          <span
            className={cn(
              'inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize',
              categoryColors[prompt.category]
            )}
          >
            {prompt.category}
          </span>
          <button
            onClick={handleCopy}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {prompt.title}
        </h3>

        {/* Full Prompt Content */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-700">
          {prompt.content}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs">AI Generated</span>
          </div>
          <button
            onClick={handleCopy}
            className="text-sm font-medium text-purple-600 transition-colors hover:text-purple-700"
          >
            {copied ? 'Copied!' : 'Copy Prompt'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default PromptCard;
