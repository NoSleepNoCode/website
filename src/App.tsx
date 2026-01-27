import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { IntegrationGrid } from './components/IntegrationGrid'
import { HowItWorks } from './components/HowItWorks'
import { Waitlist } from './components/Waitlist'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background-primary selection:bg-accent-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <IntegrationGrid />
        <HowItWorks />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}

export default App
