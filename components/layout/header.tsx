"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, Scale, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { headerFeatures, headerNavItems } from "@/lib/site-navigation"

function navLinkClass(overlay: boolean) {
  const base =
    "group inline-flex h-10 w-max items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  return cn(
    base,
    overlay
      ? "text-white hover:bg-white/10 hover:text-white focus-visible:ring-white/40"
      : "text-foreground hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 focus-visible:text-primary focus-visible:ring-primary/30"
  )
}

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const overlay = isHome && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsScrolled(typeof window !== "undefined" && window.scrollY > 10)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        overlay
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <Scale className="h-5 w-5" />
            </div>
            <span
              className={cn(
                "text-lg font-bold",
                overlay ? "text-white" : "text-foreground"
              )}
            >
              司法試験
              <span className={overlay ? "text-gold" : "text-primary"}>CBT</span>
            </span>
          </Link>

          <nav className="relative z-[60] hidden lg:flex lg:items-center lg:gap-1">
            {/* viewport={false}: 共有ビューポートの高さ計算バグで空箱になるのを避け、トリガー直下に表示 */}
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent",
                      overlay
                        ? "text-white hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white data-[state=open]:hover:bg-white/10 data-[state=open]:hover:text-white"
                        : "text-foreground hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary"
                    )}
                  >
                    機能
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-0 top-full z-[100] mt-1.5 !w-[min(calc(100vw-2rem),560px)] min-w-[280px] !max-w-[min(calc(100vw-2rem),560px)] !overflow-visible rounded-lg border bg-popover p-3 text-left text-popover-foreground shadow-lg [writing-mode:horizontal-tb] data-[state=closed]:animate-none">
                    {/* 親がトリガー幅のため w-full だと極細になる。!w-* でパネル幅を固定 */}
                    <ul className="grid w-full min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                      {headerFeatures.map((feature) => (
                        <li key={feature.title} className="min-w-0">
                          <NavigationMenuLink asChild>
                            <Link
                              href={feature.href}
                              className="block w-full min-w-0 select-none space-y-1.5 rounded-md p-3 text-left text-foreground no-underline outline-none [word-break:break-word] transition-colors hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 focus-visible:text-primary"
                            >
                              <div className="text-sm font-medium leading-snug">
                                {feature.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                                {feature.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {headerNavItems.slice(1).map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className={navLinkClass(overlay)}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button
              variant="ghost"
              asChild
              className={cn(overlay && "text-white hover:bg-white/10 hover:text-white")}
            >
              <Link href="/login">ログイン</Link>
            </Button>
            <Button asChild className="bg-gold hover:bg-gold/90 text-gold-foreground">
              <Link href="/register">無料で始める</Link>
            </Button>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(overlay ? "text-white hover:bg-white/10" : "text-foreground")}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 px-2 text-sm font-medium text-muted-foreground">
                    機能
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="ml-4 space-y-1">
                    {headerFeatures.map((feature) => (
                      <SheetClose asChild key={feature.title}>
                        <Link
                          href={feature.href}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-primary/10"
                        >
                          {feature.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                {headerNavItems.slice(1).map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-primary/10"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}

                <div className="mt-6 space-y-3">
                  <SheetClose asChild>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/login">ログイン</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-gold hover:bg-gold/90 text-gold-foreground">
                      <Link href="/register">無料で始める</Link>
                    </Button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
