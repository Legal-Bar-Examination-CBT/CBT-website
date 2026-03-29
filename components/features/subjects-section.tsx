import { cn } from "@/lib/utils"

const subjects = [
  "憲法",
  "行政法",
  "民法",
  "商法",
  "民事訴訟法",
  "刑法",
  "刑事訴訟法",
] as const

type SubjectsSectionProps = {
  /** 機能ページなどでヒーロー直下に置くときの省スペース表示 */
  compact?: boolean
}

export function SubjectsSection({ compact = false }: SubjectsSectionProps) {
  return (
    <section
      className={cn(
        "bg-muted/40",
        compact
          ? "border-t border-border/50 py-5 sm:py-6 lg:py-7"
          : "border-y border-border/60 py-16 lg:py-20"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className={cn(
              "font-bold tracking-tight text-foreground",
              compact ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"
            )}
          >
            対応科目
          </h2>
          <p
            className={cn(
              "text-muted-foreground",
              compact ? "mt-1 text-sm sm:text-base" : "mt-3 text-base sm:text-lg"
            )}
          >
            本試験・予備試験の全科目に対応
          </p>
        </div>

        <div
          className={cn(
            "mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3",
            compact ? "mt-4" : "mt-10"
          )}
        >
          {subjects.map((name) => (
            <span
              key={name}
              className={cn(
                "inline-flex items-center rounded-full border border-primary/25 bg-primary/5 font-medium text-primary shadow-sm",
                compact ? "px-3 py-1.5 text-xs sm:text-sm" : "px-4 py-2 text-sm"
              )}
            >
              {name}
            </span>
          ))}
        </div>

        <p
          className={cn(
            "mx-auto max-w-2xl text-center text-muted-foreground",
            compact ? "mt-3 text-[11px] sm:text-xs" : "mt-8 text-xs sm:text-sm"
          )}
        >
          平成26年（2014年）〜 令和7年（2025年）の過去問を収録
        </p>
      </div>
    </section>
  )
}
