import { Scale, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function LawyerSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary-gradient text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content - Lawyer Info */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 mb-6 border border-white/20">
              <Scale className="h-4 w-4" />
              弁護士監修だから安心
            </div>
            
            <h2 className="text-3xl font-bold sm:text-4xl text-balance mb-6">
              監修：弁護士 関智之
            </h2>
            
            <p className="text-white/80 mb-2">
              東京弁護士会所属 登録番号（63952）
            </p>
            
            <blockquote className="text-lg text-white/90 leading-relaxed border-l-4 border-gold pl-4 my-8">
              「司法試験で1点に泣いた経験から、本番同様の学習環境を作りました。」
            </blockquote>
            
            <p className="text-white/80 leading-relaxed">
              法律の専門家が受験生の目線に立って設計しています。
              受験生だったことを思い出し作成しました。
            </p>
          </div>

          {/* Right Content - Law Firm Info */}
          <div>
            <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">所属弁護士事務所</h3>
                <h4 className="text-2xl font-bold text-gold mb-4">中野通り法律事務所</h4>
                
                <p className="text-white/80 mb-6">
                  受験生の春を応援しています！
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-white/80">
                      東京都中野区新井2丁目30番4号<br />
                      I・F・Oビル4階A号室
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gold flex-shrink-0" />
                    <p className="text-white/80">
                      営業時間：月〜金 10時〜20時
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/60">
                    司法試験CBT問題演習ビューワーに関するお問い合わせは、サイト内のフォームよりお願いいたします。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
