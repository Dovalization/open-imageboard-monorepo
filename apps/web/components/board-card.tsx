import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import type { Board } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

interface BoardCardProps {
  board: Board;
}

export function BoardCard({ board }: BoardCardProps) {
  return (
    <Card className="group overflow-hidden shadow-card card-hover-effect bg-card/90 backdrop-blur-sm border border-white/5 flex flex-col w-full relative z-30">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
              {board.icon}
            </div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              /{board.id}/
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            {board.trend === 'rising' && (
              <div className="bg-primary/10 px-2 py-1 rounded-full flex items-center">
                <TrendingUp className="h-3 w-3 text-primary mr-1" />
                <span className="text-xs text-primary">Rising</span>
              </div>
            )}
            {board.trend === 'new' && (
              <div className="bg-blue-500/10 px-2 py-1 rounded-full flex items-center">
                <span className="text-xs text-blue-400">New</span>
              </div>
            )}
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium 
              ${board.activity === 'high' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}
            >
              {board.activity === 'high' ? 'High Activity' : 'Active'}
            </div>
          </div>
        </div>
        <CardDescription className="text-base font-medium">
          {board.name}
        </CardDescription>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {board.description}
        </p>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">
              {board.threadCount}
            </span>
            <span className="text-xs text-muted-foreground">Threads</span>
          </div>
          <div className="h-8 w-px bg-border/40"></div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">
              {board.postCount}
            </span>
            <span className="text-xs text-muted-foreground">Posts</span>
          </div>
          <div className="h-8 w-px bg-border/40"></div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">
              {Math.round(board.postCount / board.threadCount)}
            </span>
            <span className="text-xs text-muted-foreground">Avg</span>
          </div>
        </div>
      </CardContent>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <CardFooter className="border-t border-white/5 bg-background/20 pt-3">
        <Button asChild className="w-full button-hover-effect">
          <Link href={`/board/${board.id}`}>Browse Board</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
