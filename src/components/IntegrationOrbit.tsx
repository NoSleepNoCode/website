import { motion } from "framer-motion"
import { LayoutGrid } from "lucide-react"
import { SiGithub, SiAtlassian, SiSlack, SiFigma } from "react-icons/si"
import { BsMicrosoftTeams } from "react-icons/bs"
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

const ICONS = [
    { icon: SiGithub, color: "#181717", label: "GitHub" },
    { icon: PiMicrosoftOutlookLogoFill, color: "#0078D4", label: "Outlook" },
    { icon: BsMicrosoftTeams, color: "#6264A7", label: "Teams" },
    { icon: BsMicrosoftTeams, color: "#00A4EF", label: "Microsoft 365" },
    { icon: SiAtlassian, color: "#0052CC", label: "Atlassian" },
    { icon: SiSlack, color: "#4A154B", label: "Slack" },
    { icon: SiFigma, color: "#F24E1E", label: "Figma" },
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
                        "0 0 20px rgba(99, 102, 241, 0.3)",
                        "0 0 50px rgba(99, 102, 241, 0.6)",
                        "0 0 20px rgba(99, 102, 241, 0.3)"
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-28 h-28 rounded-2xl bg-accent-primary flex items-center justify-center z-10 relative shadow-2xl"
            >
                <LayoutGrid className="w-14 h-14 text-white" />
                <div className="absolute inset-0 rounded-2xl bg-accent-primary blur-3xl opacity-60 -z-10" />
            </motion.div>

            {/* Orbiting Paths - More Visible */}
            <div className="absolute w-[340px] h-[340px] rounded-full border-2 border-white/10 shadow-lg" />
            <div className="absolute w-[220px] h-[220px] rounded-full border-2 border-white/10 shadow-lg" />

            {/* Orbiting Icons */}
            {ICONS.map((item, i) => {
                const radius = i % 2 === 0 ? 170 : 110
                const duration = i % 2 === 0 ? 25 : 20

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
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                className="w-14 h-14 rounded-xl glass border-2 border-white/20 flex items-center justify-center p-2.5 shadow-2xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all group"
                            >
                                <item.icon className="w-full h-full text-white group-hover:text-white/100 transition-colors" style={{ color: item.color }} />
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs text-white/80 whitespace-nowrap bg-black/60 px-2 py-1 rounded">
                                        {item.label}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )
            })}

            {/* Connecting Lines (Simulated with opacity) */}
            <div className="absolute inset-0 bg-radial-gradient from-accent-primary/10 to-transparent pointer-events-none" />
        </div>
    )
}
