import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-gradient -z-10" />
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6 backdrop-blur-sm border border-gold/30">
          <Zap className="h-4 w-4" />
          今すぐ14日間無料で始められます
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
          本番そのままの画面を、
          <br className="hidden sm:block" />
          手元のPCで再現できます
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          登録は1分で完了。
          14日間の無料トライアルで、操作性と学習体験をご確認ください。
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button 
            size="lg" 
            asChild 
            className="bg-gold text-gold-foreground hover:bg-gold/90 h-12 px-8 text-base font-semibold group"
          >
            <Link href="/register">
              無料デモの体験はこちら
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 px-8 text-base border-white/40 bg-transparent text-white shadow-none hover:bg-white/15 hover:text-white"
          >
            <Link href="/pricing">
              料金プランを比較
            </Link>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>簡単お申し込み</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>いつでも解約可能</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>弁護士監修</span>
          </div>
        </div>
      </div>
    </section>
  )
}
