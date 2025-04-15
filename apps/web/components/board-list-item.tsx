'use client';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import type { Board } from '@/lib/mock-data';
import { BoardCard } from '@/components/board-card';
import Link from 'next/link';
import { useState } from 'react';

interface BoardListItemProps {
  board: Board;
}

export function BoardListItem({ board }: BoardListItemProps) {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Link
          href={`/board/${board.id}`}
          className="text-sm hover:text-primary transition-colors"
        >
          <span className="flex items-center">
            <span className="mr-1.5">{board.icon}</span>
            <span className="font-medium">{board.name}</span>
          </span>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        alignOffset={-10}
        sideOffset={10}
        align="start"
        className="w-80 p-0 bg-transparent border-none shadow-xl "
      >
        <BoardCard board={board} />
      </HoverCardContent>
    </HoverCard>
  );
}
