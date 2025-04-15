import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Clock,
  Eye,
  FlameIcon as Fire,
  MessageSquare,
  NewspaperIcon as NewsPaper,
  TrendingUp,
} from 'lucide-react';
import {
  getAllCategories,
  getAllThreads,
  getBoardsByCategory,
} from '@/lib/mock-data';

import { BoardListItem } from '@/components/board-list-item';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const boardsByCategory = getBoardsByCategory();
  const categories = getAllCategories();

  // Get popular threads for the homepage
  const popularThreads = getAllThreads()
    .sort((a, b) => (b.hotness || 0) - (a.hotness || 0))
    .slice(0, 5);

  return (
    <div className="container py-10 md:py-16 flex flex-col gap-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          Welcome to OpenBoard
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A home for the independent, the anonymous, and the unapologetically
          real.
        </p>
      </div>

      <Card className="bg-card/70 backdrop-blur-sm border-white/5 shadow-md">
        <CardHeader className="border-b border-white/5 bg-background/30">
          <CardTitle className="text-xl flex items-center">
            <NewsPaper className="mr-2 h-5 w-5 text-primary" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Boards
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category} className="space-y-4">
                <h2 className="font-bold text-lg border-b border-white/10 pb-2 mb-3">
                  {category}
                </h2>
                <ul className="space-y-2.5">
                  {boardsByCategory[category]?.map((board) => (
                    <li key={board.id} className="w-fit">
                      <BoardListItem board={board} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Threads Section */}
      <Card className="bg-card/70 backdrop-blur-sm border-white/5 shadow-md z-0">
        <CardHeader className="border-b border-white/5 bg-background/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="text-xl flex items-center">
              <Fire className="mr-2 h-5 w-5 text-primary" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Popular Threads
              </span>
            </CardTitle>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full md:w-auto"
            >
              <Link href="/popular">View All Popular Threads</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            {popularThreads.map((thread) => (
              <Card
                key={thread.id}
                className="group overflow-hidden shadow-card card-hover-effect bg-card/70 backdrop-blur-sm border border-white/5"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/board/${thread.boardId}`}
                        className="bg-secondary/50 px-2 py-1 rounded-full text-sm hover:bg-primary/20 transition-colors"
                      >
                        /{thread.boardId}/
                      </Link>
                      {thread.trending && (
                        <div className="bg-primary/10 px-2 py-1 rounded-full flex items-center">
                          <TrendingUp className="h-3 w-3 text-primary mr-1" />
                          <span className="text-xs text-primary">Trending</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 bg-background/50 px-2 py-1 rounded-full">
                      <Fire className="h-3 w-3 text-orange-400" />
                      <span className="text-xs font-medium">
                        {thread.hotness}%
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-2 group-hover:text-primary transition-colors">
                    <Link href={`/board/${thread.boardId}/thread/${thread.id}`}>
                      {thread.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Clock className="h-3 w-3" />
                    <span>{new Date(thread.createdAt).toLocaleString()}</span>
                    <span className="text-primary/80">
                      by {thread.author} (ID: {thread.authorId})
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {thread.imageUrl && (
                      <div className="flex-shrink-0">
                        <img
                          src={thread.imageUrl || '/placeholder.svg'}
                          alt="Thread attachment"
                          className="w-[120px] h-auto rounded-md object-cover shadow-md"
                        />
                      </div>
                    )}
                    <p className="text-sm line-clamp-2">{thread.content}</p>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <CardFooter className="flex justify-between border-t border-white/5 bg-background/20 pt-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MessageSquare className="mr-1 h-4 w-4 text-primary/70" />
                      {thread.replyCount.toLocaleString()} replies
                    </div>
                    <div className="flex items-center">
                      <Eye className="mr-1 h-4 w-4 text-primary/70" />
                      {thread.viewCount.toLocaleString()} views
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="button-hover-effect"
                  >
                    <Link href={`/board/${thread.boardId}/thread/${thread.id}`}>
                      View Thread
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
