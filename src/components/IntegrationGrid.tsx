import { motion } from "framer-motion"
import { IntegrationOrbit } from "./IntegrationOrbit"
import { Github, Mail, MessageSquare, LayoutGrid, Layers, Slack } from "lucide-react"

const BENTO_ITEMS = [
    {
        title: "Microsoft 365",
        desc: "Seamless integration with Outlook, Calendar, and Teams for instant coordination.",
        icon: MessageSquare,
        size: "large",
        color: "from-blue-500/20 to-indigo-500/20"
    },
    {
        title: "GitHub",
        desc: "Monitor PRs and Issues.",
        icon: Github,
        size: "small",
        color: "from-zinc-500/20 to-zinc-800/20"
    },
    {
        title: "Atlassian",
        desc: "Jira & Confluence.",
        icon: Layers,
        size: "small",
        color: "from-blue-600/20 to-cyan-500/20"
    },
    {
        title: "GraphRAG Engine",
        desc: "The cerebellum of the system—connecting the dots across your entire organization's knowledge base.",
        icon: LayoutGrid,
        size: "medium",
        color: "from-purple-500/20 to-accent-primary/20 text-white"
    },
    {
        title: "Outlook & Exchange",
        desc: "Email briefs and calendar management.",
        icon: Mail,
        size: "small",
        color: "from-red-500/20 to-orange-500/20"
    },
    {
        title: "Slack",
        desc: "Instant notifications and team coordination.",
        icon: Slack,
        size: "small",
        color: "from-purple-600/20 to-pink-500/20"
    }
]

export function IntegrationGrid() {
    return (
        <section id="integrations" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        The <span className="text-gradient">Powerhouse</span> Grid.
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Everything you need, connected through our advanced GraphRAG intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {/* Large Item: Orbit Animation */}
                    <div className="md:col-span-2 lg:col-span-2 row-span-2 glass-card border border-white/5 relative overflow-hidden flex flex-col justify-between p-0">
                        <div className="p-8 pb-0">
                            <h3 className="text-2xl font-bold mb-2">Connected Ecosystem</h3>
                            <p className="text-text-secondary text-sm">Real-time sync across your essential work tools.</p>
                        </div>
                        <IntegrationOrbit />
                    </div>

                    {/* Bento Items */}
                    {BENTO_ITEMS.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={cn(
                                "glass-card border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all",
                                item.size === "large" ? "md:col-span-2 row-span-2" :
                                    item.size === "medium" ? "md:col-span-2 row-span-1" : "col-span-1"
                            )}
                        >
                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 -z-10", item.color)} />
                            <div className="p-6 h-full flex flex-col">
                                <div className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center mb-4 text-white">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-text-secondary text-xs leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ")
}
