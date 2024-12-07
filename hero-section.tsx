import Link from 'next/link'
import { Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  const heroContent = {
    category: "originals",
    timeAgo: "2 days ago",
    title: "The Truth Behind Adivasi Neelambari Herbal Hair Oil",
    videoUrl: "https://www.youtube.com/embed/placeholder",
    contentUrl: "/originals/adivasi-neelambari-herbal-hair-oil"
  }

  return (
    <section className="container py-6">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={heroContent.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className="text-xs text-muted-foreground">#{heroContent.category}</span>
                <span className="text-xs text-muted-foreground ml-4">{heroContent.timeAgo}</span>
              </div>
              <h1 className="text-2xl font-bold mb-4">
                {heroContent.title}
              </h1>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
                <Link href={heroContent.contentUrl}>WATCH NOW</Link>
              </Button>
              <div className="flex space-x-2 mt-4">
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

