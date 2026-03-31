import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BadgeCheck } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden bg-primary-gradient text-white">
      {/* Background glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-gold/12 blur-[100px]" />
      </div>

      {/* Horizontal rule accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">

        {/* Overline */}
        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/25 text-gold text-sm font-semibold px-5 py-2 rounded-full mb-10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
          </span>
          今すぐ14日間無料で始められます
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
          本番そのままの画面を、
          <br />
          <span className="text-gold-gradient">手元のPCで再現。</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed mb-12">
          登録は1分で完了。14日間の無料トライアルで、
          操作性と学習体験をまずご確認ください。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            size="lg"
            asChild
            className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-10 text-base font-bold group rounded-xl shadow-[0_0_60px_rgba(200,160,60,0.35)] hover:shadow-[0_0_80px_rgba(200,160,60,0.45)] transition-all w-full sm:w-auto"
          >
            <Link href="/register">
              無料デモを体験する
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-13 px-8 text-base border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white/40 rounded-xl w-full sm:w-auto"
          >
            <Link href="/pricing">
              料金プランを見る
            </Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/55">
          {[
            "14日間無料トライアル",
            "予備試験対応",
            "弁護士監修",
            "Mac/Windows対応",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-gold" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
