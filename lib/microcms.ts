/**
 * microCMS REST API（ブログ API）
 * .env に MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY を設定してください。
 * 任意: MICROCMS_BLOG_ENDPOINT（デフォルト: blog）
 */

export type MicroCMSImage = {
  url: string
  width: number
  height: number
}

/** コンテンツ参照で返るカテゴリ（カテゴリ API のフィールドに合わせて name を使用） */
export type MicroCMSCategoryRef = {
  id: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string | null
  /** カテゴリ API のフィールド ID に合わせる（name または title など） */
  name?: string | null
  title?: string | null
}

/**
 * ブログ API の1件
 * - **title** のみ必須（運用上、microCMS 側でも必須推奨）
 * - それ以外は未設定・null になり得る
 */
export type MicroCMSBlog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt?: string | null
  title: string
  description?: string | null
  content?: string | null
  author?: string | null
  category?: MicroCMSCategoryRef | null
  thumbnail?: MicroCMSImage | null
}

type BlogListResponse = {
  contents: MicroCMSBlog[]
  totalCount: number
}

function getServiceDomain(): string | undefined {
  return process.env.MICROCMS_SERVICE_DOMAIN
}

function getApiKey(): string | undefined {
  return process.env.MICROCMS_API_KEY
}

/** microCMS の API 設定の URL 末尾（例: blogs, blog） */
export function getBlogEndpoint(): string {
  return process.env.MICROCMS_BLOG_ENDPOINT ?? "blogs"
}

export function isMicroCMSConfigured(): boolean {
  return Boolean(getServiceDomain() && getApiKey())
}

export type GetBlogListOptions = {
  /** microCMS のキーワード検索（タイトル・本文など API 設定の対象フィールド） */
  q?: string
}

export async function getBlogList(options?: GetBlogListOptions): Promise<MicroCMSBlog[]> {
  const domain = getServiceDomain()
  const key = getApiKey()
  if (!domain || !key) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[microCMS] MICROCMS_SERVICE_DOMAIN または MICROCMS_API_KEY が未設定です"
      )
    }
    return []
  }

  const endpoint = getBlogEndpoint()
  const params = new URLSearchParams({
    limit: "100",
    orders: "-publishedAt",
  })
  const q = options?.q?.trim()
  if (q) params.set("q", q)

  const url = `https://${domain}.microcms.io/api/v1/${endpoint}?${params.toString()}`

  const res = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": key },
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    console.error("[microCMS] list fetch failed", res.status, await res.text())
    return []
  }

  const data = (await res.json()) as BlogListResponse
  return data.contents ?? []
}

export async function getBlogById(id: string): Promise<MicroCMSBlog | null> {
  const domain = getServiceDomain()
  const key = getApiKey()
  if (!domain || !key) return null

  const endpoint = getBlogEndpoint()
  const url = `https://${domain}.microcms.io/api/v1/${endpoint}/${id}`

  const res = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": key },
    next: { revalidate: 60 },
  })

  if (res.status === 404) return null
  if (!res.ok) {
    console.error("[microCMS] detail fetch failed", res.status, await res.text())
    return null
  }

  return (await res.json()) as MicroCMSBlog
}

/** カテゴリ表示名（カテゴリ API のフィールド ID が name 以外の場合はここを調整） */
export function getCategoryName(
  category: MicroCMSCategoryRef | null | undefined
): string {
  if (!category) return "未分類"
  return category.name ?? category.title ?? "カテゴリ"
}

/** 一覧用の読了時間（おおよそ） */
export function estimateReadMinutes(
  description?: string | null,
  contentHtml?: string | null
): number {
  const plain = ((description ?? "") + (contentHtml ?? "").replace(/<[^>]+>/g, "")).slice(
    0,
    8000
  )
  const minutes = Math.ceil(plain.length / 400)
  return Math.min(Math.max(minutes, 1), 120)
}

/** 一覧・詳細で共通のカテゴリバッジ色（名前のキーワードで判定） */
export function getCategoryBadgeClassName(categoryName: string): string {
  if (categoryName.includes("司法") || categoryName.includes("試験対策")) {
    return "bg-primary/10 text-primary border-primary/20"
  }
  if (categoryName.includes("CBT") || categoryName.includes("活用")) {
    return "bg-accent/10 text-accent border-accent/20"
  }
  if (categoryName.includes("開発")) {
    return "bg-chart-4/20 text-chart-4 border-chart-4/30"
  }
  return "bg-muted text-muted-foreground border-border"
}
