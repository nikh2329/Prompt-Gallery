"use client";

import { useState } from "react";
import { useSession } from "next-auth/react"; // Or your specific auth hook
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js"; // Ensure you have this

// Initialize Supabase (Replace with your actual env variables or import your client)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const CreatePrompt = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // 1. Get the Current User
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        alert("You must be logged in to create a prompt!");
        return;
      }

      // 2. Insert into Database with creator_id
      const { error } = await supabase
        .from("prompts")
        .insert({
          prompt: post.prompt,
          tag: post.tag,
          creator_id: user.id, // <--- THIS FIXES YOUR ERROR
        });

      if (error) throw error;

      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Create Post</span>
      </h1>
      <form
        onSubmit={createPrompt}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag (e.g., #product, #webdevelopment)
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePrompt;