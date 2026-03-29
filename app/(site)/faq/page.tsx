import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "よくある質問 | 司法試験CBT",
  description: "司法試験CBTに関するよくある質問をまとめました。サービスの利用方法、料金、機能についてお答えします。",
}

const faqCategories = [
  {
    id: "registration",
    title: "利用登録について",
    questions: [
      {
        question: "招待コードはどこで入手できますか？",
        answer: "公式サイトのお問い合わせフォームからお申し込みいただくか、既存ユーザーからの紹介で入手できます。現在は招待制でサービスを提供しております。",
      },
      {
        question: "無料トライアルはありますか？",
        answer: "はい、14日間の無料トライアルをご用意しております。クレジットカード登録不要で、すぐに体験を開始できます。",
      },
      {
        question: "退会するにはどうすればいいですか？",
        answer: "アカウント設定ページから退会手続きが可能です。有料プランをご利用の場合は、まず解約手続きを行ってから退会してください。退会後、学習データは削除されます。",
      },
      {
        question: "Googleアカウントでログインできますか？",
        answer: "はい、Googleアカウントでのログインに対応しております。メールアドレスでの登録も可能です。",
      },
    ],
  },
  {
    id: "features",
    title: "機能について",
    questions: [
      {
        question: "対応している年度は？",
        answer: "短答式は昭和から令和まで、論文式は平成元年から令和まで、すべての年度の過去問を収録しています。最新の令和6年度問題も追加済みです。",
      },
      {
        question: "対応している科目は？",
        answer: "司法試験の全科目（憲法、民法、刑法、商法、民事訴訟法、刑事訴訟法、行政法、選択科目）に対応しております。",
      },
      {
        question: "スマートフォンでも使えますか？",
        answer: "はい、スマートフォン、タブレット、PCすべてのデバイスでご利用いただけます。ただし、本番同様の環境での練習のため、PC（WindowsまたはMac）での使用を推奨しております。",
      },
      {
        question: "オフラインでも使えますか？",
        answer: "基本的にはインターネット接続が必要です。一部の機能はオフラインでも動作しますが、完全な機能をご利用いただくにはオンライン環境が必要です。",
      },
      {
        question: "答案のAI分析はどのような内容ですか？",
        answer: "答案の論点網羅性、論理構成、法的表現を分析します。具体的な改善ポイントをフィードバックし、効率的な学習をサポートします。",
      },
    ],
  },
  {
    id: "pricing",
    title: "料金について",
    questions: [
      {
        question: "料金プランを教えてください",
        answer: "月額税込2,200円で、論文式と短答式の両方を無制限でご利用いただけます。業界最安値の料金設定で、長期学習でも負担が大きくなりません。",
      },
      {
        question: "支払い方法は？",
        answer: "クレジットカード（Visa、Mastercard、American Express、JCB）に対応しています。毎月自動で請求されます。",
      },
      {
        question: "解約はいつでもできますか？",
        answer: "はい、いつでも解約可能です。解約後も、その月の請求サイクル終了まではサービスをご利用いただけます。解約に際して違約金などは一切発生しません。",
      },
    ],
  },
  {
    id: "technical",
    title: "技術的な問題",
    questions: [
      {
        question: "推奨ブラウザは？",
        answer: "Google Chrome、Safari、Firefox、Microsoft Edgeの最新版を推奨しております。本番はWindowsが予想されていますが、MacとWindowsの両方の環境を用意しております。",
      },
      {
        question: "PDFが表示されません",
        answer: "ブラウザのキャッシュをクリアするか、別のブラウザでお試しください。それでも解決しない場合は、お問い合わせフォームよりご連絡ください。",
      },
      {
        question: "答案が保存されません",
        answer: "インターネット接続を確認し、ページを再読み込みしてください。自動保存機能は数秒ごとに動作しますが、手動で保存ボタンを押すことも可能です。",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden border-b">
        <div className="absolute inset-0 bg-primary-gradient -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">FAQ</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl text-balance">
              よくある質問
            </h1>
            <p className="mt-4 text-lg text-white/80">
              お探しの回答が見つからない場合は、
              お問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.id}>
                <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-primary/20">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.id}-${index}`}
                      className="border rounded-lg px-4 bg-card"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            お探しの答えが見つかりませんか？
          </h2>
          <p className="mt-4 text-muted-foreground">
            お問い合わせフォームから、お気軽にご質問ください。
            司法試験CBTに関するお問い合わせは、以下のフォームよりお願いいたします。
          </p>
          <Button size="lg" asChild className="mt-6 bg-primary hover:bg-primary/90">
            <Link href="/contact">
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
