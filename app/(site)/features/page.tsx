import type { Metadata } from "next"
import { 
  PenLine, 
  ListChecks, 
  Sparkles, 
  BarChart3, 
  Clock, 
  FileText, 
  CheckCircle2,
  TrendingUp,
  Brain,
  Target,
  Zap,
  Shield
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "機能紹介",
  description: "司法試験CBT問題演習ビューワーの論文式演習、短答式演習、AI分析機能を詳しくご紹介します。",
}

const ronbunFeatures = [
  {
    icon: PenLine,
    title: "フル機能エディタ",
    description: "法律文書に最適化されたエディタ。条文引用、判例参照のショートカット機能を搭載。"
  },
  {
    icon: Clock,
    title: "リアルタイム文字数カウント",
    description: "制限文字数に対する進捗を常に表示。本番と同じ環境で練習できます。"
  },
  {
    icon: Brain,
    title: "AI即時添削",
    description: "提出後すぐにAIが答案を分析。論点の網羅性、論理構成、法的表現を評価します。"
  },
  {
    icon: Target,
    title: "論点チェックリスト",
    description: "問題ごとに必要な論点を一覧表示。どの論点が書けていないかを可視化。"
  },
  {
    icon: BarChart3,
    title: "答案比較機能",
    description: "過去の合格答案や他ユーザーの答案と比較。どこが足りないかを客観的に把握。"
  },
  {
    icon: FileText,
    title: "答案履歴管理",
    description: "過去の答案をすべて保存。成長の軌跡を振り返り、弱点克服に活かせます。"
  },
]

const tantouFeatures = [
  {
    icon: ListChecks,
    title: "全年度過去問収録",
    description: "昭和から令和まで、すべての短答式過去問を収録。年度・科目で絞り込み可能。"
  },
  {
    icon: TrendingUp,
    title: "正解率分布グラフ",
    description: "全ユーザーの正解率をグラフ化。自分の位置を客観的に把握できます。"
  },
  {
    icon: Zap,
    title: "弱点問題自動抽出",
    description: "間違えた問題、迷った問題を自動でピックアップ。効率的な復習を実現。"
  },
  {
    icon: CheckCircle2,
    title: "解説表示機能",
    description: "各問題に詳細な解説を表示。なぜその答えなのかを深く理解できます。"
  },
  {
    icon: Shield,
    title: "本番モード",
    description: "制限時間付きで本番さながらの演習が可能。緊張感を持って取り組めます。"
  },
  {
    icon: BarChart3,
    title: "科目別成績管理",
    description: "民法、刑法、憲法など科目ごとの正解率を管理。バランスよく学習を進められます。"
  },
]

