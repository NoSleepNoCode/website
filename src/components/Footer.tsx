import logo from "../assets/IMG_0905.jpg"

export function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img src={logo} alt="Start Right Logo" className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <span className="text-xl font-display font-bold tracking-tight">
                        Start <span className="text-accent-primary">Right</span>
                    </span>
                </div>

                <div className="text-sm text-text-secondary">
                    © {new Date().getFullYear()} Start Right AI. All rights reserved.
                </div>

                <div className="flex gap-8">
                    {["Privacy", "Terms", "Contact"].map((item) => (
                        <a key={item} href="#" className="text-sm text-text-secondary hover:text-white transition-colors">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
