import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const problems = [
  {
    imageSrc: "/lp-import/problem-cbt.png",
    title: "CBTに慣れる機会がない",
    description: "本番同様の環境で練習できる場所がなく、形式に戸惑う受験生が多数。操作や画面サイズへの慣れが必須になると考えられているこの「CBT」で演習機会を確保する機会がないのが問題になっています。",
  },
  {
    imageSrc: "/lp-import/problem-cost.png",
    title: "予備校の費用が高すぎる",
    description: "受験費用を抑えたい！予備校の模試や講座があるがそれだけのために予備校に行くのは、時間もお金ももったいない！",
  },
  {
    imageSrc: "/lp-import/problem-anxiety.png",
    title: "初めてのCBTに不安がある",
    description: "紙試験とは操作も雰囲気も違う。CBT独自の形式もあるため、「慣れ」が不足すると、実力を出し切れないことも。",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive mb-4">
            2026年（令和8年度）の試験から、CBT導入決定！
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            こんな<span className="text-primary">困りごと・課題</span>はありませんか？
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            CBT専用の準備できていますか？
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <Card 
              key={problem.title} 
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardHeader>
                <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-xl bg-destructive/10 p-1.5">
                  <Image
                    src={problem.imageSrc}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <CardTitle className="text-xl">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {problem.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
