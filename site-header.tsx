import Link from "next/link"
import { Facebook, Youtube, Twitter, Instagram, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="w-full border-b">
      <div className="container flex flex-col items-center py-4 md:h-24">
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <img src="/placeholder.svg" alt="Curly Tales Logo" className="h-12" />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between w-full md:justify-end space-x-4">
          <div className="hidden md:flex space-x-2">
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://youtube.com" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <nav className="border-t">
        <div className="container">
          <div className="flex items-center justify-between h-14">
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/food" className="text-sm font-medium hover:text-primary">
                FOOD
              </Link>
              <Link href="/travel" className="text-sm font-medium hover:text-primary">
                TRAVEL
              </Link>
              <Link href="/experience" className="text-sm font-medium hover:text-primary">
                EXPERIENCE
              </Link>
              <Link href="/videos" className="text-sm font-medium hover:text-primary">
                VIDEOS
              </Link>
              <Link href="/ct-scoop" className="text-sm font-medium hover:text-primary">
                CT SCOOP
              </Link>
              <Link href="/originals" className="text-sm font-medium hover:text-primary">
                ORIGINALS
              </Link>
              <Link href="/deals" className="text-sm font-medium hover:text-primary">
                DEALS
              </Link>
              <Link href="/ct-quickies" className="text-sm font-medium hover:text-primary">
                CT QUICKIES
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/global" className="text-sm font-medium text-yellow-500 hover:text-yellow-600">
                GLOBAL
              </Link>
              <Button variant="outline" size="sm" asChild>
                <Link href="/subscribe">SUBSCRIBE</Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/search">
                  <Search className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

