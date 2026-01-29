import { motion } from 'framer-motion'
import type { ComponentType } from 'react'

interface UseCaseSectionProps {
  id: string
  title: string
  subtitle: string
  description: string
  mockupComponent: ComponentType
  reverse?: boolean
}

export function UseCaseSection({
  id,
  title,
  subtitle,
  description,
  mockupComponent: MockupComponent,
  reverse = false,
}: UseCaseSectionProps) {
  return (
    <div id={id} className="py-16">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Mockup Side */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex justify-center ${
            reverse ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <MockupComponent />
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={reverse ? 'lg:order-1' : 'lg:order-2'}
        >
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-4">
              <span className="text-sm font-medium text-accent-primary">{subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {title}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">{description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
