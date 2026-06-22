import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CreatePrompt = () => {
  const navigate = useNavigate();
  const { session } = useAuth(); 
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({ title: "", prompt: "", tag: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session?.user) {
      toast({
        title: "Error",
        description: "You must be logged in to create a prompt.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("prompts").insert({
        title: post.title,
        content: post.prompt,
        tags: post.tag ? post.tag.split(',').map((t: string) => t.trim().replace(/^#/, '')) : [],
        user_id: session.user.id,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Prompt created successfully!",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-2xl py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-primary">Create Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border shadow-sm">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <Input 
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="e.g. Creative Story Writer"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Your AI Prompt</label>
          <Textarea 
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            className="h-32"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tag</label>
          <Input 
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#writing"
            required
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" type="button" onClick={() => navigate("/")}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Prompt"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePrompt;
