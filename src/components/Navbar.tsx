import { motion } from "framer-motion"
import { Button } from "./ui/Button"
import logo from "../assets/IMG_0905.jpg"

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
        >
            <nav className="glass rounded-full px-8 py-3 flex items-center gap-12 max-w-7xl w-full justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                        <img src={logo} alt="Start Right Logo" className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <span className="text-xl font-display font-bold tracking-tight">
                        Start <span className="text-accent-primary">Right</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {["Features", "Integrations", "How it Works"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                            className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {/* <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                        Log in
                    </Button> */}
                    <Button magnetic size="sm">
                        Join Waitlist
                    </Button>
                </div>
            </nav>
        </motion.header>
    )
}
