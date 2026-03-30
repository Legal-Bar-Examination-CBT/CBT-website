"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Deep Blue Gradient Background */}
        <div className="absolute inset-0 bg-primary-gradient" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Abstract Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6 border border-gold/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              2026年CBT導入に対応！14日間無料トライアル
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              新しい司法試験形式
              <br />
              <span className="text-gold-gradient">「CBT」</span>に
              <br />
              誰より早く慣れる
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
              1点の差で未来が変わる。高額予備校に通わなくても、
              <span className="text-gold font-medium">"本番そのままの操作体験"</span>をあなたの手に。
              論文式・短答式込みで月額税込2,200円は最安値で使い放題！
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
              <Button size="lg" asChild className="group bg-gold hover:bg-gold/90 text-gold-foreground h-12 px-8 text-base font-semibold">
                <Link href="/register">
                  無料デモを体験する
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 px-8 text-base group border-white/40 bg-transparent text-white shadow-none hover:bg-white/15 hover:text-white"
              >
                <Link href="/pricing">
                  <Play className="mr-2 h-4 w-4 fill-current text-current group-hover:scale-110 transition-transform" />
                  金額を比較する
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-gold" />
                <span>いつでも解約可能</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-gold" />
                <span>弁護士監修</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-gold" />
                <span>Mac/Windows対応</span>
              </div>
            </div>
          </div>

          {/* Right Content - CBT Preview */}
          <div className="relative lg:ml-auto">
            <div className="relative">
              {/* Main Preview Card */}
              <div className="rounded-2xl bg-card shadow-2xl border overflow-hidden">
                <div className="relative aspect-[1298/683] w-full bg-white p-3">
                  <Image
                    src="/lp-import/lp-014-file.png?v=2"
                    alt="CBT演習画面プレビュー"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 640px"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
