import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "料金プラン | 司法試験CBT問題演習ビューワー",
  description: "司法試験CBT問題演習ビューワーの料金プラン。月額2,200円で論文式・短答式が使い放題。14日間無料トライアル付き。",
}

const comparisonData = [
  {
    feature: "料金",
    us: "月額2,200円(税込)",
    compA: "¥387,200",
    compB: "¥20,350",
    compC: "¥91,850",
  },
  {
    feature: "無料トライアル",
    us: "14日間無料",
    compA: "なし",
    compB: "なし",
    compC: "なし",
  },
  {
    feature: "受講回数",
    us: "無制限",
    compA: "全49問",
    compB: "模試1回のみ",
    compC: "28問2クール",
  },
  {
    feature: "使える端末",
    us: "Mac / Windows",
    compA: "Windowsのみ",
    compB: "Windowsのみ",
    compC: "Windowsのみ",
  },
  {
    feature: "団体利用",
    us: "可能",
    compA: "独自システム",
    compB: "独自システム",
    compC: "独自システム",
  },
]

const features = [
  { text: "論文式過去問（全年度）", included: true },
  { text: "短答式過去問（全年度）", included: true },
  { text: "本番同様のCBT環境", included: true },
  { text: "問題PDFへの書き込み", included: true },
  { text: "法令検索機能", included: true },
  { text: "答案の自動保存", included: true },
  { text: "Word形式エクスポート", included: true },
  { text: "AI添削機能", included: true },
  { text: "Mac / Windows対応", included: true },
  { text: "いつでも解約可能", included: true },
]

const faqs = [
  {
    question: "14日間の無料トライアル後は自動で課金されますか？",
    answer: "無料トライアル終了後もサービスをご利用になる場合は、月額料金が発生します。解約の手続きや課金のタイミングについては、マイページまたはお申し込み時のご案内をご確認ください。",
  },
  {
    question: "プランの変更はいつでもできますか？",
    answer: "いつでも解約・再開が可能です。解約後も、その月の請求サイクル終了まではサービスをご利用いただけます。",
  },
  {
    question: "支払い方法は何がありますか？",
    answer: "クレジットカード（Visa、Mastercard、American Express、JCB）に対応しています。請求は毎月自動で行われます。",
  },
  {
    question: "団体での利用はできますか？",
    answer: "はい、CBTシステムをそのまま団体導入可能です。ご相談ください！団体様に応じたカスタマイズも承ります。",
  },
]

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">業界最安値</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl text-balance">
              全ての受験生に<br />使って欲しい！
            </h1>
            <p className="mt-4 text-lg text-white/80">
              高額予備校に通わなくても、"本番そのままの操作体験"をあなたの手に。
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gold shadow-xl overflow-hidden">
            <div className="bg-gold/10 py-2 text-center">
              <span className="text-sm font-medium text-gold">14日間無料トライアル付き</span>
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">司法試験CBT問題演習ビューワー</CardTitle>
              <CardDescription className="text-base">論文式・短答式が使い放題</CardDescription>
            </CardHeader>
            
            <CardContent className="text-center">
              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-muted-foreground">月額</span>
                  <span className="text-6xl font-bold text-gold">¥2,200</span>
                  <span className="text-muted-foreground">(税込)</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  長期学習でも負担が大きくならない
                </p>
              </div>
              
              {/* Features Grid */}
              <div className="grid gap-3 sm:grid-cols-2 text-left max-w-2xl mx-auto">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-4 pt-6">
              <Button 
                size="lg"
                asChild 
                className="w-full max-w-md mx-auto bg-gold hover:bg-gold/90 text-gold-foreground h-14 text-lg font-semibold"
              >
                <Link href="/register">
                  無料デモの体験はこちら
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                お申し込み後、すぐに体験を開始できます
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">予備校との比較</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left py-4 px-6 font-medium text-muted-foreground">機能</th>
                  <th className="text-center py-4 px-6 font-bold text-primary bg-primary/5">
                    <div className="flex flex-col items-center">
                      <span>司法試験CBT問題演習ビューワー</span>
                      <Badge variant="secondary" className="mt-1 bg-gold/20 text-gold text-xs">おすすめ</Badge>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 font-medium text-muted-foreground text-sm">大手予備校A</th>
                  <th className="text-center py-4 px-6 font-medium text-muted-foreground text-sm">大手予備校B</th>
                  <th className="text-center py-4 px-6 font-medium text-muted-foreground text-sm">予備校B答練パック</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-6 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-6 text-center bg-primary/5">
                      <span className={`font-semibold ${i === 0 ? 'text-gold text-lg' : 'text-foreground'}`}>
                        {row.us}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center text-muted-foreground text-sm">{row.compA}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground text-sm">{row.compB}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground text-sm">{row.compC}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">よくある質問</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              その他のご質問がございましたら、お気軽にお問い合わせください。
            </p>
            <Button variant="outline" asChild>
              <Link href="/faq">すべてのFAQを見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary-gradient">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            本番そのままの画面を、手元のPCで再現できます
          </h2>
          <p className="mt-4 text-lg text-white/80">
            まずは14日間、操作性と学習体験をご確認ください
          </p>
          <Button size="lg" asChild className="mt-8 bg-gold hover:bg-gold/90 text-gold-foreground h-12 px-8">
            <Link href="/register">
              無料デモの体験はこちら
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
