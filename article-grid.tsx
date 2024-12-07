'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Article {
  id: number
  category: string
  timeAgo: string
  title: string
  image: string
  likes: number
  url: string
}

export function ArticleGrid() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetch('/api/articles')
      .then(response => response.json())
      .then(data => setArticles(data))
  }, [])

  return (
    <section className="container py-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <Card key={article.id}>
            <Link href={article.url}>
              <CardContent className="p-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">#{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.timeAgo}</span>
                  </div>
                  <h3 className="font-medium line-clamp-2">{article.title}</h3>
                </div>
              </CardContent>
            </Link>
            <CardFooter className="p-4 pt-0">
              <div className="flex items-center text-muted-foreground">
                <Heart className="h-4 w-4 mr-1" />
                <span className="text-xs">{article.likes}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

