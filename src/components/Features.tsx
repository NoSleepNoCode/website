import { motion } from "framer-motion"
import { TeamsMockup } from "./TeamsMockup"
import { Zap, Calendar, Search, ShieldAlert } from "lucide-react"

const FEATURES = [
    {
        icon: Zap,
        title: "Daily Priorities",
        desc: "Wake up to your top 3. No more hunting through JIRA or Outlook."
    },
    {
        icon: Calendar,
        title: "Meeting Intel",
        desc: "60-second briefings before every call. Talking points and stakeholder bios."
    },
    {
        icon: Search,
        title: "Ask Anything",
        desc: "The collective knowledge of your organization, one message away."
    },
    {
        icon: ShieldAlert,
        title: "Urgent Awareness",
        desc: "Filter the noise. Only hear about the things that actually need your attention."
    }
]

export function Features() {
    return (
        <section id="features" className="pt-16 pb-24 px-6 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                    <TeamsMockup />
                </div>

                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Experience Intelligence <br />
                            <span className="text-gradient">Where You Work.</span>
                        </h2>
                        <p className="text-text-secondary text-lg mb-12 max-w-xl">
                            Start Right lives inside your Microsoft Teams and Slack chat. It connects your tools, filters your noise, and prepares you for your day before you even open your calendar.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {FEATURES.map((feature, i) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center mb-4 transition-colors group-hover:border-accent-primary group-hover:bg-accent-primary/10">
                                        <feature.icon className="w-6 h-6 text-accent-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
