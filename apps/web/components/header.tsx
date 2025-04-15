import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserNav } from '@/components/user-nav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/90 border-b border-border/40 shadow-sm flex justify-center w-full">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl flex items-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mr-2 shadow-lg">
              <span className="text-white font-bold">O</span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              OpenBoard
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
