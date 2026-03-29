const subjects = [
  "憲法",
  "行政法",
  "民法",
  "商法",
  "民事訴訟法",
  "刑法",
  "刑事訴訟法",
] as const

export function SubjectsSection() {
  return (
    <section className="border-y border-border/60 bg-muted/40 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            対応科目
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            本試験・予備試験の全科目に対応
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
          {subjects.map((name) => (
            <span
              key={name}
              className="inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-medium text-primary shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground sm:text-sm">
          平成26年（2014年）〜 令和7年（2025年）の過去問を収録
        </p>
      </div>
    </section>
  )
}
