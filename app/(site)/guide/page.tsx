import type { Metadata } from "next"
import Link from "next/link"
import { 
  UserPlus, 
  Search, 
  PenLine, 
  FileText,
  Highlighter,
  Sparkles,
  StickyNote,
  Layers,
  ArrowRight,
  CheckCircle2,
  Monitor,
  Smartphone,
  Tablet
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "使い方ガイド | 司法試験CBT",
  description: "司法試験CBTの始め方をステップバイステップでご案内します。アカウント登録から学習開始まで、わかりやすく解説。",
}

const accountSteps = [
  {
    number: 1,
    title: "招待コードを入手",
    description: "現在、ご利用には招待コードが必要です。公式サイトのお問い合わせフォームまたは紹介者からコードを入手してください。",
  },
  {
    number: 2,
    title: "アカウント登録",
    description: "ログイン画面の「新規登録」からメールアドレス・パスワード・招待コードを入力して登録します。利用規約とプライバシーポリシーへの同意が必要です。",
  },
  {
    number: 3,
    title: "メニューから演習を選択",
    description: "ログイン後、メニュー画面から「論文式」または「短答式」を選び、科目・年度を指定して演習を開始します。",
  },
]

const ronbunSteps = [
  {
    number: 1,
    icon: Search,
    title: "科目・年度を選択",
    description: "メニューから科目（憲法・民法・刑法など）と年度を選択します。本試験・予備試験・サンプルから選べます。",
  },
  {
    number: 2,
    icon: FileText,
    title: "問題PDFを確認",
    description: "左パネルに問題PDFが表示されます。ズーム・ページ送りで自由に閲覧。ペンやマーカーで書き込みも可能です。",
  },
  {
    number: 3,
    icon: PenLine,
    title: "エディタで答案を作成",
    description: "右パネルのリッチテキストエディタで答案を入力します。フォント・色・インデントなど書式設定に対応。",
  },
  {
    number: 4,
    icon: Search,
    title: "法令検索を活用",
    description: "演習中に法令データベースを参照できます。条文番号やキーワードで検索して、関連条文をすばやく確認。",
  },
  {
    number: 5,
    icon: Layers,
    title: "答案を保存・エクスポート",
    description: "セッションはスロットに自動保存。Word形式でのエクスポートにも対応しています。後から続きを書くことも可能。",
  },
]

const tantouSteps = [
  {
    number: 1,
    title: "科目・年度を選択",
    description: "短答式のメニューから科目と年度を選択して演習を開始します。",
  },
  {
    number: 2,
    title: "問題を解く",
    description: "問題を読んで選択肢を選びます。迷った問題には「見直しフラグ」を付けておくと、後からまとめて確認できます。",
  },
  {
    number: 3,
    title: "採点結果を確認",
    description: "全問解答後に自動採点。正答率・科目別スコア・誤答問題の一覧が表示されます。",
  },
]

const tips = [
  {
    icon: Highlighter,
    title: "アノテーション機能を活用",
    description: "問題文の重要部分にマーカーを引いたり、メモを書き込んだりして、思考のプロセスを可視化しましょう。",
  },
  {
    icon: Sparkles,
    title: "AI分析でフィードバック",
    description: "答案のAI分析を活用して、論点の漏れや論理構成の改善点を客観的に把握できます。",
  },
  {
    icon: Layers,
    title: "セッション管理を使いこなす",
    description: "複数のスロットを使って、同じ問題を複数回解いたり、途中で別の科目に切り替えたりできます。",
  },
  {
    icon: StickyNote,
    title: "ノートで知識を整理",
    description: "演習中に気づいた重要論点や判例をノートに記録。試験直前の見直しにも活用できます。",
  },
]

const devices = [
  { icon: Monitor, label: "デスクトップ", description: "フル機能で快適に学習" },
  { icon: Tablet, label: "タブレット", description: "持ち運びに便利" },
  { icon: Smartphone, label: "スマートフォン", description: "スキマ時間に復習" },
]

export default function GuidePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">Getting Started</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl text-balance">
              使い方ガイド
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              初めての方でも安心。アカウント登録から演習開始まで、
              ステップバイステップで解説します。
            </p>
          </div>
        </div>
      </section>

      {/* Account Registration Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-accent">はじめに</span>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              アカウント登録・ログイン
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {accountSteps.map((step) => (
              <Card key={step.number} className="relative">
                <div className="absolute -top-4 left-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {step.number}
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ronbun Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary">論文式試験</span>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              論文式の使い方
            </h2>
          </div>
          
          <div className="space-y-6">
            {ronbunSteps.map((step) => (
              <Card key={step.number} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="flex items-center justify-center bg-primary/5 p-6 md:w-48">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                        {step.number}
                      </div>
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tantou Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-accent">短答式試験</span>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              短答式の使い方
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {tantouSteps.map((step) => (
              <Card key={step.number} className="relative">
                <div className="absolute -top-4 left-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                    {step.number}
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-gold">Tips</span>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              効率的な学習のコツ
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip) => (
              <Card key={tip.title} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <tip.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <CardTitle className="text-base">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {tip.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-device Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              どのデバイスでも学習可能
            </h2>
            <p className="mt-4 text-muted-foreground">
              WindowsとMacの両方の環境を用意しています。
              普段のPCで本番形式の練習ができます。
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {devices.map((device) => (
              <Card key={device.label} className="text-center hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <device.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle>{device.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{device.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary-gradient">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            準備はできましたか？
          </h2>
          <p className="mt-4 text-lg text-white/80">
            今すぐ14日間の無料トライアルを開始しましょう。
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-gold-foreground h-12 px-8 group">
              <Link href="/register">
                無料で始める
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 px-8 border-white/30 text-white hover:bg-white/10">
              <Link href="/faq">
                よくある質問を見る
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
