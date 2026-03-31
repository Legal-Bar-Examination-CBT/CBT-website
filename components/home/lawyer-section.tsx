import Image from "next/image"
import { Scale, MapPin, Clock } from "lucide-react"

export function LawyerSection() {
  return (
    <section className="py-24 lg:py-36 bg-primary-gradient text-white overflow-hidden relative">
      {/* Ambient glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gold/8 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-400/8 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="section-label text-gold/80 mb-12">Supervisor</div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">

          {/* ── Left: Lawyer Profile ── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 text-base text-white/85 font-medium">
                <Scale className="h-4 w-4 text-gold" />
                弁護士監修だから安心
              </div>
            </div>

            {/* Name */}
            <h2 className="text-5xl sm:text-6xl font-black tracking-tighter leading-tight mb-2">
              監修弁護士
            </h2>
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-gold-gradient mb-2">
              関 智之
            </h3>
            <p className="text-white/80 text-lg lg:text-xl font-semibold mb-10">
              東京弁護士会所属 登録番号（63952）
            </p>

            {/* Portrait */}
            <div className="relative h-52 w-52 sm:h-64 sm:w-64 mb-10 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/lp-import/kansensei.png"
                alt="監修：弁護士 関智之"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 208px, 256px"
              />
            </div>

            {/* Quote — editorial style */}
            <div className="relative pl-6 border-l-2 border-gold">
              <p className="text-3xl font-bold text-white/90 leading-snug mb-3">
                「司法試験で1点に泣いた経験から、<br />
                本番同様の学習環境を作りました。」
              </p>
              <p className="text-white/85 leading-relaxed text-lg lg:text-xl">
                法律の専門家が受験生の目線に立って設計しています。<br />
                受験生だったことを思い出し、本当に必要な機能を厳選しました。
              </p>
            </div>
          </div>

          {/* ── Right: Law Firm ── */}
          <div className="lg:pt-24">
            {/* Office photo */}
            <a
              href="https://nakanodori-law.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-white/10 shadow-xl mb-6"
            >
              <div className="relative h-48 sm:h-56 w-full">
                <Image
                  src="/lp-import/nakanodori-site.png"
                  alt="中野通り法律事務所 公式サイト"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            </a>

            {/* Law firm info */}
            <div className="bg-white/6 border border-white/12 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-white/75 text-base lg:text-lg font-semibold tracking-wide mb-2">
                所属弁護士事務所
              </p>
              <h4 className="text-3xl lg:text-4xl font-black text-gold-gradient mb-2 tracking-tight">
                中野通り法律事務所
              </h4>
              <p className="text-white/75 text-base lg:text-lg mb-8">
                受験生の春を応援しています！
              </p>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                    東京都中野区新井2丁目30番4号
                    <br />I・F・Oビル4階A号室
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold shrink-0" />
                  <p className="text-white/80 text-base lg:text-lg">
                    営業時間：月〜金 10時〜20時
                  </p>
                </div>
              </div>

              <p className="mt-8 text-white/80 text-base lg:text-lg leading-relaxed">
                司法試験CBTに関するお問い合わせは、当サービスのお問い合わせフォームよりお願いいたします。
                {" "}
                <a
                  href="#"
                  className="text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
                >
                  （お問い合わせフォーム準備中）
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
