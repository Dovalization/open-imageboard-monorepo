"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogIn, Settings, Shield, User } from "lucide-react"
import { useState } from "react"
import { LoginDialog } from "./login-dialog"

export function UserNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  // Mock function for demonstration
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  if (!isLoggedIn) {
    return (
      <>
        <Button
          variant="outline"
          onClick={() => setIsLoginOpen(true)}
          className="bg-primary/10 border border-primary/20 hover:bg-primary/20 button-hover-effect"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
        <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} onLogin={() => setIsLoggedIn(true)} />
      </>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full p-0 overflow-hidden border border-white/10 shadow-md hover:shadow-lg transition-all"
        >
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary/20 text-primary">AN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Anonymous</p>
            <p className="text-xs leading-none text-muted-foreground">ID: a1b2c3d4</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          {/* Show moderation tools if user has permissions */}
          <DropdownMenuItem>
            <Shield className="mr-2 h-4 w-4" />
            <span>Moderation</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
