import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MessageSection() {
  return (
    <section className="py-24 lg:py-36 bg-secondary/30 overflow-hidden relative">

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="section-label text-primary mb-12">Message</div>

        {/* Pull quote — large editorial */}
        <div className="relative">
          {/* Decorative large quotation marks */}
          <div
            className="absolute -top-8 -left-4 lg:-left-10 text-[120px] lg:text-[160px] font-black text-primary/6 leading-none select-none"
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative">
            {/* Lead statement */}
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tighter mb-8">
              受験する全ての方に、
              <br />
              <span className="text-primary">全力を出して</span>
              <br />
              活躍してほしい。
            </p>

            {/* Horizontal rule */}
            <div className="w-16 h-1 bg-gold rounded-full mb-10" />

            {/* Message body */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-4xl">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  すでにあなたは、数えきれないほどの努力を積み重ねてきました。
                  知識も、経験も、そして悔しさも、すべてが次の一歩につながっています。
                </p>
                <p>
                  あと少しで届く、その「合格」を、確実なものにするために。
                  本番の環境を再現し、自分の力を確かめてください。
                </p>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  わたしたちは、あなたが
                  <strong className="text-foreground font-semibold">1点でも多く掴み取る瞬間</strong>
                  を支えたいと思っています。
                </p>
                <p className="text-foreground font-medium">
                  司法の世界で羽ばたくその日まで、あなたの努力が実を結ぶよう、全力でサポートします。
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-gold-foreground h-12 px-8 group rounded-xl shadow-[0_0_40px_rgba(200,160,60,0.2)]">
                <Link href="/register">
                  無料デモを体験する
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
