import { ArrowLeft, Clock, Flag, MessageSquare, Reply } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ReplyForm } from '@/components/reply-form';
import { getThreadDetails } from '@/lib/mock-data';

export default function ThreadPage({
  params,
}: {
  params: { id: string; threadId: string };
}) {
  const { id, threadId } = params;

  const mockThread = getThreadDetails(threadId);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="container py-6  flex flex-col gap-6">
      {/* Back button and board info */}
      <div className="flex items-center gap-2">
        <Link
          href={`/board/${id}`}
          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to /{id}/
        </Link>
      </div>

      {/* Main post */}
      <div className="bg-card/90 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
        {/* Post header */}
        <div className="p-4 pb-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Link
              href={`/board/${id}`}
              className="font-medium text-primary hover:underline"
            >
              /{id}/
            </Link>
            <span>•</span>
            <span>Posted by {mockThread.author}</span>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{formatDateTime(mockThread.createdAt)}</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-2">{mockThread.title}</h1>

          <div className="mb-2">
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Discussion
            </Badge>
          </div>
        </div>

        {/* Post content */}
        <div className="px-4 pb-4">
          <div className="flex gap-4">
            {mockThread.imageUrl && (
              <div className="flex-shrink-0">
                <img
                  src={mockThread.imageUrl || '/placeholder.svg'}
                  alt="Post attachment"
                  className="max-w-[300px] h-auto rounded-md shadow-md"
                />
              </div>
            )}
            <p className="whitespace-pre-line">{mockThread.content}</p>
          </div>
        </div>

        {/* Post actions */}
        <div className="flex items-center gap-2 px-4 py-2 border-t border-white/10 bg-background/30">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <MessageSquare className="h-4 w-4 mr-1" />
            {mockThread.replies.length} replies
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground ml-auto"
          >
            <Flag className="h-4 w-4 mr-1" />
            Report
          </Button>
        </div>
      </div>

      {/* Comment input */}
      <ReplyForm threadId={threadId} />
      <hr className="border-white/10" />
      {/* Comment sorting */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Replies</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="bg-background border border-white/10 rounded-md text-sm py-1 px-2">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* Comments */}
      <div className="flex flex-col gap-4">
        {mockThread.replies.map((reply) => (
          <div key={reply.id} className="flex gap-3">
            {/* Comment content */}
            <div className="flex-1">
              <div className="bg-card/70 backdrop-blur-sm rounded-lg border border-white/5 overflow-hidden">
                {/* Comment header */}
                <div className="p-3 pb-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback className="bg-secondary/30 text-xs">
                        {reply.authorId.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">{reply.author}</span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatDateTime(reply.createdAt)}
                    </span>
                  </div>
                </div>

                {/* Comment content */}
                <div className="px-3 pb-3">
                  <div className="flex gap-3">
                    {reply.imageUrl && (
                      <div className="flex-shrink-0">
                        <img
                          src={reply.imageUrl || '/placeholder.svg'}
                          alt="Reply attachment"
                          className="max-w-[180px] h-auto rounded-md shadow-sm"
                        />
                      </div>
                    )}
                    <p className="whitespace-pre-line text-sm">
                      {reply.content}
                    </p>
                  </div>
                </div>

                {/* Comment actions */}
                <div className="flex items-center gap-2 px-3 py-1 border-t border-white/5 bg-background/20">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs text-muted-foreground hover:text-primary"
                  >
                    <Reply className="mr-1 h-3 w-3" />
                    Reply
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs text-muted-foreground hover:text-destructive ml-auto"
                  >
                    <Flag className="mr-1 h-3 w-3" />
                    Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
