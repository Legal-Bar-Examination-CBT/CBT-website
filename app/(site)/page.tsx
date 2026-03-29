import { HeroSection } from "@/components/home/hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { SolutionSection } from "@/components/home/solution-section"
import { LawyerSection } from "@/components/home/lawyer-section"
import { FeaturesSection } from "@/components/home/features-section"
import { FlowSection } from "@/components/home/flow-section"
import { ComparisonSection } from "@/components/home/comparison-section"
import { MessageSection } from "@/components/home/message-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <LawyerSection />
      <FeaturesSection />
      <FlowSection />
      <ComparisonSection />
      <MessageSection />
      <CTASection />
    </>
  )
}
