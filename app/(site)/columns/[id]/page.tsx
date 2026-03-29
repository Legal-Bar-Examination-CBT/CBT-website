import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  getBlogById,
  getCategoryName,
  estimateReadMinutes,
  getCategoryBadgeClassName,
  isMicroCMSConfigured,
} from "@/lib/microcms"

type Props = { params: Promise<{ id: string }> }

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  if (!isMicroCMSConfigured()) {
    return { title: "記事" }
  }
  const blog = await getBlogById(id)
  if (!blog) return { title: "記事が見つかりません" }
  const desc = blog.description?.trim() || undefined
  return {
    title: blog.title,
    description: desc,
    openGraph: {
      title: blog.title,
      description: desc,
      images: blog.thumbnail?.url ? [blog.thumbnail.url] : undefined,
    },
  }
}

export default async function ColumnDetailPage({ params }: Props) {
  const { id } = await params

  if (!isMicroCMSConfigured()) {
    notFound()
  }

  const blog = await getBlogById(id)
  if (!blog) notFound()

  const categoryName = getCategoryName(blog.category)
  const readMin = estimateReadMinutes(blog.description, blog.content)

  return (
    <div className="pt-16">
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Button variant="ghost" size="sm" className="mb-8 -ml-2" asChild>
          <Link href="/columns">
            <ArrowLeft className="mr-2 h-4 w-4" />
            コラム一覧
          </Link>
        </Button>

        <Badge variant="outline" className={getCategoryBadgeClassName(categoryName)}>
          {categoryName}
        </Badge>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          {blog.title}
        </h1>

        {blog.description?.trim() ? (
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {blog.description}
          </p>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {blog.author?.trim() || "—"}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            約{readMin}分
          </span>
          <time dateTime={blog.publishedAt}>
            {new Date(blog.publishedAt).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        {blog.thumbnail?.url ? (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-xl border bg-muted">
            <Image
              src={blog.thumbnail.url}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              unoptimized
            />
          </div>
        ) : null}

        <div
          className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-primary prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: blog.content ?? "" }}
        />
      </article>
    </div>
  )
}
