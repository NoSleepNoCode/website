import { motion } from "framer-motion"
import { Button } from "./ui/Button"
// import { Play } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-12 px-6 overflow-hidden">
            {/* Background Decorative Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-accent-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accent-secondary/5 blur-[80px] rounded-full -z-10" />

            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                        v1.0 is now live for Teams
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
                >
                    Start Every Meeting, <br />
                    Every Day, <span className="text-gradient">the Right Way.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12"
                >
                    Your AI productivity partner, now living in Microsoft Teams.
                    No new dashboards. No context switching.
                    Just intelligence where you work.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-2 mb-12"
                >
                    <Button
                        magnetic
                        size="lg"
                        className="w-full sm:w-auto"
                        onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get Early Access
                    </Button>
                    {/* <Button variant="glass" size="lg" className="w-full sm:w-auto gap-2">
                        <Play className="w-4 h-4 fill-current" />
                        Watch the Demo
                    </Button> */}
                </motion.div>

                {/* Video Player Placeholder with Ambient Glow */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden glass border border-white/10 glow-indigo"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 rounded-full glass flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group">
                                <Play className="w-8 h-8 text-white fill-white group-hover:text-accent-primary group-hover:fill-accent-primary transition-colors ml-1" />
                            </div>
                            <span className="text-sm font-medium text-text-secondary uppercase tracking-[0.2em]">60s Briefing Overview</span>
                        </div>
                    </div>

                    <div className="absolute -inset-[2px] bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-primary/20 bg-[length:200%_auto] animate-gradient-xy -z-10 blur-xl" />
                </motion.div> */}
            </div>
        </section>
    )
}
