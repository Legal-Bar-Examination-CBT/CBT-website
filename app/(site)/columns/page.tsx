import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock, User, ArrowRight, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "コラム",
  description: "司法試験対策、CBT活用術、開発ノートなど、学習に役立つ情報を発信しています。",
}

// MicroCMS連携を想定したTypeScriptインターフェース
// interface Column {
//   id: string
//   title: string
//   description: string
//   content: string
//   thumbnail?: {
//     url: string
//     width: number
//     height: number
//   }
//   category: {
//     id: string
//     name: string
//   }
//   author: {
//     name: string
//     avatar?: string
//   }
//   publishedAt: string
//   revisedAt?: string
// }
//
// MicroCMS APIからデータを取得する場合:
// const response = await fetch(
//   `https://YOUR_SERVICE.microcms.io/api/v1/columns`,
//   {
//     headers: {
//       'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
//     },
//   }
// )
// const data = await response.json()

const categories = [
  { id: "all", name: "すべて" },
  { id: "exam-strategy", name: "司法試験対策" },
  { id: "cbt-tips", name: "CBT活用術" },
  { id: "development", name: "開発ノート" },
]

// サンプル記事データ（MicroCMS連携時はAPIから取得）
const columns = [
  {
    id: "1",
    title: "令和6年司法試験の傾向分析と対策ポイント",
    description: "令和6年度の出題傾向を詳細に分析し、来年度に向けた効果的な学習戦略をご紹介します。各科目の重要論点と、CBTを活用した具体的な対策方法を解説。",
    category: { id: "exam-strategy", name: "司法試験対策" },
    author: { name: "編集部" },
    publishedAt: "2024-03-15",
    readTime: 8,
  },
  {
    id: "2",
    title: "AI添削を最大限活用する5つのコツ",
    description: "AI添削機能を使いこなすためのテクニックをご紹介。フィードバックの読み方、改善ポイントの見つけ方、効率的な復習サイクルの作り方を解説します。",
    category: { id: "cbt-tips", name: "CBT活用術" },
    author: { name: "学習サポートチーム" },
    publishedAt: "2024-03-10",
    readTime: 6,
  },
  {
    id: "3",
    title: "短答式で8割を取るための戦略的アプローチ",
    description: "短答式試験で安定して高得点を取るための学習法を、科目別に詳しく解説。過去問の効果的な使い方と、CBTの分析機能を活用した弱点克服法。",
    category: { id: "exam-strategy", name: "司法試験対策" },
    author: { name: "編集部" },
    publishedAt: "2024-03-05",
    readTime: 10,
  },
  {
    id: "4",
    title: "新機能リリース：論点チェックリスト機能の使い方",
    description: "最新アップデートで追加された論点チェックリスト機能について詳しく解説。論文式演習での活用方法と、学習効率を高めるためのTipsをご紹介。",
    category: { id: "development", name: "開発ノート" },
    author: { name: "開発チーム" },
    publishedAt: "2024-03-01",
    readTime: 5,
  },
  {
    id: "5",
    title: "民法改正後の債権法を効率的にマスターする方法",
    description: "民法改正で大きく変わった債権法分野について、新旧対照しながら効率的に学習する方法を解説。CBTの比較機能を活用した学習法も紹介。",
    category: { id: "exam-strategy", name: "司法試験対策" },
    author: { name: "編集部" },
    publishedAt: "2024-02-25",
    readTime: 12,
  },
  {
    id: "6",
    title: "スキマ時間を活用したモバイル学習のすすめ",
    description: "通勤時間や休憩時間を使って効率的に学習を進める方法。スマートフォンでのCBT活用術と、短時間で成果を出すための工夫をご紹介。",
    category: { id: "cbt-tips", name: "CBT活用術" },
    author: { name: "学習サポートチーム" },
    publishedAt: "2024-02-20",
    readTime: 4,
  },
]

const popularColumns = [
  { id: "1", title: "令和6年司法試験の傾向分析と対策ポイント", views: 2450 },
  { id: "3", title: "短答式で8割を取るための戦略的アプローチ", views: 1830 },
  { id: "2", title: "AI添削を最大限活用する5つのコツ", views: 1560 },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
}

function getCategoryColor(categoryId: string) {
  switch (categoryId) {
    case "exam-strategy":
      return "bg-primary/10 text-primary border-primary/20"
    case "cbt-tips":
      return "bg-accent/10 text-accent border-accent/20"
    case "development":
      return "bg-chart-4/20 text-chart-4 border-chart-4/30"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function ColumnsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Columns</Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl text-balance">
              学習に役立つ
              <span className="text-primary">コラム</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              司法試験対策のノウハウ、CBTの活用術、開発の裏話など、
              学習をサポートする情報をお届けします。
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="キーワードで記事を検索..." 
                className="pl-10 h-12"
              />
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === "all" ? "default" : "outline"}
                size="sm"
                className={category.id === "all" ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Article List */}
            <div className="lg:col-span-2 space-y-6">
              {columns.map((column) => (
                <Card key={column.id} className="group overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row">
                    {/* Thumbnail Placeholder */}
                    <div className="sm:w-48 h-40 sm:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <div className="text-4xl font-bold text-primary/30">
                        {column.id}
                      </div>
                    </div>
                    
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className={getCategoryColor(column.category.id)}>
                          {column.category.name}
                        </Badge>
                      </div>
                      
                      <Link href={`/columns/${column.id}`}>
                        <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {column.title}
                        </h2>
                      </Link>
                      
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {column.description}
                      </p>
                      
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {column.author.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {column.readTime}分で読める
                        </span>
                        <span>{formatDate(column.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              {/* Load More */}
              <div className="text-center pt-4">
                <Button variant="outline" size="lg">
                  もっと見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Popular Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    人気の記事
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularColumns.map((column, index) => (
                    <Link 
                      key={column.id} 
                      href={`/columns/${column.id}`}
                      className="flex items-start gap-3 group"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {column.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {column.views.toLocaleString()} views
                        </p>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
              
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">カテゴリー</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.filter(c => c.id !== "all").map((category) => (
                    <Link 
                      key={category.id}
                      href={`/columns?category=${category.id}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {columns.filter(c => c.category.id === category.id).length}
                      </Badge>
                    </Link>
                  ))}
                </CardContent>
              </Card>
              
              {/* CTA Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg">無料で始める</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    今すぐアカウントを作成して、すべての機能をお試しください。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link href="/register">
                      アカウント作成
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
