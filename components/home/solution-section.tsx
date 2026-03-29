import { Monitor, Coins, CalendarDays, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const solutions = [
  {
    icon: Monitor,
    title: "本番さながらの環境で練習",
    description: "CBTの試験画面を忠実に再現。「慣れ」と「実戦感覚」を身につけられます。",
    color: "primary",
  },
  {
    icon: Coins,
    title: "予備校より安くて本格的",
    description: "会場費や人件費をカットした独自システム。論文式と短答式込みで月額税込2,200円は最安値で使い放題！今ならトライアル14日間無料！",
    color: "gold",
  },
  {
    icon: CalendarDays,
    title: "毎日の練習として使える",
    description: "反復学習に最適。本番同様の環境で好きなタイミングで演習可能。WindowsとMacの両方の環境を用意していますので普段のPCで練習ができます！",
    color: "accent",
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            司法試験CBT問題演習ビューワーが、
            <br />
            <span className="text-primary">あなたの課題を解決します</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            1点でも多くとる仕組み
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution) => {
            const colorClasses = {
              primary: "bg-primary/10 text-primary group-hover:bg-primary",
              gold: "bg-gold/10 text-gold group-hover:bg-gold",
              accent: "bg-accent/10 text-accent group-hover:bg-accent",
            }
            const borderClasses = {
              primary: "border-primary/50",
              gold: "border-gold/50",
              accent: "border-accent/50",
            }
            
            return (
              <Card 
                key={solution.title} 
                className={`group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:${borderClasses[solution.color as keyof typeof borderClasses]}`}
              >
                <CardHeader>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${colorClasses[solution.color as keyof typeof colorClasses]} group-hover:text-white transition-colors mb-4`}>
                    <solution.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            まずは14日間、操作性と学習体験をご確認ください
          </p>
          <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-gold-foreground h-12 px-8 group">
            <Link href="/register">
              無料デモの体験はこちら
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
