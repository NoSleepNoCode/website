import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { LayoutGrid, User, Send, Bell, Github, ExternalLink, Calendar } from "lucide-react"

// Custom SVG Icons for logos that are not in Lucide or simpler to define here
const SharePointIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12.5 4.5L1.5 6.5V17.5L12.5 19.5V4.5Z" fill="#0078D4" />
        <path d="M22.5 6.5L12.5 4.5V19.5L22.5 17.5V6.5Z" fill="#00A1F1" />
        <circle cx="12.5" cy="12" r="3" fill="white" />
    </svg>
)

const JiraIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M11.53 2c0 2.39 1.94 4.33 4.33 4.33h1.81V2h-6.14zM2.01 13.06c0 2.39 1.94 4.33 4.33 4.33h1.81v-4.33H2.01zM11.53 13.06c0 2.39 1.94 4.33 4.33 4.33h1.81v-4.33h-6.14z" fill="#0052CC" />
    </svg>
)

const ConfluenceIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12 2L2 12l10 10 10-10L12 2zm0 15a5 5 0 110-10 5 5 0 010 10z" fill="#172B4D" />
    </svg>
)

const MESSAGES = [
    { id: 1, sender: "Start Right", content: "Good morning! Here are your top 3 priorities for today.", type: "ai" },
    {
        id: 2,
        sender: "Start Right",
        type: "ai",
        items: [
            { id: "p1", text: "Review GitHub PR #42", icon: Github, link: "https://github.com", color: "#2ea44f" },
            { id: "p2", text: "Prep for Stakeholder Sync (11 AM)", icon: Calendar, link: "https://calendar.google.com", color: "#4285F4" },
            { id: "p3", text: "Follow up with Jira-102", icon: JiraIcon, link: "https://atlassian.com", color: "#0052CC" }
        ]
    },
    {
        id: 3,
        sender: "Start Right",
        content: "I've gathered all the relevant documents for your meeting:",
        type: "ai",
        files: [
            { name: "Q1 Roadmap", type: "sharepoint", icon: SharePointIcon },
            { name: "Jira-102", type: "jira", icon: JiraIcon },
            { name: "Product Spec", type: "confluence", icon: ConfluenceIcon },
            { name: "PR #42", type: "github", icon: Github }
        ]
    },
    { id: 4, sender: "User", content: "Thanks! What's the context for the Stakeholder Sync?", type: "user" },
    { id: 5, sender: "Start Right", content: "The meeting is regarding the Q1 roadmap. Recent emails from Sarah suggest focusing on the API integration timeline.", type: "ai" },
]

export function TeamsMockup() {
    const [visibleMessages, setVisibleMessages] = useState<number[]>([])
    const isStarted = useRef(false)

    useEffect(() => {
        if (isStarted.current) return
        isStarted.current = true

        const sequence = async () => {
            for (let i = 0; i < MESSAGES.length; i++) {
                await new Promise(resolve => setTimeout(resolve, i === 0 ? 500 : 2000))
                setVisibleMessages(prev => {
                    if (prev.includes(i)) return prev
                    return [...prev, i]
                })
            }
        }
        sequence()
    }, [])

    return (
        <div className="w-full max-w-2xl glass-card border border-white/10 overflow-hidden flex flex-col h-[500px] shadow-2xl">
            {/* Teams Header */}
            <div className="bg-[#6264A7] p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <LayoutGrid className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white">Start Right Bot</span>
                </div>
                <div className="flex gap-3">
                    <Bell className="w-4 h-4 text-white/70" />
                    <User className="w-4 h-4 text-white/70" />
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6 bg-[#0B0B0E]">
                <AnimatePresence>
                    {visibleMessages.map((idx) => {
                        const msg = MESSAGES[idx]
                        const isAI = msg.type === "ai"
                        return (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, x: isAI ? -20 : 20, y: 10 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                className={`flex gap-3 ${isAI ? "flex-row" : "flex-row-reverse"}`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isAI ? "bg-accent-primary" : "bg-zinc-700"}`}>
                                    {isAI ? <LayoutGrid className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
                                </div>
                                <div className={`flex flex-col gap-1 max-w-[80%] ${isAI ? "items-start" : "items-end"}`}>
                                    <span className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">
                                        {msg.sender}
                                    </span>
                                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${isAI ? "bg-white/5 border border-white/5 text-white" : "bg-accent-primary text-white"}`}>
                                        {msg.content && msg.content.split('\n').map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}

                                        {msg.items && (
                                            <div className="flex flex-col gap-2 mt-1">
                                                {msg.items.map((item: any) => (
                                                    <motion.a
                                                        key={item.id}
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition-colors group"
                                                    >
                                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                                                            <item.icon className="w-4 h-4" style={{ color: item.color }} />
                                                        </div>
                                                        <span className="text-sm font-medium flex-1">{item.text}</span>
                                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40 transition-opacity" />
                                                    </motion.a>
                                                ))}
                                            </div>
                                        )}

                                        {msg.files && (
                                            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar">
                                                {msg.files.map((file: any, i: number) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.3 + i * 0.1 }}
                                                        className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl cursor-pointer transition-colors whitespace-nowrap group shrink-0"
                                                    >
                                                        <file.icon className="w-4 h-4" />
                                                        <span className="text-[11px] font-medium">{file.name}</span>
                                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-white/2">
                <div className="bg-zinc-900/50 rounded-lg p-3 flex items-center justify-between border border-white/5">
                    <span className="text-sm text-text-secondary">Type a message...</span>
                    <Send className="w-4 h-4 text-accent-primary" />
                </div>
            </div>
        </div>
    )
}
