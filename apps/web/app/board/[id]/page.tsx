import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Clock, MessageSquare } from 'lucide-react';
import { getBoardById, getThreadsByBoardId } from '@/lib/mock-data';

import { BoardSidebar } from '@/components/board-sidebar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { NewThreadButton } from '@/components/new-thread-button';
import coverArt from '@/public/cover-art.jpg';

export default function BoardPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const boardData = getBoardById(id) || {
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
    description: 'A community board for discussions.',
    createdAt: '2022-01-01T00:00:00Z',
    visibility: 'public',
    threadCount: 0,
    postCount: 0,
    popularity: 'low' as const,
    icon: '📋',
    coverImage: '/placeholder.svg?height=400&width=1200',
  };
  const mockThreads = getThreadsByBoardId(id);

  return (
    <div className="w-full">
      {/* Cover Image with Gradient Overlay */}
      <div className="h-48 md:h-64 w-full relative">
        <Image src={coverArt} alt="Board Cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
      </div>
      {/* Board Title and Info - Positioned over the gradient */}
      {/* Main Sidebar */}
      {/* <MainSidebar /> */}

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300 -mt-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Thread List */}
            <div className="flex-1 relative">
              <div className="flex justify-end items-end mb-6">
                <div className="flex items-center gap-4 absolute justify-self-start left-0 ">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl md:text-4xl border-4 border-background shadow-lg">
                    {boardData.icon}
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                      /{id}/
                    </h1>
                    <p className="text-lg text-white">{boardData.name}</p>
                  </div>
                </div>
                <NewThreadButton boardId={id} />
              </div>

              <div className="space-y-6">
                {mockThreads.map((thread) => (
                  <Card
                    key={thread.id}
                    className="group overflow-hidden shadow-card card-hover-effect bg-card/70 backdrop-blur-sm border border-white/5"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {thread.title}
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {thread.author}{' '}
                          <span className="text-primary/80">
                            (ID: {thread.authorId})
                          </span>
                        </div>
                      </div>
                      <CardDescription className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {new Date(thread.createdAt).toLocaleString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4">
                        {thread.imageUrl && (
                          <div className="flex-shrink-0">
                            <img
                              src={thread.imageUrl || '/placeholder.svg'}
                              alt="Thread attachment"
                              className="w-[150px] h-auto rounded-md object-cover shadow-md"
                            />
                          </div>
                        )}
                        <p className="text-sm line-clamp-3">{thread.content}</p>
                      </div>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <CardFooter className="flex justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        {thread.replyCount} replies
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="button-hover-effect"
                      >
                        <Link href={`/board/${id}/thread/${thread.id}`}>
                          View Thread
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Board Sidebar */}
            <div className="w-full lg:w-80 shrink-0">
              <BoardSidebar board={boardData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
