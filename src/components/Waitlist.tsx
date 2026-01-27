import { motion } from "framer-motion"
import { Button } from "./ui/Button"
import { Send, Users } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export function Waitlist() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [useCase, setUseCase] = useState("")
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            await emailjs.send(
                "service_9rd3ibm",
                "template_cl2hhul",
                {
                    from_name: name,
                    from_email: email,
                    use_case: useCase,
                },
                "YI5N-21WV7XfbSNtV7pUk"
            )

            setStatus('success')
            setEmail("")
            setName("")
            setUseCase("")
        } catch (error) {
            console.error("Form submission error:", error)
            setStatus('error')
        }
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

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 mb-8"
                        >
                            <h3 className="text-2xl font-bold text-green-400 mb-2">You're on the list!</h3>
                            <p className="text-text-secondary">Thanks for joining our waitlist, {name.split(' ')[0]}. We'll be in touch soon.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Full Name"
                                required
                                className="w-full h-14 bg-white/5 border border-white/10 rounded-full px-8 text-white focus:outline-none focus:border-accent-primary transition-colors text-lg"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Work Email Address"
                                required
                                className="w-full h-14 bg-white/5 border border-white/10 rounded-full px-8 text-white focus:outline-none focus:border-accent-primary transition-colors text-lg"
                            />
                            <textarea
                                value={useCase}
                                onChange={(e) => setUseCase(e.target.value)}
                                placeholder="How do you plan to use Start Right? (e.g. Personal productivity, Team meetings)"
                                required
                                className="w-full min-h-[120px] bg-white/5 border border-white/10 rounded-3xl px-8 py-4 text-white focus:outline-none focus:border-accent-primary transition-colors text-lg resize-none"
                            />
                            <Button
                                magnetic
                                size="lg"
                                className="h-14 w-full"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                                <Send className="w-4 h-4 ml-2" />
                            </Button>
                            {status === 'error' && (
                                <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again or email us directly.</p>
                            )}
                        </form>
                    )}

                    <p className="text-xs text-text-secondary mt-8 opacity-50">
                        By joining, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>
        </section>
    )
}
