# Start Right - Marketing Website Specification

> A high-conversion, premium marketing website for the AI-powered Microsoft Teams productivity assistant.

---

## The Vision

**Start Right** is the ultimate productivity companion for knowledge workers. For V1, the entire user experience is delivered where work already happens: **Microsoft Teams**.

This website is not a dashboard; it is a **high-impact marketing destination** designed to sell the "Start Right" lifestyle. It will feature a professional demo video, showcase core AI integrations, and explain how the application eliminates context-switching friction via Teams.

**Design Philosophy:** Apple-level polish meets sleek SaaS aesthetics. Think Bento-grid layouts, vibrant micro-animations, glassmorphism, and a dark-mode-first aesthetic that screams "future of work."

---

## Tech Stack

```
Framework:     React 18+ with Vite
Styling:       Tailwind CSS (Vanilla CSS for custom components)
Animation:     Framer Motion + GSAP (for scroll-triggered reveals)
Components:    shadcn/ui (customized for premium feel)
Fonts:         Inter (Body) + Outfit (Headers)
Icons:         Lucide React
```

---

## Core Design System

### Color Palette

```css
/* Deep Space Theme */
--bg-primary:      #050505;      /* True black for depth */
--bg-secondary:    #0f0f12;      /* Section backgrounds */
--bg-glass:        rgba(255, 255, 255, 0.03); 

--accent-primary:  #6366f1;      /* Indigo Glow */
--accent-secondary:#a855f7;      /* Purple Pulse */
--accent-teams:    #6264A7;      /* Teams Brand Color */

--text-primary:    #FFFFFF;
--text-secondary:  #94a3b8;      /* Slate 400 */
```

### Motion Design
- **Hero Reveal**: Staggered text entry with blur-in effect.
- **Scroll Hijack (Subtle)**: Sections fade and slide into view as the user scrolls.
- **Magnetic Buttons**: CTAs that attract the cursor slightly.
- **Glass Hover**: Cards that glow and tilt (3D effect) on hover.

---

## Page Architecture (Single Page / Multi-Section)

### 1. Hero Section: The "Wow" Moment
- **Headline**: "Start Every Meeting, Every Day, the Right Way."
- **Sub-headline**: "Your AI productivity partner, now living in Microsoft Teams. No new dashboards. No context switching. Just intelligence where you work."
- **Primary CTA**: "Get Early Access" (High-contrast button).
- **Secondary CTA**: "Watch the Demo" (Glass button).
- **Video Placeholder**: A large, ultra-wide video player frame for the upcoming marketing/demo material.

### 2. The Teams Experience (Feature Showcase)
*Showcasing how the app lives in Teams chat.*

- **Daily Priorities**: "Wake up to your top 3. No more hunting through JIRA or Outlook."
- **Meeting Intel**: "60-second briefings before every call. Talking points, recent emails, and stakeholder bios delivered to your chat."
- **Ask Anything**: "The collective knowledge of your organization, one message away."
- **Urgent Awareness**: "Filter the noise. Only hear about the emails, PRs, and tickets that actually need your attention."

### 3. Integration Grid (The "Powerhouse")
*A Bento-grid style layout showing logos and brief descriptions of integrations.*

- **Microsoft 365**: Outlook, Calendar, Teams.
- **Atlassian**: JIRA, Confluence.
- **GitHub**: PR reviews and Issue tracking.
- **GraphRAG**: The cerebellum of the system—connecting the dots.

### 4. How it Works (Three Steps)
1. **Connect**: Securely link your work accounts via OAuth.
2. **Sync**: Our GraphRAG engine builds your personal knowledge graph.
3. **Thrive**: Receive intelligent briefings and chats directly in Teams.

### 5. Final CTA / Waitlist
- A sleek, centered section with an email capture form.
- "Join 500+ professionals starting their day right."

---

## Key UI Components for Marketing

### 1. The Demo Video Player
- Customized video controls.
- "Ambient Glow" effect where the background colors bleed out from the video edge.

### 2. Teams Chat Mockup
- An interactive, animated mockup of a Microsoft Teams chat window.
- Shows a "message" from Start Right popping up with a daily briefing.
- Uses Framer Motion for realistic "typing" and "message entry" animations.

### 3. Integration Orbit
- An animated visualization of logos (JIRA, GitHub, Outlook) orbiting the Start Right logo.

---

## V1 Roadmap (For Reference)
> [!NOTE]
> V1 is focused exclusively on the Microsoft Teams integration. Future versions will include the Command Center Web App.

- **Phase 1**: Marketing Site Launch + Demo Video.
- **Phase 2**: Waitlist & Early Access Program.
- **Phase 3**: Full Teams Bot Integration.

---

## Performance Targets
- **LCP**: Under 1.2s
- **Animations**: 60fps locked.
- **Responsiveness**: Pixel-perfect on iPhone, iPad, and Desktop.
