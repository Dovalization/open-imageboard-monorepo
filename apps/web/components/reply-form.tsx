'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';
import { useState } from 'react';

interface ReplyFormProps {
  threadId: string;
}

export function ReplyForm({ threadId }: ReplyFormProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);

    try {
      console.log('Creating reply:', { threadId, content });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setContent('');
    } catch (error) {
      console.error('Error creating reply:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment..."
        className="min-h-[100px] bg-background/50 focus:ring-2 focus:ring-primary/50 transition-all border-white/10"
        required
      />
      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="bg-background/50 hover:bg-background/80 border-dashed border border-white/20"
        >
          <Upload className="mr-1 h-4 w-4" />
          Attach
        </Button>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-white/10"
            onClick={() => setContent('')}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            size="sm"
            disabled={isSubmitting || !content.trim()}
            className="bg-primary hover:bg-primary/90"
          >
            {isSubmitting ? 'Posting...' : 'Comment'}
          </Button>
        </div>
      </div>
    </form>
  );
}
