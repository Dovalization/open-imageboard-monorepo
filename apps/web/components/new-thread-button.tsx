"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, Upload } from "lucide-react"
import { useState } from "react"

interface NewThreadButtonProps {
  boardId: string
}

export function NewThreadButton({ boardId }: NewThreadButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Mock API call
    try {
      // In a real app, you would send the data to your API
      console.log("Creating new thread:", { boardId, title, content })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form and close dialog
      setTitle("")
      setContent("")
      setIsOpen(false)
    } catch (error) {
      console.error("Error creating thread:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary shadow-lg shadow-primary/20 button-hover-effect">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Thread
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-card/80 backdrop-blur-md border border-white/10">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Create a New Thread</DialogTitle>
            <DialogDescription>Start a new discussion on /{boardId}/</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a descriptive title"
                required
                className="bg-background/50 focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post content here..."
                className="min-h-[120px] bg-background/50 focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Attach Image (Optional)</Label>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-background/50 hover:bg-background/80 border-dashed border-2 button-hover-effect"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Supported formats: JPG, PNG, GIF. Max size: 5MB.</p>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting} className="button-hover-effect">
              {isSubmitting ? "Creating..." : "Create Thread"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
