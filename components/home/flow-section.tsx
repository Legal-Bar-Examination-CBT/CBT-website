import { ClipboardList, Monitor, RefreshCw, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: 1,
    icon: ClipboardList,
    title: "無料デモの予約",
    description: "Webフォームからすぐにお申し込みいただけます。CBT試験形式に準拠したシミュレータを、14日間無料でお試しいただけます。クレジットカード登録は不要で、すぐに体験を開始できます。",
  },
  {
    number: 2,
    icon: Monitor,
    title: "本番同様の環境を体験",
    description: "実際の試験時間・画面構成を再現した本格的な演習モードで、1問ごとにタイマーやマーク機能、解答履歴も確認可能です。",
  },
  {
    number: 3,
    icon: RefreshCw,
    title: "継続利用・アップデート",
    description: "無料体験後も継続したい方は、専用フォームから簡単に有料プランへお申し込みいただけます。契約後は定期的に最新のデータが追加され、常に最新環境で学習可能です。ご利用はいつでも解約・再開が可能。",
  },
]

export function FlowSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-medium text-accent">Flow</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            サービス導入の<span className="text-primary">流れ</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-px bg-border" />
          
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-card rounded-2xl border p-8 h-full relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                      {step.number}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Step.{step.number}
                    <br />
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow (mobile) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 md:hidden">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
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
