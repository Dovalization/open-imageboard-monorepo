import Link from "next/link"
import { CalendarIcon, Bookmark, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface BoardSidebarProps {
  board: {
    id: string
    name: string
    description: string
    createdAt: string
    visibility: "public" | "private"
    threadCount: number
    postCount: number
    popularity: "high" | "medium" | "low"
    icon: string
  }
}

export function BoardSidebar({ board }: BoardSidebarProps) {
  return (
    <div className="space-y-6">
      <Card className="bg-card/70 backdrop-blur-sm border-white/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-md text-lg">
              {board.icon}
            </span>
            About /{board.id}/
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{board.description}</p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <CalendarIcon className="h-4 w-4 text-primary/70" />
              <span>Created {new Date(board.createdAt).toLocaleDateString()}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="capitalize">
                {board.visibility}
              </Badge>
              <Badge
                variant="outline"
                className={`
                  ${
                    board.popularity === "high"
                      ? "bg-green-500/10 text-green-400 border-green-500/20"
                      : board.popularity === "medium"
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                  }
                `}
              >
                {board.popularity === "high"
                  ? "High Activity"
                  : board.popularity === "medium"
                    ? "Medium Activity"
                    : "Low Activity"}
              </Badge>
            </div>
          </div>

          <Separator className="bg-white/5" />

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">{board.threadCount.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground">Threads</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">{board.postCount.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground">Posts</span>
            </div>
          </div>

          <div className="pt-2">
            <Button variant="outline" className="w-full">
              <Bookmark className="mr-2 h-4 w-4" />
              Bookmark
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/70 backdrop-blur-sm border-white/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Board Rules</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">1. Be respectful</p>
            <p className="text-xs text-muted-foreground">
              Treat others with respect. No harassment or personal attacks.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">2. Stay on topic</p>
            <p className="text-xs text-muted-foreground">Keep discussions relevant to the board's theme.</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">3. No spam</p>
            <p className="text-xs text-muted-foreground">Don't post repetitive or irrelevant content.</p>
          </div>
          <Link href="#" className="text-xs text-primary hover:underline block mt-2">
            View all rules
          </Link>
        </CardContent>
      </Card>

      <Card className="bg-card/70 backdrop-blur-sm border-white/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Moderators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary/70" />
            <span className="text-sm">BoardAdmin</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary/70" />
            <span className="text-sm">ModUser123</span>
          </div>
          <Link href="#" className="text-xs text-primary hover:underline block mt-2">
            View all moderators
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
