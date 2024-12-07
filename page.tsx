import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ArticleGrid } from "@/components/article-grid"
import { WebStories } from "@/components/web-stories"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <WebStories />
        <ArticleGrid />
      </main>
    </div>
  )
}

