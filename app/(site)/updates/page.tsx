import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Bug, Zap, Shield, Rocket } from "lucide-react"

export const metadata: Metadata = {
  title: "アップデート情報",
  description: "司法試験CBT問題演習ビューワーの最新機能追加、改善、バグ修正などの更新情報をお知らせします。",
}

const updateTypes = {
  feature: { label: "新機能", icon: Sparkles, color: "bg-accent text-accent-foreground" },
  improvement: { label: "改善", icon: Zap, color: "bg-primary text-primary-foreground" },
  bugfix: { label: "バグ修正", icon: Bug, color: "bg-chart-5 text-white" },
  security: { label: "セキュリティ", icon: Shield, color: "bg-destructive text-destructive-foreground" },
}

const updates = [
  {
    version: "v2.5.0",
    date: "2024-03-20",
    title: "AI論点チェックリスト機能をリリース",
    description: "論文式演習において、AIが自動で必要な論点をチェックリスト化。どの論点が書けているかリアルタイムで確認できます。",
    type: "feature",
    changes: [
      { type: "feature", text: "論点チェックリスト機能を追加" },
      { type: "feature", text: "チェックリストの進捗率表示" },
      { type: "improvement", text: "AI添削の精度を向上" },
      { type: "bugfix", text: "文字数カウントの不具合を修正" },
    ],
  },
  {
    version: "v2.4.2",
    date: "2024-03-10",
    title: "短答式演習の正解率分析を強化",
    description: "科目別・分野別の正解率をより詳細に分析できるようになりました。弱点発見に役立てください。",
    type: "improvement",
    changes: [
      { type: "improvement", text: "正解率の科目別グラフ表示を追加" },
      { type: "improvement", text: "分野別の弱点分析レポート機能" },
      { type: "feature", text: "間違えた問題の自動抽出機能" },
      { type: "bugfix", text: "一部端末での表示崩れを修正" },
    ],
  },
  {
    version: "v2.4.0",
    date: "2024-02-28",
    title: "令和5年度司法試験問題を追加",
    description: "令和5年度の司法試験問題（論文式・短答式）を追加しました。最新の出題傾向を把握し、対策にお役立てください。",
    type: "feature",
    changes: [
      { type: "feature", text: "令和5年度論文式問題を追加" },
      { type: "feature", text: "令和5年度短答式問題を追加" },
      { type: "improvement", text: "問題検索機能の強化" },
    ],
  },
  {
    version: "v2.3.1",
    date: "2024-02-15",
    title: "パフォーマンス改善とバグ修正",
    description: "アプリケーション全体のパフォーマンスを改善し、いくつかの不具合を修正しました。",
    type: "bugfix",
    changes: [
      { type: "improvement", text: "ページ読み込み速度を20%改善" },
      { type: "bugfix", text: "ログイン時のセッション問題を修正" },
      { type: "bugfix", text: "答案保存時のエラーを修正" },
      { type: "security", text: "セキュリティパッチの適用" },
    ],
  },
  {
    version: "v2.3.0",
    date: "2024-02-01",
    title: "学習ダッシュボードをリニューアル",
    description: "学習進捗をより直感的に把握できるよう、ダッシュボードを全面リニューアルしました。",
    type: "feature",
    changes: [
      { type: "feature", text: "新デザインのダッシュボード" },
      { type: "feature", text: "週間・月間の学習レポート" },
      { type: "feature", text: "目標設定と達成度表示" },
      { type: "improvement", text: "モバイル表示の最適化" },
    ],
  },
  {
    version: "v2.2.0",
    date: "2024-01-15",
    title: "スマートフォン対応を強化",
    description: "スマートフォンでの学習体験を大幅に改善。通勤時間などのスキマ時間を有効活用できます。",
    type: "improvement",
    changes: [
      { type: "feature", text: "モバイル専用UIを追加" },
      { type: "improvement", text: "タッチ操作の最適化" },
      { type: "improvement", text: "オフライン問題キャッシュ機能" },
      { type: "bugfix", text: "iOS Safariでの表示問題を修正" },
    ],
  },
]

function getTypeInfo(type: string) {
  return updateTypes[type as keyof typeof updateTypes] || updateTypes.improvement
}

export default function UpdatesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Updates</Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl text-balance">
              <span className="text-primary">アップデート</span>情報
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              司法試験CBT問題演習ビューワーは常に進化しています。
              新機能、改善、バグ修正などの更新情報をお知らせします。
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            {/* Updates */}
            <div className="space-y-8">
              {updates.map((update, index) => {
                const typeInfo = getTypeInfo(update.type)
                const TypeIcon = typeInfo.icon
                
                return (
                  <div key={update.version} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-8 -translate-x-1/2 hidden md:flex">
                      <div className={`h-4 w-4 rounded-full ${typeInfo.color} ring-4 ring-background`} />
                    </div>
                    
                    {/* Content */}
                    <div className="md:ml-16 rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge className={typeInfo.color}>
                          <TypeIcon className="h-3 w-3 mr-1" />
                          {typeInfo.label}
                        </Badge>
                        <Badge variant="outline" className="font-mono">
                          {update.version}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(update.date).toLocaleDateString('ja-JP', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      
                      {/* Title & Description */}
                      <h2 className="text-xl font-bold text-foreground">
                        {update.title}
                      </h2>
                      <p className="mt-2 text-muted-foreground">
                        {update.description}
                      </p>
                      
                      {/* Changes List */}
                      <div className="mt-4 space-y-2">
                        {update.changes.map((change, i) => {
                          const changeInfo = getTypeInfo(change.type)
                          return (
                            <div key={i} className="flex items-start gap-3 text-sm">
                              <Badge variant="outline" className="text-xs px-2 py-0.5 flex-shrink-0">
                                {changeInfo.label}
                              </Badge>
                              <span className="text-muted-foreground">{change.text}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
