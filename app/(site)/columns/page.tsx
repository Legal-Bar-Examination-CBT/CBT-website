import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock, User, ArrowRight, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  getBlogList,
  getCategoryName,
  estimateReadMinutes,
  getCategoryBadgeClassName,
  isMicroCMSConfigured,
} from "@/lib/microcms"

export const metadata: Metadata = {
  title: "コラム",
  description: "司法試験対策、CBT活用術、開発ノートなど、学習に役立つ情報を発信しています。",
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

type PageProps = {
  searchParams: Promise<{ category?: string; q?: string }>
}

/** カテゴリ・キーワードを URL に反映（一覧リンク用） */
function columnsHref(opts: { category?: string; q?: string }) {
  const p = new URLSearchParams()
  if (opts.category) p.set("category", opts.category)
  const q = opts.q?.trim()
  if (q) p.set("q", q)
  const s = p.toString()
  return s ? `/columns?${s}` : "/columns"
}

export default async function ColumnsPage({ searchParams }: PageProps) {
  const { category: categoryFilter, q: rawQ } = await searchParams
  const q = rawQ?.trim() || undefined

  const allColumns = await getBlogList()
  const searched = q ? await getBlogList({ q }) : allColumns

  const columns = categoryFilter
    ? searched.filter((c) => c.category?.id === categoryFilter)
    : searched

  const categoryMap = new Map(
    allColumns
      .filter((c) => c.category)
      .map((c) => [c.category!.id, getCategoryName(c.category)] as const)
  )
  const categoryOptions = [
    { id: "all", name: "すべて" },
    ...Array.from(categoryMap.entries()).map(([id, name]) => ({ id, name })),
  ]

  const popularColumns = [...allColumns]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3)

  const categoryCounts = allColumns.reduce<Record<string, number>>((acc, c) => {
    const id = c.category?.id ?? "_none"
    acc[id] = (acc[id] ?? 0) + 1
    return acc
  }, {})

  return (
    <div className="pt-16">
      <section className="relative py-16 lg:py-20 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Columns
            </Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl text-balance">
              学習に役立つ
              <span className="text-primary">コラム</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              司法試験対策のノウハウ、CBTの活用術、開発の裏話など、
              学習をサポートする情報をお届けします。
            </p>
          </div>

          {!isMicroCMSConfigured() ? (
            <p className="mt-6 max-w-2xl mx-auto rounded-lg border border-dashed bg-muted/50 px-4 py-3 text-center text-sm text-muted-foreground">
              microCMS 連携のため、<code className="rounded bg-muted px-1">MICROCMS_SERVICE_DOMAIN</code>{" "}
              と <code className="rounded bg-muted px-1">MICROCMS_API_KEY</code> を{" "}
              <code className="rounded bg-muted px-1">.env.local</code> に設定してください（
              <code className="rounded bg-muted px-1">.env.example</code> 参照）。
            </p>
          ) : null}

          <form
            action="/columns"
            method="get"
            className="mt-8 max-w-xl mx-auto"
            role="search"
          >
            {categoryFilter ? (
              <input type="hidden" name="category" value={categoryFilter} />
            ) : null}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  name="q"
                  placeholder="タイトル・本文のキーワードで検索..."
                  className="h-12 pl-10"
                  defaultValue={q ?? ""}
                  autoComplete="off"
                  enterKeyHint="search"
                />
              </div>
              <Button type="submit" className="h-12 shrink-0 sm:w-auto w-full">
                検索
              </Button>
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              microCMS のキーワード検索（記事 API の検索対象フィールドに準じます）
            </p>
            {q ? (
              <p className="mt-2 text-center text-sm text-foreground">
                検索: 「{q}」
                <Link
                  href={columnsHref({ category: categoryFilter })}
                  className="ml-3 text-primary underline-offset-4 hover:underline"
                >
                  検索をクリア
                </Link>
              </p>
            ) : null}
          </form>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categoryOptions.map((category) => {
              const active =
                category.id === "all"
                  ? !categoryFilter
                  : categoryFilter === category.id
              return (
                <Button
                  key={category.id}
                  variant={active ? "default" : "outline"}
                  size="sm"
                  className={active ? "bg-primary hover:bg-primary/90" : ""}
                  asChild
                >
                  <Link
                    href={
                      category.id === "all"
                        ? columnsHref({ q })
                        : columnsHref({ category: category.id, q })
                    }
                  >
                    {category.name}
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {columns.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center text-muted-foreground">
                    {!isMicroCMSConfigured() ? (
                      "記事を表示するには microCMS の環境変数を設定してください。"
                    ) : q ? (
                      <>
                        「{q}」に一致する記事はありませんでした。
                        <br />
                        <Link
                          href={columnsHref({ category: categoryFilter })}
                          className="mt-2 inline-block text-primary underline-offset-4 hover:underline"
                        >
                          検索条件をクリア
                        </Link>
                      </>
                    ) : (
                      "記事がまだありません。microCMS のブログ API に公開中の記事を追加してください。"
                    )}
                  </CardContent>
                </Card>
              ) : (
                columns.map((column) => {
                  const categoryName = getCategoryName(column.category)
                  const readMin = estimateReadMinutes(
                    column.description,
                    column.content
                  )
                  return (
                    <Card
                      key={column.id}
                      className="group overflow-hidden hover:border-primary/50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative sm:w-48 h-40 sm:h-auto min-h-[10rem] flex-shrink-0 bg-muted">
                          {column.thumbnail?.url ? (
                            <Image
                              src={column.thumbnail.url}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, 192px"
                              unoptimized
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                              <span className="text-2xl font-bold text-primary/30">
                                CBT
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex-1 p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className={getCategoryBadgeClassName(categoryName)}
                            >
                              {categoryName}
                            </Badge>
                          </div>

                          <Link href={`/columns/${column.id}`}>
                            <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {column.title}
                            </h2>
                          </Link>

                          {column.description?.trim() ? (
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                              {column.description}
                            </p>
                          ) : null}

                          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {column.author?.trim() || "—"}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              約{readMin}分
                            </span>
                            <span>{formatDate(column.publishedAt)}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })
              )}

            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    新着の記事
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularColumns.length === 0 ? (
                    <p className="text-sm text-muted-foreground">記事がありません</p>
                  ) : (
                    popularColumns.map((column, index) => (
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
                            {formatDate(column.publishedAt)}
                          </p>
                        </div>
                      </Link>
                    ))
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">カテゴリー</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {Object.entries(categoryCounts).map(([id, count]) => {
                    const sample = allColumns.find((c) => c.category?.id === id)
                    const label =
                      id === "_none"
                        ? "未分類"
                        : sample
                          ? getCategoryName(sample.category)
                          : id
                    return (
                      <Link
                        key={id}
                        href={columnsHref({ category: id, q })}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <span className="text-sm">{label}</span>
                        <Badge variant="secondary" className="text-xs">
                          {count}
                        </Badge>
                      </Link>
                    )
                  })}
                  {Object.keys(categoryCounts).length === 0 ? (
                    <p className="text-sm text-muted-foreground">—</p>
                  ) : null}
                </CardContent>
              </Card>

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
