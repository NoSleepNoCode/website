import { motion } from 'framer-motion'
import { UseCaseSection } from './UseCaseSection'
import { OnboardingMockup } from './mockups/OnboardingMockup'
import { DecisionContextMockup } from './mockups/DecisionContextMockup'
import { UniversalSearchMockup } from './mockups/UniversalSearchMockup'
import { DocumentStalenessMockup } from './mockups/DocumentStalenessMockup'

export function UseCasesContainer() {
  return (
    <section id="use-cases" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            See Start Right <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real scenarios, real impact. See how Start Right transforms everyday work
            across your organization.
          </p>
        </motion.div>

        {/* Use Case 1: Onboarding */}
        <UseCaseSection
          id="onboarding"
          title="Onboard Faster, Ramp Up Smarter"
          subtitle="New Employee Experience"
          description="New employees get instant context about projects, people, and processes through natural conversation. No more hunting through wikis or waiting for team members to respond—Start Right delivers personalized onboarding from day one."
          mockupComponent={OnboardingMockup}
        />

        {/* Use Case 2: Universal Search */}
        <UseCaseSection
          id="universal-search"
          title="Find Anything, Instantly"
          subtitle="Universal Document Search"
          description="Search across all your tools and repositories from one place. Start Right indexes documents from Confluence, SharePoint, Jira, GitHub, and more—giving you instant access to the information you need, no matter where it lives."
          mockupComponent={UniversalSearchMockup}
          reverse={true}
        />

        {/* Use Case 3: Decision Context */}
        <UseCaseSection
          id="decisions"
          title="Make Informed Decisions, Every Time"
          subtitle="Historical Context & Decision Archaeology"
          description="Surface historical context and past decisions to inform current strategy. Start Right remembers why choices were made, who was involved, and what trade-offs were considered—turning institutional memory into institutional intelligence."
          mockupComponent={DecisionContextMockup}
        />

        {/* Use Case 4: Document Staleness */}
        <UseCaseSection
          id="document-staleness"
          title="Keep Knowledge Fresh, Automatically"
          subtitle="AI-Powered Document Staleness Detection"
          description="Never let critical documentation go stale again. Start Right continuously monitors your knowledge base, detects outdated content by correlating with code changes, system updates, and team discussions—then identifies the right people to keep everything current."
          mockupComponent={DocumentStalenessMockup}
          reverse={true}
        />
      </div>
    </section>
  )
}
