const problems = [
  {
    title: "CBTに慣れる機会がない",
    description: "本番同様の環境で練習できる場所がなく、形式に戸惑う受験生が多数。操作や画面サイズへの慣れが必須と考えられているこの「CBT」で、演習機会を確保する手段がないのが問題になっています。",
  },
  {
    title: "予備校の費用が高すぎる",
    description: "受験費用を抑えたいのに、予備校の模試や講座はそれだけのために受けるには時間もお金もかかりすぎる。もっと手軽に、必要な体験だけを積みたい。",
  },
  {
    title: "初めてのCBTへの不安",
    description: "紙試験とは操作も雰囲気もまったく違う。CBT独自の形式に「慣れ」が不足すると、実力を出し切れないことも。本番前に十分な練習ができないまま試験日を迎えてしまいます。",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-4">
          <div className="section-label text-primary mb-6">Problem</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center rounded-full bg-destructive/8 text-destructive text-sm px-4 py-1.5 mb-5 font-semibold border border-destructive/15">
                2026年（令和8年度）試験から CBT導入決定
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground leading-tight tracking-tighter">
                こんな悩み、
                <br />
                <span className="text-primary">ありませんか？</span>
              </h2>
            </div>
            <p className="text-muted-foreground lg:max-w-xs lg:text-right">
              CBT専用の準備、できていますか？
              <br />
              新形式には、新しい対策が必要です。
            </p>
          </div>
        </div>

        {/* Horizontal rule */}
        <div className="mt-12 border-t border-border" />

        {/* Problems as editorial numbered list */}
        <div className="divide-y divide-border">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className="group py-12 lg:py-16 grid grid-cols-[auto_1fr] lg:grid-cols-[96px_1fr_2fr] gap-6 lg:gap-16 items-start"
            >
              {/* Large ghost number */}
              <div
                className="text-7xl lg:text-9xl font-black leading-none select-none text-foreground/6 group-hover:text-primary/10 transition-colors"
                aria-hidden="true"
              >
                0{i + 1}
              </div>

              {/* Title */}
              <div className="pt-1 col-span-1 lg:col-span-1">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-snug">
                  {problem.title}
                </h3>
              </div>

              {/* Description — hidden on small, shown via grid on lg */}
              <p className="hidden lg:block text-muted-foreground leading-relaxed lg:pt-1">
                {problem.description}
              </p>

              {/* Description for mobile (full width under) */}
              <p className="col-span-2 lg:hidden text-muted-foreground leading-relaxed text-sm -mt-2">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
