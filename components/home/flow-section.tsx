import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "無料デモの申し込み",
    description: "Webフォームから1分で完了。CBT試験形式に準拠したシミュレータを、14日間無料でお試しいただけます。",
  },
  {
    number: "02",
    title: "本番同様の環境を体験",
    description: "実際の試験時間・画面構成を再現した本格的な演習モード。タイマー・マーク機能・解答履歴も確認できます。",
  },
  {
    number: "03",
    title: "継続利用・常に最新",
    description: "体験後は専用フォームから有料プランへ。定期的にデータが追加され、常に最新の環境で学習できます。いつでも解約・再開が可能。",
  },
]

export function FlowSection() {
  return (
    <section className="py-24 lg:py-36 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="section-label text-primary mb-6">Flow</div>
        <h2 className="text-5xl sm:text-6xl font-black text-foreground leading-tight tracking-tighter mb-16 lg:mb-20">
          サービス導入の<span className="text-primary">流れ</span>
        </h2>

        {/* Steps — horizontal on lg, vertical on sm */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-24" />

          <div className="grid gap-10 md:grid-cols-3 lg:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="group relative">
                {/* Step indicator row */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Number bubble */}
                  <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-black text-xl shadow-[0_0_0_6px_hsl(var(--secondary)/0.3)] group-hover:shadow-[0_0_0_8px_hsl(var(--primary)/0.15)] transition-shadow">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl border border-border/60 p-7 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm font-black text-primary/45 tracking-widest uppercase mb-2">
                    Step {step.number}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-gold-foreground h-12 px-8 group rounded-xl shadow-[0_0_40px_rgba(200,160,60,0.2)]">
            <Link href="/register">
              今すぐ無料で体験する
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
