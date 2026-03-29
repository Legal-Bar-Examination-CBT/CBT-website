"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Scale, ChevronDown } from "lucide-react"
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

const features = [
  {
    title: "論文式演習",
    href: "/features#ronbun",
    description: "本番同様のCBT環境で論文答案を作成",
  },
  {
    title: "短答式演習",
    href: "/features#tantou",
    description: "過去問データベースと正解率分析",
  },
  {
    title: "AI分析",
    href: "/features#ai",
    description: "学習進捗の可視化と弱点分析",
  },
]

const navItems = [
  { title: "機能", href: "/features" },
  { title: "使い方", href: "/guide" },
  { title: "料金比較", href: "/pricing" },
  { title: "FAQ", href: "/faq" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass shadow-lg"
          : "bg-primary/95 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-gold-foreground transition-transform group-hover:scale-105">
              <Scale className="h-5 w-5" />
            </div>
            <span className={cn(
              "text-lg font-bold",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              司法試験<span className="text-gold">CBT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent",
                    isScrolled ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white"
                  )}>
                    機能
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {features.map((feature) => (
                        <li key={feature.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={feature.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                            >
                              <div className="text-sm font-medium leading-none">{feature.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {feature.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {navItems.slice(1).map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        isScrolled 
                          ? "hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                          : "text-white hover:bg-white/10 hover:text-white focus:bg-white/10"
                      )}>
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button variant="ghost" asChild className={cn(
              isScrolled ? "" : "text-white hover:bg-white/10 hover:text-white"
            )}>
              <Link href="/login">ログイン</Link>
            </Button>
            <Button asChild className="bg-gold hover:bg-gold/90 text-gold-foreground">
              <Link href="/register">無料で始める</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={cn(
                isScrolled ? "" : "text-white hover:bg-white/10"
              )}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {/* Mobile Features Dropdown */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 px-2 text-sm font-medium text-muted-foreground">
                    機能
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="ml-4 space-y-1">
                    {features.map((feature) => (
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

                {/* Mobile Nav Items */}
                {navItems.slice(1).map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="rounded-md px-2 py-2 text-sm font-medium hover:bg-primary/10"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}

                {/* Mobile CTA Buttons */}
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
