'use client';

import {
  ChevronDown,
  ChevronRight,
  Clock,
  Compass,
  Home,
  Plus,
  TrendingUp,
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
// Replace the mock data at the top with imports
import { getFavoriteBoards, getRecentBoards } from '@/lib/mock-data';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

// Replace the favoriteBoards and recentBoards constants with:
const favoriteBoards = getFavoriteBoards();
const recentBoards = getRecentBoards();

export function NavigationSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [favoritesOpen, setFavoritesOpen] = useState(true);
  const [recentOpen, setRecentOpen] = useState(true);

  return (
    <div
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card/90 backdrop-blur-sm border-r border-white/5 transition-all duration-300 z-30 ${isOpen ? 'w-64' : 'w-16'}`}
    >
      <div className="absolute -right-3 top-4">
        <Button
          variant="outline"
          size="icon"
          className="h-6 w-6 rounded-full bg-background border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3 rotate-180" />
          )}
        </Button>
      </div>

      <ScrollArea className="h-full">
        <div className="p-4">
          <div className="space-y-2">
            <Link
              href="/"
              className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${isOpen ? 'justify-start' : 'justify-center'}`}
            >
              <Home className="h-5 w-5 text-primary" />
              {isOpen && <span>Home</span>}
            </Link>
            <Link
              href="/popular"
              className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${isOpen ? 'justify-start' : 'justify-center'}`}
            >
              <TrendingUp className="h-5 w-5 text-primary" />
              {isOpen && <span>Popular</span>}
            </Link>
            <Link
              href="/recent"
              className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${isOpen ? 'justify-start' : 'justify-center'}`}
            >
              <Clock className="h-5 w-5 text-primary" />
              {isOpen && <span>Recent</span>}
            </Link>
            <Link
              href="/"
              className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${isOpen ? 'justify-start' : 'justify-center'}`}
            >
              <Compass className="h-5 w-5 text-primary" />
              {isOpen && <span>Explore</span>}
            </Link>
          </div>

          {isOpen && (
            <>
              <div className="mt-6">
                <Collapsible
                  open={favoritesOpen}
                  onOpenChange={setFavoritesOpen}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium">
                    <span>Favorites</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${favoritesOpen ? 'rotate-180' : ''}`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 pt-1">
                    {favoriteBoards.map((board) => (
                      <Link
                        key={board.id}
                        href={`/board/${board.id}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/10 transition-colors text-sm"
                      >
                        <span className="w-5 h-5 flex items-center justify-center">
                          {board.icon}
                        </span>
                        <span>/{board.id}/</span>
                      </Link>
                    ))}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start pl-3 text-muted-foreground"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Favorite
                    </Button>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <div className="mt-2">
                <Collapsible open={recentOpen} onOpenChange={setRecentOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium">
                    <span>Recent</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${recentOpen ? 'rotate-180' : ''}`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 pt-1">
                    {recentBoards.map((board) => (
                      <Link
                        key={board.id}
                        href={`/board/${board.id}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/10 transition-colors text-sm"
                      >
                        <span className="w-5 h-5 flex items-center justify-center">
                          {board.icon}
                        </span>
                        <span>/{board.id}/</span>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </>
          )}

          {!isOpen && (
            <div className="mt-6 flex flex-col items-center space-y-4">
              {favoriteBoards.map((board) => (
                <Link
                  key={board.id}
                  href={`/board/${board.id}`}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-primary/10 transition-colors"
                  title={`/${board.id}/`}
                >
                  <span>{board.icon}</span>
                </Link>
              ))}
              <div className="w-8 border-t border-white/10"></div>
              {recentBoards.map((board) => (
                <Link
                  key={board.id}
                  href={`/board/${board.id}`}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-primary/10 transition-colors"
                  title={`/${board.id}/`}
                >
                  <span>{board.icon}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
