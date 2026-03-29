import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, Mail, ExternalLink } from "lucide-react"
import { SITE_NAME } from "@/lib/site-brand"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  service: {
    title: "サービス",
    links: [
      { label: "機能紹介", href: "/features" },
      { label: "ご利用ガイド", href: "/guide" },
      { label: "料金プラン", href: "/pricing" },
      { label: "よくある質問", href: "/faq" },
    ],
  },
  content: {
    title: "コンテンツ",
    links: [
      { label: "コラム", href: "/columns" },
      { label: "アップデート情報", href: "/updates" },
    ],
  },
  support: {
    title: "サポート",
    links: [
      { label: "お問い合わせ", href: "/contact" },
      { label: "利用規約", href: "/terms" },
      { label: "プライバシーポリシー", href: "/privacy" },
      { label: "特定商取引法に基づく表記", href: "/legal" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="border-t bg-primary-gradient text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <Image
                src="/logo.webp"
                alt={SITE_NAME}
                width={144}
                height={144}
                sizes="40px"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-contain shadow-md ring-1 ring-white/10"
              />
              <span className="text-sm sm:text-lg font-bold text-white leading-tight max-w-[14rem] sm:max-w-none">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/70 leading-relaxed">
              新しい司法試験形式「CBT」に誰より早く慣れる。
              本番そのままの操作体験を、あなたの手に。
            </p>
            
            {/* Law Firm Info */}
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p className="font-medium text-white/90">中野通り法律事務所</p>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-gold" />
                <span>東京都中野区新井2丁目30番4号 I・F・Oビル4階A号室</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 text-gold" />
                <span>営業時間：月〜金 10時〜20時</span>
              </div>
            </div>
            
            {/* System Partner */}
            <div className="mt-4 text-sm text-white/60">
              <p>システム協力：モバイルアプリシステムズ株式会社</p>
              <p>東京都港区南青山２丁目２番15号 WIN青山5F</p>
            </div>
          </div>

          {/* Link Sections */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Disclaimer */}
        <div className="mb-6 text-xs text-white/50 leading-relaxed">
          <p>
            出典：法務省ウェブサイト（https://www.moj.go.jp/jinji/shihoushiken/jinji08_00238.html）
          </p>
          <p>
            出典：「司法試験等ＣＢＴシステム（体験版）」（法務省）をもとに、中野通り法律事務所及び、モバイルアプリシステムズ株式会社が作成
          </p>
          <p className="mt-2">
            本件の収益の一部は公益性が高いが経済的利益の見込めない事件の実費の一部に補填することが予定されております。
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/terms"
              className="text-sm text-white/60 transition-colors hover:text-gold"
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-white/60 transition-colors hover:text-gold"
            >
              プライバシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
