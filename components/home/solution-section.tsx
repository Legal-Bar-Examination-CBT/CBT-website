import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    imageSrc: "/lp-import/lp-015-original.png",
    tag: "本番再現",
    title: "本番さながらの\n環境で練習できる",
    description: "CBTの試験画面を忠実に再現。タイマー・マーク機能・解答履歴も含め、「慣れ」と「実戦感覚」を本番前に体得できます。",
    color: "primary" as const,
  },
  {
    imageSrc: "/lp-import/lp-019-original.png",
    tag: "業界最安値",
    title: "予備校より安く\nて、本格的",
    description: "会場費や人件費をカットした独自システム。論文式と短答式込みで月額税込2,200円。今ならトライアル14日間無料！",
    color: "gold" as const,
  },
  {
    imageSrc: "/lp-import/lp-020-original.png",
    tag: "いつでも使える",
    title: "毎日の学習に\n組み込める",
    description: "反復学習に最適。WindowsとMacの両方対応なので、普段お使いのPCでいつでもCBT演習が可能です。",
    color: "accent" as const,
  },
]

const colorMap = {
  primary: {
    bg: "bg-primary",
    light: "bg-primary/8",
    text: "text-primary",
    border: "border-primary/20",
    num: "text-primary/10",
  },
  gold: {
    bg: "bg-gold",
    light: "bg-gold/8",
    text: "text-gold",
    border: "border-gold/20",
    num: "text-gold/10",
  },
  accent: {
    bg: "bg-accent",
    light: "bg-accent/20",
    text: "text-accent-foreground",
    border: "border-accent/40",
    num: "text-accent/30",
  },
}

export function SolutionSection() {
  return (
    <section className="py-24 lg:py-36 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="section-label text-primary mb-6">Solution</div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground leading-tight tracking-tighter max-w-xl">
            司法試験CBT演習ビューワーが、
            <br />
            <span className="text-primary">あなたの課題を解決。</span>
          </h2>
          <p className="text-muted-foreground lg:max-w-xs lg:text-right">
            1点でも多く掴み取るための仕組みを、
            誰でも使えるコストで提供します。
          </p>
        </div>

        {/* Three solution cards — staggered layout */}
        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution, i) => {
            const c = colorMap[solution.color]
            return (
              <div
                key={solution.title}
                className={`group relative rounded-2xl bg-white border ${c.border} p-8 lg:p-10 overflow-hidden hover:shadow-xl transition-all duration-300 ${i === 1 ? "lg:mt-8" : i === 2 ? "lg:mt-16" : ""}`}
              >
                {/* Ghost number background */}
                <div
                  className={`absolute -right-4 -bottom-6 text-[120px] font-black leading-none select-none ${c.num}`}
                  aria-hidden="true"
                >
                  0{i + 1}
                </div>

                {/* Tag */}
                <div className={`inline-flex items-center text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full ${c.light} ${c.text} mb-6`}>
                  {solution.tag}
                </div>

                {/* Image */}
                <div className={`relative h-14 w-14 mb-6 rounded-xl ${c.light} p-2`}>
                  <Image
                    src={solution.imageSrc}
                    alt=""
                    fill
                    className="object-contain p-1.5"
                    sizes="56px"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-snug mb-4 whitespace-pre-line">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {solution.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-sm">
            まずは14日間、操作性と学習体験をご確認ください
          </p>
          <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-gold-foreground h-12 px-8 group rounded-xl shadow-[0_0_40px_rgba(200,160,60,0.25)]">
            <Link href="/register">
              無料デモを体験する
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
