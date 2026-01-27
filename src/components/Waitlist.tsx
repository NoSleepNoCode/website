import { motion } from "framer-motion"
import { Button } from "./ui/Button"
import { Send, Users } from "lucide-react"
import { useState } from "react"

export function Waitlist() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Signed up with: ${email}`)
        setEmail("")
    }

    return (
        <section id="waitlist" className="py-24 px-6">
            <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 relative overflow-hidden border border-white/10 glow-purple">
                {/* Background decoration */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-secondary/10 blur-[80px] rounded-full" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-primary/10 blur-[80px] rounded-full" />

                <div className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 mb-8"
                    >
                        <Users className="w-4 h-4 text-accent-secondary" />
                        <span className="text-xs font-bold text-accent-secondary uppercase tracking-widest">Join 500+ Professionals</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Start Your Day <span className="text-gradient">the Right Way.</span>
                    </h2>
                    <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
                        Ready to reclaim your time? Join our early access program and be the first to experience the future of productivity.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your work email"
                            required
                            className="flex-1 h-14 bg-white/5 border border-white/10 rounded-full px-8 text-white focus:outline-none focus:border-accent-primary transition-colors text-lg"
                        />
                        <Button magnetic size="lg" className="sm:w-auto h-14">
                            Join Waitlist
                            <Send className="w-4 h-4 ml-2" />
                        </Button>
                    </form>

                    <p className="text-xs text-text-secondary mt-8 opacity-50">
                        By joining, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>
        </section>
    )
}
