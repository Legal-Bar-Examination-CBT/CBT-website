"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BadgeCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[760px] max-h-[920px] flex items-center overflow-hidden pt-16 bg-primary-gradient">
      {/* Background: soft radial glows only — no generic grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-60 -right-60 h-[700px] w-[700px] rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-white/3 blur-[80px]" />
        {/* Subtle horizontal rules */}
        <div className="absolute top-[28%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
        <div className="absolute top-[72%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1fr_1.1fr] items-center h-full py-12 lg:py-10">

          {/* ── Left: Editorial Typography ── */}
          <div className="lg:py-14 order-2 lg:order-1">

            {/* Overline */}
            <div className="section-label text-gold/80 mb-5 text-sm">
              2026年 新司法試験形式 CBT対応
            </div>

            {/* Headline — mix black + outline */}
            <h1 className="leading-[1.03] mb-5 lg:mb-6">
              <span
                className="block text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.25)" }}
              >
                新形式の司法試験
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mt-0.5 text-gold-gradient">
                CBTに、誰より
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white">
                早く慣れる。
              </span>
            </h1>

            {/* Body */}
            <p className="text-white/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg">
              本番そのままの操作体験を、
              <strong className="text-white font-semibold">月額2,200円（税込）</strong>で。
              高額予備校に通わなくてもCBTの「慣れ」を手に入れる。
            </p>

            {/* CTAs */}
            <div className="mt-6 lg:mt-7 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                asChild
                className="bg-gold hover:bg-gold/90 text-gold-foreground h-12 px-8 text-base font-bold rounded-xl group shadow-[0_0_40px_rgba(200,160,60,0.3)] hover:shadow-[0_0_60px_rgba(200,160,60,0.4)] transition-shadow"
              >
                <Link href="/register">
                  14日間 無料で体験する
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="h-12 px-6 text-base text-white/70 hover:text-white hover:bg-white/8 rounded-xl"
              >
                <Link href="/pricing">
                  料金を比較する
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                {["14日間無料トライアル", "予備試験対応", "弁護士監修", "Mac/Windows対応"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <BadgeCheck className="h-4 w-4 text-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Browser Mockup ── */}
          <div className="relative order-1 lg:order-2 lg:py-8">
            {/* Ambient glow behind */}
            <div className="absolute inset-8 bg-gold/10 rounded-3xl blur-[60px]" />
            <div className="absolute inset-8 bg-blue-400/5 rounded-3xl blur-[40px]" />

            {/* Browser chrome + screenshot */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)] border border-white/10 backdrop-blur-sm">
              {/* Chrome bar */}
              <div className="bg-[#14172b] px-4 py-3 flex items-center gap-3 border-b border-white/6">
                <div className="flex gap-1.5 shrink-0">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 bg-white/6 rounded-md text-white/35 text-xs px-3 py-1.5 font-mono truncate">
                  shihou-cbt.com/exam — 短答式問題演習
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative bg-white" style={{ aspectRatio: "1298/683" }}>
                <Image
                  src="/lp-import/lp-014-file.png?v=2"
                  alt="CBT演習画面プレビュー"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 660px"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Floating price badge */}
            <div className="absolute -bottom-4 left-4 z-10 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.2)] px-4 py-3 border border-border/40">
              <p className="text-[11px] text-muted-foreground font-semibold tracking-wide uppercase mb-1">
                業界最安値
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-foreground leading-none">2,200</span>
                <span className="text-sm text-muted-foreground">円/月（税込）</span>
              </div>
              <p className="text-xs text-primary mt-1.5 font-semibold">
                論文式＋短答式 使い放題
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
