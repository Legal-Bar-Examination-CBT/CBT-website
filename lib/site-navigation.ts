/**
 * サイト全体で共通のヘッダーナビ定義（単一の参照元）
 */
export const headerFeatures = [
  {
    title: "論文式演習",
    href: "/features#ronbun",
    description: "AIによるリアルタイム添削と詳細フィードバック",
  },
  {
    title: "短答式演習",
    href: "/features#tantou",
    description: "過去問データベースと正解率分析",
  },
  {
    title: "AI分析",
    href: "/features#ai",
    description: "学習進捗の可視化と弱点分析",
  },
] as const

export type HeaderNavItem = {
  title: string
  href: string
}

/** 先頭の「機能」はメガメニュー用。slice(1) で横並びリンク */
export const headerNavItems: HeaderNavItem[] = [
  { title: "機能", href: "/features" },
  { title: "使い方", href: "/guide" },
  { title: "コラム", href: "/columns" },
  { title: "アップデート", href: "/updates" },
  { title: "料金比較", href: "/pricing" },
  { title: "FAQ", href: "/faq" },
]
