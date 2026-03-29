"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MessageSquare, Clock, ArrowRight, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field"

const contactMethods = [
  {
    icon: Mail,
    title: "メール",
    description: "support@shihou-cbt.com",
    detail: "24時間受付・2営業日以内に返信",
  },
  {
    icon: MessageSquare,
    title: "お問い合わせフォーム",
    description: "下記フォームより送信",
    detail: "必要事項を入力して送信",
  },
  {
    icon: Clock,
    title: "対応時間",
    description: "平日 10:00〜18:00",
    detail: "土日祝日は翌営業日対応",
  },
]

const inquiryTypes = [
  { value: "general", label: "一般的なご質問" },
  { value: "feature", label: "機能・使い方について" },
  { value: "billing", label: "料金・お支払いについて" },
  { value: "bug", label: "不具合の報告" },
  { value: "feedback", label: "ご意見・ご要望" },
  { value: "other", label: "その他" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // フォーム送信のシミュレーション
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mx-auto mb-6">
            <Send className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            お問い合わせを受け付けました
          </h1>
          <p className="mt-4 text-muted-foreground">
            内容を確認の上、2営業日以内にご連絡いたします。
            しばらくお待ちください。
          </p>
          <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
            <Link href="/">
              トップページに戻る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Contact</Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl text-balance">
              <span className="text-primary">お問い合わせ</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              サービスに関するご質問、ご意見、不具合のご報告など、
              お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {contactMethods.map((method) => (
              <Card key={method.title} className="text-center hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <method.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground">{method.description}</p>
                  <p className="text-sm text-muted-foreground mt-1">{method.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>お問い合わせフォーム</CardTitle>
                <CardDescription>
                  必要事項をご入力の上、送信してください。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name">お名前</FieldLabel>
                      <Input 
                        id="name" 
                        placeholder="山田 太郎" 
                        required 
                      />
                    </Field>
                    
                    <Field>
                      <FieldLabel htmlFor="email">メールアドレス</FieldLabel>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="example@email.com" 
                        required 
                      />
                      <FieldDescription>返信先として使用します</FieldDescription>
                    </Field>
                    
                    <Field>
                      <FieldLabel htmlFor="type">お問い合わせ種別</FieldLabel>
                      <Select required>
                        <SelectTrigger id="type">
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                    
                    <Field>
                      <FieldLabel htmlFor="subject">件名</FieldLabel>
                      <Input 
                        id="subject" 
                        placeholder="お問い合わせの件名" 
                        required 
                      />
                    </Field>
                    
                    <Field>
                      <FieldLabel htmlFor="message">お問い合わせ内容</FieldLabel>
                      <Textarea 
                        id="message" 
                        placeholder="お問い合わせ内容を詳しくご記入ください..." 
                        rows={6}
                        required
                      />
                    </Field>
                  </FieldGroup>
                  
                  <div className="mt-6">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          送信中...
                        </>
                      ) : (
                        <>
                          送信する
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <p className="mt-4 text-xs text-muted-foreground text-center">
                    送信いただいた内容は、
                    <Link href="/privacy" className="text-primary hover:underline">プライバシーポリシー</Link>
                    に基づき取り扱います。
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-foreground">
            お問い合わせの前に
          </h2>
          <p className="mt-4 text-muted-foreground">
            よくある質問をご確認いただくと、すぐに解決できる場合があります。
          </p>
          <Button variant="outline" size="lg" asChild className="mt-6">
            <Link href="/faq">
              よくある質問を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