const aiFeatures = [
  {
    icon: Sparkles,
    title: "学習進捗ダッシュボード",
    description: "日々の学習時間、演習数、正解率をビジュアルで表示。モチベーション維持に。"
  },
  {
    icon: Brain,
    title: "弱点分野AI分析",
    description: "AIがあなたの回答パターンを分析。どの分野が弱いかを特定し、優先順位を提案。"
  },
  {
    icon: Target,
    title: "推奨学習プラン",
    description: "目標日までの最適な学習スケジュールをAIが自動生成。迷わず学習を進められます。"
  },
  {
    icon: TrendingUp,
    title: "予測スコア算出",
    description: "現在の学力から本番での予測点数を算出。合格ラインまでの距離を可視化。"
  },
]

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl text-balance">
              合格に必要な機能を、
              <br />
              <span className="text-primary">すべてひとつに。</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              論文式の添削から短答式の演習、AIによる学習分析まで。
              司法試験合格に必要な機能をすべて搭載しています。
            </p>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="ronbun" className="space-y-12">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto p-1">
              <TabsTrigger value="ronbun" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <PenLine className="h-4 w-4 mr-2" />
                論文式演習
              </TabsTrigger>
              <TabsTrigger value="tantou" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <ListChecks className="h-4 w-4 mr-2" />
                短答式演習
              </TabsTrigger>
              <TabsTrigger value="ai" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Sparkles className="h-4 w-4 mr-2" />
                AI分析
              </TabsTrigger>
            </TabsList>

            {/* 論文式演習 */}
            <TabsContent value="ronbun" id="ronbun" className="space-y-12">
              {/* Demo UI */}
              <div className="rounded-2xl bg-card shadow-xl border overflow-hidden max-w-4xl mx-auto">
                <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 border-b">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-primary/70" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-xs text-muted-foreground">論文式演習エディタ</span>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3">
                  {/* Editor Area */}
                  <div className="lg:col-span-2 p-6 border-r">
                    <div className="flex items-center justify-between mb-4">
                      <Badge>令和5年 司法試験 憲法 第1問</Badge>
                      <span className="text-sm text-muted-foreground">残り時間: 01:45:32</span>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 min-h-[200px] border">
                      <p className="text-sm text-foreground leading-relaxed">
                        第1　設問1について
                      </p>
                      <p className="text-sm text-foreground leading-relaxed mt-2">
                        1　本件規制の憲法上の問題点
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        本件条例は、特定の表現内容を規制するものであり、
                        憲法21条1項が保障する表現の自由との関係で問題となる...
                      </p>
                      <div className="mt-2 h-px w-20 bg-primary animate-pulse" />
                    </div>
                    <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                      <span>文字数: 1,234 / 4,000</span>
                      <div className="flex gap-2">
                        <Badge variant="outline">自動保存済み</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Feedback Panel */}
                  <div className="p-6 bg-secondary/30">
                    <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-accent" />
                      AIフィードバック
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                        <p className="text-xs font-medium text-accent">論点カバー率</p>
                        <p className="text-2xl font-bold text-foreground">78%</p>
                      </div>
                      <div className="p-3 rounded-lg bg-card border">
                        <p className="text-xs font-medium text-muted-foreground">検出された論点</p>
                        <ul className="mt-2 space-y-1 text-xs">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3 w-3 text-accent" />
                            表現の自由の保障
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3 w-3 text-accent" />
                            規制の合憲性判断基準
                          </li>
                          <li className="flex items-center gap-2 text-muted-foreground">
                            <div className="h-3 w-3 rounded-full border-2" />
                            比例原則の適用
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {ronbunFeatures.map((feature) => (
                  <Card key={feature.title} className="group hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 短答式演習 */}
            <TabsContent value="tantou" id="tantou" className="space-y-12">
              {/* Demo UI */}
              <div className="rounded-2xl bg-card shadow-xl border overflow-hidden max-w-4xl mx-auto">
                <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 border-b">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-primary/70" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-xs text-muted-foreground">短答式演習</span>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3">
                  {/* Question Area */}
                  <div className="lg:col-span-2 p-6 border-r">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">民法 - 物権</Badge>
                      <span className="text-sm text-muted-foreground">問題 15 / 50</span>
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm text-foreground leading-relaxed">
                        【問題】不動産の物権変動に関する次の記述のうち、判例の趣旨に照らして正しいものはどれか。
                      </p>
                      <div className="space-y-2">
                        {["1. 不動産の二重譲渡において...", "2. 取得時効の完成により...", "3. 相続による所有権の取得は...", "4. 詐欺による意思表示の取消しは...", "5. 解除による原状回復請求権は..."].map((option, i) => (
                          <label key={i} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${i === 1 ? 'bg-primary/10 border-primary' : 'hover:bg-muted/50'}`}>
                            <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${i === 1 ? 'border-primary bg-primary' : 'border-muted-foreground'}`}>
                              {i === 1 && <div className="h-2 w-2 rounded-full bg-white" />}
                            </div>
                            <span className="text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats Panel */}
                  <div className="p-6 bg-secondary/30">
                    <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      正解率分布
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>この問題の正解率</span>
                          <span className="font-medium">67%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: '67%' }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>あなたの正解率</span>
                          <span className="font-medium">82%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '82%' }} />
                        </div>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="text-xs text-muted-foreground mb-2">科目別進捗</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {[{ label: "民法", value: 85 }, { label: "刑法", value: 72 }, { label: "憲法", value: 78 }].map((item) => (
                            <div key={item.label} className="p-2 rounded-lg bg-card border">
                              <p className="text-lg font-bold text-foreground">{item.value}%</p>
                              <p className="text-xs text-muted-foreground">{item.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tantouFeatures.map((feature) => (
                  <Card key={feature.title} className="group hover:border-accent/50 transition-colors">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors mb-2">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* AI分析 */}
            <TabsContent value="ai" id="ai" className="space-y-12">
              {/* Demo UI */}
              <div className="rounded-2xl bg-card shadow-xl border overflow-hidden max-w-4xl mx-auto">
                <div className="flex items-center gap-2 bg-muted/50 px-4 py-3 border-b">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-primary/70" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-xs text-muted-foreground">AI学習分析ダッシュボード</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid gap-4 md:grid-cols-4 mb-6">
                    {[
                      { label: "今週の学習時間", value: "12.5h", change: "+2.3h" },
                      { label: "演習問題数", value: "156", change: "+24" },
                      { label: "平均正解率", value: "78%", change: "+3%" },
                      { label: "予測スコア", value: "168", change: "+5" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-secondary/50 border">
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                        <p className="text-xs text-accent font-medium">{stat.change} 前週比</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Weakness Chart */}
                    <div className="p-4 rounded-xl border bg-card">
                      <h4 className="font-semibold text-sm mb-4">弱点分野分析</h4>
                      <div className="space-y-3">
                        {[
                          { subject: "民法 - 債権総論", score: 45 },
                          { subject: "刑法 - 共犯論", score: 52 },
                          { subject: "憲法 - 人権各論", score: 61 },
                          { subject: "民訴 - 証拠法", score: 68 },
                        ].map((item) => (
                          <div key={item.subject}>
                            <div className="flex justify-between text-xs mb-1">
                              <span>{item.subject}</span>
                              <span className={item.score < 60 ? "text-destructive" : "text-muted-foreground"}>{item.score}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${item.score < 60 ? 'bg-destructive' : 'bg-accent'}`} 
                                style={{ width: `${item.score}%` }} 
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Recommended Plan */}
                    <div className="p-4 rounded-xl border bg-card">
                      <h4 className="font-semibold text-sm mb-4">今日の推奨学習</h4>
                      <div className="space-y-3">
                        {[
                          { task: "民法債権総論の復習", time: "45分", priority: "高" },
                          { task: "刑法共犯論 過去問10問", time: "30分", priority: "高" },
                          { task: "憲法論文 1問", time: "60分", priority: "中" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                            <div className={`h-2 w-2 rounded-full ${item.priority === "高" ? "bg-destructive" : "bg-accent"}`} />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{item.task}</p>
                              <p className="text-xs text-muted-foreground">{item.time}</p>
                            </div>
                            <Badge variant={item.priority === "高" ? "destructive" : "secondary"} className="text-xs">
                              {item.priority}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {aiFeatures.map((feature) => (
                  <Card key={feature.title} className="group hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
