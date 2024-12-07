'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stories = [
  { id: 1, title: "Story 1", image: "/placeholder.svg", url: "/web-stories/story-1" },
  { id: 2, title: "Story 2", image: "/placeholder.svg", url: "/web-stories/story-2" },
  { id: 3, title: "Story 3", image: "/placeholder.svg", url: "/web-stories/story-3" },
  { id: 4, title: "Story 4", image: "/placeholder.svg", url: "/web-stories/story-4" },
  { id: 5, title: "Story 5", image: "/placeholder.svg", url: "/web-stories/story-5" },
]

export function WebStories() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="container py-6">
      <h2 className="text-2xl font-bold mb-4">Google Web Stories</h2>
      <div className="relative">
        <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {stories.map((story) => (
            <Card key={story.id} className="flex-shrink-0 w-48">
              <Link href={story.url}>
                <CardContent className="p-0">
                  <img src={story.image} alt={story.title} className="w-full aspect-[9/16] object-cover" />
                  <div className="p-2">
                    <h3 className="font-medium text-sm">{story.title}</h3>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

