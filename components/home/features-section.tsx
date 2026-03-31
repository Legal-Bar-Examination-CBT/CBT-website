import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    imageSrc: "/lp-import/lp-020-original.png",
    number: "01",
    title: "自社で独自にシステム構築",
    detail: "独自開発",
    description: "システム開発を自社内で完結させることでコストを最小化。受験生が本当に必要な機能だけを搭載し、論文・短答のCBTシステム、メモ機能、AI機能など、使い勝手にこだわりました。",
  },
  {
    imageSrc: "/lp-import/lp-016-original.png",
    number: "02",
    title: "受験生だったからこその設計",
    detail: "受験生視点",
    description: "製作者は元受験生。短答式・論文式を突破するために実際に必要だった機能を優先して搭載。教育機関の論理ではなく、受験生の論理で作られたサービスです。",
  },
  {
    imageSrc: "/lp-import/lp-010-8445_color.png",
    number: "03",
    title: "購入前に14日間じっくり試せる",
    detail: "安心トライアル",
    description: "14日間の無料トライアルで操作性と学習体験を十分に確認してから、ご継続いただけます。急かさない、押し付けない、それが私たちのスタイルです。",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="section-label text-primary mb-6">Why Us</div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-4">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground leading-tight tracking-tighter max-w-lg">
            なぜ<span className="text-gold">安く</span>提供できるのか
          </h2>
          <p className="text-muted-foreground lg:max-w-xs lg:text-right">
            1点でも積み上げてほしい、その思いから。
            開発費を最小限に抑え、手の届く価格を実現。
          </p>
        </div>

        <div className="mt-12 border-t border-border" />

        {/* Feature rows */}
        <div className="divide-y divide-border">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-[80px_1fr_56px] gap-4 lg:gap-12 items-center"
            >
              {/* Number */}
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                <span className="text-xs font-black tracking-widest text-primary/40 lg:text-sm">
                  {feature.number}
                </span>
                <span className="lg:hidden text-sm font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {feature.detail}
                </span>
              </div>

              {/* Main content */}
              <div className="grid lg:grid-cols-[1fr_2fr] gap-4 lg:gap-12 items-start">
                <div>
                  <span className="hidden lg:inline-flex text-xs font-bold tracking-wide uppercase text-primary bg-primary/8 px-3 py-1 rounded-full mb-3">
                    {feature.detail}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-snug mt-1">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className="hidden lg:flex h-14 w-14 items-center justify-center rounded-xl bg-secondary overflow-hidden">
                <Image
                  src={feature.imageSrc}
                  alt=""
                  width={40}
                  height={40}
                  className="object-contain"
                  sizes="40px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 h-12 px-8 group rounded-xl">
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
