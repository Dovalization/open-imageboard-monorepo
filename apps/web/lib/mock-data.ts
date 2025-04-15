import boardsData from '@/mocks/boards.json';
import threadDetailsData from '@/mocks/thread-details.json';
import threadsData from '@/mocks/threads.json';

export type Board = (typeof boardsData.boards)[0];
export type Thread = (typeof threadsData.threads)[0];
export type RecentThread = (typeof threadsData.recentThreads)[0];
export type ThreadDetail = typeof threadDetailsData.thread;
export type Reply = (typeof threadDetailsData.thread.replies)[0];

export function getAllBoards(): Board[] {
  return boardsData.boards;
}

export function getBoardsByCategory(): Record<string, Board[]> {
  const categories: Record<string, Board[]> = {};

  boardsData.boards.forEach((board) => {
    if (!categories[board.category]) {
      categories[board.category] = [];
    }
    categories[board.category]?.push(board);
  });

  return categories;
}

export function getAllCategories(): string[] {
  return boardsData.categories;
}

export function getFavoriteBoards() {
  return boardsData.favoriteBoards;
}

export function getRecentBoards() {
  return boardsData.recentBoards;
}

export function getBoardById(id: string): Board | undefined {
  return boardsData.boards.find((board) => board.id === id);
}

export function getThreadsByBoardId(boardId: string): Thread[] {
  return threadsData.threads.filter((thread) => thread.boardId === boardId);
}

export function getAllThreads(): Thread[] {
  return threadsData.threads;
}

export function getRecentThreads(): RecentThread[] {
  return threadsData.recentThreads;
}

export function getThreadById(threadId: string): Thread | undefined {
  return threadsData.threads.find((thread) => thread.id === threadId);
}

export function getThreadDetails(threadId: string): ThreadDetail {
  // In a real app, we would fetch the thread details based on the ID
  // For now, we'll just return the mock data
  return threadDetailsData.thread;
}
