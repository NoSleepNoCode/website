import { BaseTeamsMockup } from './BaseTeamsMockup'
import { FigmaIcon, JiraIcon } from '../ui/CustomIcons'
import { Github } from 'lucide-react'

const COLLABORATION_MESSAGES = [
  {
    id: 1,
    sender: 'Product Manager',
    type: 'user',
    content:
      'I need to coordinate with the design team for the checkout flow. Who\'s involved?',
  },
  {
    id: 2,
    sender: 'Start Right',
    type: 'ai',
    content: 'For the checkout flow redesign, here\'s your collaboration map:',
    stakeholders: [
      {
        name: 'Alex Kim',
        role: 'Design Lead',
        contact: '5 related Figma files',
      },
      {
        name: 'Maya Patel',
        role: 'UX Research',
        contact: 'User testing results from last week',
      },
      {
        name: 'Your Team',
        role: 'Frontend',
        contact: '3 open PRs',
      },
      {
        name: 'Jordan Lee',
        role: 'Product',
        contact: 'Owns the roadmap',
      },
    ],
  },
  {
    id: 3,
    sender: 'Start Right',
    type: 'ai',
    content: `Recent context from the knowledge graph:
• Alex shared mockups in #design-reviews 2 days ago
• Maya\'s research doc flagged checkout abandonment issues
• Jordan approved the timeline in Monday\'s stakeholder meeting

Would you like me to schedule a sync with all of them?`,
  },
  {
    id: 4,
    sender: 'Product Manager',
    type: 'user',
    content: 'What are the main blockers right now?',
  },
  {
    id: 5,
    sender: 'Start Right',
    type: 'ai',
    content: 'I found 2 blockers across the teams:',
    items: [
      {
        id: 'b1',
        text: 'Payment gateway API contract',
        icon: Github,
        color: '#F59E0B',
        subtext: 'Blocked: PR #423 • Waiting on backend team since Jan 20',
        status: 'yellow' as const,
      },
      {
        id: 'b2',
        text: 'Design system component library update',
        icon: JiraIcon,
        color: '#0052CC',
        subtext: 'JIRA-892 • In review by Alex Kim • Est: This Friday',
        status: 'green' as const,
      },
    ],
  },
  {
    id: 6,
    sender: 'Start Right',
    type: 'ai',
    content: `Recent Slack message from Alex: "Button variants are ready for review in Figma"`,
  },
  {
    id: 7,
    sender: 'Product Manager',
    type: 'user',
    content: 'Get me the latest design mockups',
  },
  {
    id: 8,
    sender: 'Start Right',
    type: 'ai',
    content: 'Retrieved from Figma integration:',
    files: [
      {
        name: 'Checkout Flow v3.2',
        type: 'figma',
        icon: FigmaIcon,
        updated: 'Updated 2 days ago by Alex',
      },
      {
        name: 'Mobile Responsive Specs',
        type: 'figma',
        icon: FigmaIcon,
        updated: 'Updated yesterday',
      },
      {
        name: 'Error States & Validation',
        type: 'figma',
        icon: FigmaIcon,
        updated: 'Updated last week',
      },
    ],
  },
  {
    id: 9,
    sender: 'Start Right',
    type: 'ai',
    content:
      'All files are linked in the epic JIRA-850. Alex requested feedback by end of week in the #design-reviews channel.',
  },
]

export function CollaborationMockup() {
  return <BaseTeamsMockup messages={COLLABORATION_MESSAGES} height="600px" />
}
