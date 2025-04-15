import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Clock, Flag, Reply } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ReplyForm } from '@/components/reply-form';
import { Separator } from '@/components/ui/separator';
import { getThreadDetails } from '@/lib/mock-data';

export default function ThreadPage({
  params,
}: {
  params: { id: string; threadId: string };
}) {
  const { id, threadId } = params;

  // Mock data for a thread and its replies
  const mockThread = getThreadDetails(threadId);

  // In a real app, you would fetch the thread data based on the ID

  return (
    <div className="container py-6 md:py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          {mockThread.title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="bg-secondary/50 px-2 py-0.5 rounded-full">
            /{id}/
          </span>
          <span>•</span>
          <Clock className="h-3 w-3" />
          <span>{new Date(mockThread.createdAt).toLocaleString()}</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Original post */}
        <Card
          id={`post-${mockThread.id}`}
          className="border-primary/20 shadow-lg bg-card/90 backdrop-blur-sm"
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6 ring-2 ring-primary/30">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    {mockThread.authorId.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <CardDescription>
                  <span className="font-medium">{mockThread.author}</span>{' '}
                  <span className="text-primary/80">
                    (ID: {mockThread.authorId})
                  </span>
                </CardDescription>
              </div>
              <CardDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 hover:bg-destructive/10 hover:text-destructive transition-colors"
                >
                  <Flag className="h-4 w-4" />
                  <span className="sr-only">Report</span>
                </Button>
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
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
          </CardContent>
          <CardFooter className="pt-0">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 hover:bg-primary/10 hover:text-primary"
            >
              <Reply className="mr-1 h-4 w-4" />
              Reply
            </Button>
          </CardFooter>
        </Card>

        <Separator />

        {/* Replies */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center">
            <span className="bg-gradient-to-r from-primary/20 to-purple-500/20 px-2 py-1 rounded-md">
              Replies ({mockThread.replies.length})
            </span>
          </h2>

          {mockThread.replies.map((reply) => (
            <Card
              key={reply.id}
              id={`post-${reply.id}`}
              className="bg-card/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all border border-white/5"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-secondary/30">
                        {reply.authorId.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <CardDescription>
                      <span className="font-medium">{reply.author}</span>{' '}
                      <span className="text-primary/80">
                        (ID: {reply.authorId})
                      </span>
                    </CardDescription>
                  </div>
                  <CardDescription>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 hover:bg-destructive/10 hover:text-destructive transition-colors"
                    >
                      <Flag className="h-4 w-4" />
                      <span className="sr-only">Report</span>
                    </Button>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {reply.imageUrl && (
                    <div className="flex-shrink-0">
                      <img
                        src={reply.imageUrl || '/placeholder.svg'}
                        alt="Reply attachment"
                        className="max-w-[200px] h-auto rounded-md shadow-md"
                      />
                    </div>
                  )}
                  <p className="whitespace-pre-line">{reply.content}</p>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 hover:bg-primary/10 hover:text-primary"
                >
                  <Reply className="mr-1 h-4 w-4" />
                  Reply
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <ReplyForm threadId={threadId} />
      </div>
    </div>
  );
}
