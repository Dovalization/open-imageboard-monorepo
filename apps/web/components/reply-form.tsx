"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from "lucide-react"
import { useState } from "react"

interface ReplyFormProps {
  threadId: string
}

export function ReplyForm({ threadId }: ReplyFormProps) {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsSubmitting(true)

    // Mock API call
    try {
      // In a real app, you would send the data to your API
      console.log("Creating reply:", { threadId, content })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form
      setContent("")

      // In a real app, you would update the UI with the new reply
      // or trigger a refetch of the thread data
    } catch (error) {
      console.error("Error creating reply:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-card/70 backdrop-blur-sm shadow-md border-t-2 border-t-primary/30">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center">
            <span className="bg-gradient-to-r from-primary/20 to-purple-500/20 px-2 py-1 rounded-md">Post a Reply</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your reply here..."
              className="min-h-[120px] bg-background/50 focus:ring-2 focus:ring-primary/50 transition-all"
              required
            />
            <div>
              <Button
                type="button"
                variant="outline"
                className="bg-background/50 hover:bg-background/80 border-dashed border-2 button-hover-effect w-full sm:w-auto"
              >
                <Upload className="mr-2 h-4 w-4" />
                Attach Image
              </Button>
              <p className="mt-1 text-xs text-muted-foreground">Supported formats: JPG, PNG, GIF. Max size: 5MB.</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            disabled={isSubmitting || !content.trim()}
            className="button-hover-effect shadow-md shadow-primary/20"
          >
            {isSubmitting ? "Posting..." : "Post Reply"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
