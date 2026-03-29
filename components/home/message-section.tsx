import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export function MessageSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
            <Heart className="h-4 w-4" />
            Message
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            受験する全ての方に
          </h2>
        </div>

        {/* Message Content */}
        <div className="bg-card rounded-2xl border p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            全力を出して活躍してほしい
          </h3>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              <span className="text-foreground font-medium">本番に強い人になるために。</span>
              <br />
              準備の差が、未来を変える。
            </p>
            
            <p className="leading-relaxed mb-6">
              すでにあなたは、数えきれないほどの努力を積み重ねてきました。
              知識も、経験も、そして悔しさも、すべてが次の一歩につながっています。
            </p>
            
            <p className="leading-relaxed mb-6">
              あと少しで届く、その「合格」を、確実なものにするために。
              本番の環境を再現し、自分の力を確かめてください。
            </p>
            
            <p className="leading-relaxed mb-6">
              わたしたちは、あなたが<span className="text-gold font-semibold">1点でも多く掴み取る瞬間</span>を支えたいです。
            </p>
            
            <p className="text-foreground font-medium leading-relaxed">
              司法の世界で羽ばたくその日まで、あなたの努力が実を結ぶよう、全力でサポートします！
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-gold-foreground h-12 px-8 group">
              <Link href="/register">
                無料デモを体験する
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
