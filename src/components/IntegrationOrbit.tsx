import { motion } from "framer-motion"
import { LayoutGrid, Github, Mail, MessageSquare, Database, Share2, Slack } from "lucide-react"

const ICONS = [
    { icon: Github, color: "#24292e", label: "GitHub" },
    { icon: Mail, color: "#EA4335", label: "Outlook" },
    { icon: MessageSquare, color: "#6264A7", label: "Teams" },
    { icon: Database, color: "#00A4EF", label: "Office 365" },
    { icon: Share2, color: "#0078D4", label: "SharePoint" },
    { icon: Slack, color: "#4A154B", label: "Slack" },
    { icon: LayoutGrid, color: "#6366f1", label: "Start Right" },
]

export function IntegrationOrbit() {
    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
            {/* Central Logo */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                        "0 0 20px rgba(99, 102, 241, 0.2)",
                        "0 0 40px rgba(99, 102, 241, 0.4)",
                        "0 0 20px rgba(99, 102, 241, 0.2)"
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-24 h-24 rounded-2xl bg-accent-primary flex items-center justify-center z-10 relative"
            >
                <LayoutGrid className="w-12 h-12 text-white" />
                <div className="absolute inset-0 rounded-2xl bg-accent-primary blur-2xl opacity-50 -z-10" />
            </motion.div>

            {/* Orbiting Paths */}
            <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5" />
            <div className="absolute w-[200px] h-[200px] rounded-full border border-white/5" />

            {/* Orbiting Icons */}
            {ICONS.map((item, i) => {
                const radius = i % 2 === 0 ? 150 : 100
                const duration = i % 2 === 0 ? 20 : 15

                return (
                    <motion.div
                        key={item.label}
                        animate={{
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute"
                        style={{ width: radius * 2, height: radius * 2 }}
                    >
                        <motion.div
                            animate={{ rotate: [0, -360] }}
                            transition={{ duration, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center p-2 shadow-xl">
                                <item.icon className="w-full h-full text-white/80" />
                            </div>
                        </motion.div>
                    </motion.div>
                )
            })}

            {/* Connecting Lines (Simulated with opacity) */}
            <div className="absolute inset-0 bg-radial-gradient from-accent-primary/5 to-transparent pointer-events-none" />
        </div>
    )
}
