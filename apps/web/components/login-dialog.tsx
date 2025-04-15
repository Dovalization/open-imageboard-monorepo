"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github } from "lucide-react"

interface LoginDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onLogin: () => void
}

export function LoginDialog({ open, onOpenChange, onLogin }: LoginDialogProps) {
  const handleAnonymousLogin = () => {
    // Handle anonymous login logic here
    onLogin()
    onOpenChange(false)
  }

  const handleOAuthLogin = () => {
    // Handle OAuth login logic here
    onLogin()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-card/80 backdrop-blur-md border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Login to OpenBoard</DialogTitle>
          <DialogDescription className="text-center">
            Choose how you want to participate in the community.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="anonymous" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="anonymous">Anonymous</TabsTrigger>
            <TabsTrigger value="oauth">OAuth</TabsTrigger>
          </TabsList>
          <TabsContent value="anonymous" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Display Name (Optional)</Label>
              <Input
                id="name"
                placeholder="Anonymous"
                className="bg-background/50 focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tripcode">Tripcode (Optional)</Label>
              <Input
                id="tripcode"
                type="password"
                placeholder="For identity verification"
                className="bg-background/50 focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <p className="text-xs text-muted-foreground">
                A tripcode helps others verify your identity across posts while remaining anonymous.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="oauth" className="space-y-4 py-4">
            <p className="text-sm text-muted-foreground">
              Connect with an OAuth provider to login. Your personal information will not be displayed.
            </p>
            <Button
              className="w-full button-hover-effect bg-zinc-800 hover:bg-zinc-700 text-white"
              onClick={handleOAuthLogin}
            >
              <Github className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button onClick={handleAnonymousLogin} className="w-full button-hover-effect">
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
