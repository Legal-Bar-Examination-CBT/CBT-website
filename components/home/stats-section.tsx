"use client"

import { useEffect, useRef, useState } from "react"
import { Users, FileText, Brain, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: FileText,
    value: 100000,
    suffix: "+",
    label: "累計演習数",
    description: "論文式・短答式合わせて",
  },
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "登録ユーザー数",
    description: "全国の受験生が利用",
  },
  {
    icon: Brain,
    value: 50000,
    suffix: "+",
    label: "AI添削実行数",
    description: "24時間自動フィードバック",
  },
  {
    icon: TrendingUp,
    value: 85,
    suffix: "%",
    label: "継続利用率",
    description: "1ヶ月以上継続",
  },
]

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return { count, ref }
}

function StatCard({ icon: Icon, value, suffix, label, description }: {
  icon: React.ComponentType<{ className?: string }>
  value: number
  suffix: string
  label: string
  description: string
}) {
  const { count, ref } = useCountUp(value)

  return (
    <div ref={ref} className="group relative rounded-2xl bg-card border p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
      {/* Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-7 w-7" />
        </div>
        
        {/* Value */}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl lg:text-5xl font-bold text-foreground">
            {count.toLocaleString()}
          </span>
          <span className="text-2xl lg:text-3xl font-bold text-primary">
            {suffix}
          </span>
        </div>
        
        {/* Label */}
        <p className="mt-2 text-base font-semibold text-foreground">
          {label}
        </p>
        
        {/* Description */}
        <p className="mt-1 text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            数字で見る<span className="text-primary">司法試験CBT</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            多くの受験生に選ばれ、学習を支援し続けています。
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
