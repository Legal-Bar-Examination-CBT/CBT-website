import { Code, Lightbulb, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Code,
    title: "自社で独自にシステム構築",
    description: "システム開発を独自で行い、受験生の欲しい機能だけを集約。論文および短答のCBTシステム、メモ機能など欲しい機能を搭載！AI機能などを随時追加します！",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "受験生の気持ちがわかるからこそこだわった設計",
    description: "製作者は元受験生。短答式試験、論文式試験に合格するために必要な機能を優先して揃えました。",
    color: "gold",
  },
  {
    icon: Sparkles,
    title: "購入前にじっくり試せるから安心",
    description: "14日間の無料トライアルで、操作性と学習体験を十分にご確認ください。",
    color: "accent",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            なぜ<span className="text-gold">安く</span>提供できるのか
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            1点でも積み上げてほしいその思いから
          </p>
          <p className="mt-2 text-muted-foreground">
            開発費を最小限に抑え、自社内でシステムを構築。
            教育機関・予備校を介さないことで、手の届く価格で高品質な模試を実現しました。
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const colorClasses = {
              primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
              gold: "bg-gold/10 text-gold group-hover:bg-gold group-hover:text-gold-foreground",
              accent: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground",
            }
            
            return (
              <Card 
                key={feature.title} 
                className="group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} transition-colors mb-4`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 h-12 px-8 group">
            <Link href="/features">
              すべての機能を見る
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
