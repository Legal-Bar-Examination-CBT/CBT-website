import { Check, X, CircleDot } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const comparisonData = [
  {
    feature: "料金",
    us: { value: "月額2,200円(税込)", note: "長期学習でも負担が大きくならない", highlight: true },
    compA: { value: "¥387,200", note: "予備校入学が必要" },
    compB: { value: "¥20,350", note: "1回完結の模試形式" },
    compC: { value: "¥91,850", note: "2クール答練一括購入形式" },
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
      return <Check className="h-5 w-5 text-accent" />
    case "x":
      return <X className="h-5 w-5 text-muted-foreground/50" />
    case "dot":
      return <CircleDot className="h-5 w-5 text-muted-foreground" />
    default:
      return null
  }
}

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge className="bg-gold text-gold-foreground mb-4">業界最安値</Badge>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            全ての受験生に<span className="text-primary">使って欲しい！</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            司法試験CBT問題演習ビューワーと大手予備校の比較
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-lg">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left py-4 px-6 font-medium text-muted-foreground">機能</th>
                <th className="text-center py-4 px-6 font-bold text-primary bg-primary/5">
                  <div className="flex flex-col items-center">
                    <span>司法試験CBT</span>
                    <Badge variant="secondary" className="mt-1 bg-gold/20 text-gold text-xs">おすすめ</Badge>
                  </div>
                </th>
                <th className="text-center py-4 px-6 font-medium text-muted-foreground">大手予備校A</th>
                <th className="text-center py-4 px-6 font-medium text-muted-foreground">大手予備校B</th>
                <th className="text-center py-4 px-6 font-medium text-muted-foreground">予備校B答練パック</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-4 px-6 font-medium text-foreground">{row.feature}</td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        {row.us.icon && <StatusIcon type={row.us.icon} />}
                        <span className={`font-semibold ${row.us.highlight ? 'text-gold text-lg' : 'text-foreground'}`}>
                          {row.us.value}
                        </span>
                      </div>
                      {row.us.note && (
                        <span className="text-xs text-muted-foreground">{row.us.note}</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        {row.compA.icon && <StatusIcon type={row.compA.icon} />}
                        <span className="text-muted-foreground">{row.compA.value}</span>
                      </div>
                      {row.compA.note && (
                        <span className="text-xs text-muted-foreground/70">{row.compA.note}</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        {row.compB.icon && <StatusIcon type={row.compB.icon} />}
                        <span className="text-muted-foreground">{row.compB.value}</span>
                      </div>
                      {row.compB.note && (
                        <span className="text-xs text-muted-foreground/70">{row.compB.note}</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        {row.compC.icon && <StatusIcon type={row.compC.icon} />}
                        <span className="text-muted-foreground">{row.compC.value}</span>
                      </div>
                      {row.compC.note && (
                        <span className="text-xs text-muted-foreground/70">{row.compC.note}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            本番そのままの画面を、手元のPCで再現できます
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 h-12 px-8">
            <Link href="/register">
              無料デモの体験はこちら
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
