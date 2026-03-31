import { Check, X, CircleDot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const comparisonData = [
  {
    feature: "料金",
    us: { value: "月額2,200円", note: "税込・使い放題", highlight: true },
    compA: { value: "¥387,200", note: "予備校入学が必要" },
    compB: { value: "¥20,350", note: "1回完結の模試形式" },
    compC: { value: "¥91,850", note: "2クール一括購入" },
  },
  {
    feature: "無料トライアル",
    us: { value: "14日間無料", icon: "check" },
    compA: { value: "なし", icon: "x" },
    compB: { value: "なし", icon: "x" },
    compC: { value: "なし", icon: "x" },
  },
  {
    feature: "受講回数",
    us: { value: "無制限", note: "使いたい時にいつでも", icon: "check" },
    compA: { value: "全49問", icon: "dot" },
    compB: { value: "模試1回のみ", icon: "x" },
    compC: { value: "28問2クール", icon: "x" },
  },
  {
    feature: "使える端末",
    us: { value: "Mac / Windows", note: "両方対応", icon: "check" },
    compA: { value: "Windowsのみ", icon: "x" },
    compB: { value: "Windowsのみ", icon: "x" },
    compC: { value: "Windowsのみ", icon: "x" },
  },
  {
    feature: "団体利用",
    us: { value: "可能", note: "カスタマイズ承ります", icon: "check" },
    compA: { value: "独自システム", icon: "x" },
    compB: { value: "独自システム", icon: "x" },
    compC: { value: "独自システム", icon: "x" },
  },
]

function StatusIcon({ type }: { type: string }) {
  switch (type) {
    case "check":
      return <Check className="h-5 w-5 text-primary" strokeWidth={2.5} />
    case "x":
      return <X className="h-4 w-4 text-muted-foreground/40" />
    case "dot":
      return <CircleDot className="h-4 w-4 text-muted-foreground/60" />
    default:
      return null
  }
}

export function ComparisonSection() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="section-label text-primary mb-6">Comparison</div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center bg-gold text-gold-foreground text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide">
              業界最安値
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground leading-tight tracking-tighter">
              全ての受験生に
              <br />
              <span className="text-primary">使ってほしい。</span>
            </h2>
          </div>
          <p className="text-muted-foreground lg:max-w-xs lg:text-right text-sm">
            司法試験CBT演習ビューワーと
            大手予備校の機能・価格比較
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground border-b border-border w-[20%]">
                  機能
                </th>
                {/* Our column — highlighted */}
                <th className="py-4 px-6 text-center border-b-2 border-primary w-[20%] bg-primary/5 rounded-t-xl">
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="text-xs font-bold tracking-wide uppercase text-primary">おすすめ</span>
                    <span className="text-sm font-bold text-foreground leading-snug">
                      CBT演習<br />ビューワー
                    </span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center text-sm font-medium text-muted-foreground border-b border-border w-[20%]">
                  大手予備校A
                </th>
                <th className="py-4 px-6 text-center text-sm font-medium text-muted-foreground border-b border-border w-[20%]">
                  大手予備校B
                </th>
                <th className="py-4 px-6 text-center text-sm font-medium text-muted-foreground border-b border-border w-[20%]">
                  予備校B<br />答練パック
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="group border-b border-border/60 last:border-b-0 hover:bg-secondary/20 transition-colors">
                  <td className="py-5 px-6 text-sm font-semibold text-foreground">
                    {row.feature}
                  </td>
                  {/* Our column */}
                  <td className="py-5 px-6 text-center bg-primary/5 group-hover:bg-primary/8 transition-colors">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        {row.us.icon && <StatusIcon type={row.us.icon} />}
                        <span className={`font-bold ${row.us.highlight ? "text-gold text-lg" : "text-foreground text-sm"}`}>
                          {row.us.value}
                        </span>
                      </div>
                      {row.us.note && (
                        <span className="text-[11px] text-primary/60 font-medium">{row.us.note}</span>
                      )}
                    </div>
                  </td>
                  {/* Others */}
                  {[row.compA, row.compB, row.compC].map((comp, j) => (
                    <td key={j} className="py-5 px-6 text-center">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="flex items-center gap-1.5">
                          {comp.icon && <StatusIcon type={comp.icon} />}
                          <span className="text-sm text-muted-foreground">{comp.value}</span>
                        </div>
                        {comp.note && (
                          <span className="text-[11px] text-muted-foreground/60">{comp.note}</span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-6 text-sm">
            本番そのままの画面を、手元のPCで再現できます
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 h-12 px-8 rounded-xl">
            <Link href="/register">
              無料デモの体験はこちら
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
