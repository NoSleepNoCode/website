import { motion } from "framer-motion"
import { Link, Zap, CheckCircle } from "lucide-react"

const STEPS = [
    {
        icon: Link,
        title: "Connect",
        desc: "Securely link your work accounts via OAuth. We support Microsoft 365, Jira, and GitHub."
    },
    {
        icon: Zap,
        title: "Sync",
        desc: "Our Proprietary GraphRAG engine builds your personal knowledge graph, indexing your relationships and priorities."
    },
    {
        icon: CheckCircle,
        title: "Thrive",
        desc: "Receive intelligent briefings and chats directly in Teams. Start every day with clarity."
    }
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-primary/5 blur-[100px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Simple to Setup. <br />
                        <span className="text-gradient">Impossible to Outgrow.</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {STEPS.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110">
                                    <div className="absolute inset-0 bg-accent-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                    <step.icon className="w-8 h-8 text-accent-primary relative z-10" />

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent-secondary text-[10px] font-bold flex items-center justify-center text-white border border-background-primary">
                                        {i + 1}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-text-secondary text-base leading-relaxed max-w-xs">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
