import { BaseTeamsMockup } from './BaseTeamsMockup'
import {
  JiraIcon,
  ConfluenceIcon,
  GitHubIconCustom,
  SharePointIcon,
} from '../ui/CustomIcons'
import { Github } from 'lucide-react'

const ONBOARDING_MESSAGES = [
  {
    id: 1,
    sender: 'New Employee',
    type: 'user',
    content: "I just joined. Can you help me understand what projects I'll be working on?",
  },
  {
    id: 2,
    sender: 'Start Right',
    type: 'ai',
    content:
      'Welcome aboard! Based on your team assignment, here are your primary projects:',
    items: [
      {
        id: 'p1',
        text: 'Project Aurora - Mobile App Redesign',
        icon: JiraIcon,
        color: '#0052CC',
        badge: 'Jira',
      },
      {
        id: 'p2',
        text: 'API Gateway Migration',
        icon: ConfluenceIcon,
        color: '#0052CC',
        badge: 'Confluence',
      },
      {
        id: 'p3',
        text: 'Customer Portal v2.0',
        icon: GitHubIconCustom,
        color: '#24292e',
        badge: 'GitHub',
      },
    ],
  },
  {
    id: 3,
    sender: 'Start Right',
    type: 'ai',
    content: 'I\'ve pulled together onboarding resources for you:',
    files: [
      { name: 'Team Structure & Contacts', type: 'sharepoint', icon: SharePointIcon },
      { name: 'Sprint Planning Guide', type: 'confluence', icon: ConfluenceIcon },
      { name: 'Codebase Setup Instructions', type: 'github', icon: Github },
      { name: 'Your First Sprint Tasks', type: 'jira', icon: JiraIcon },
    ],
  },
  {
    id: 4,
    sender: 'New Employee',
    type: 'user',
    content: 'Who should I reach out to about the API Gateway project?',
  },
  {
    id: 5,
    sender: 'Start Right',
    type: 'ai',
    content: `For the API Gateway Migration:
• Tech Lead: Sarah Chen (sarah@company.com)
• Product Owner: Marcus Rodriguez

Recent activity: Sarah mentioned in yesterday's standup that they need help with authentication modules.

Based on the knowledge graph, Sarah is active on Slack channel #api-team. She typically responds fastest in the mornings.`,
  },
  {
    id: 6,
    sender: 'New Employee',
    type: 'user',
    content: 'What\'s the first task I should tackle?',
  },
  {
    id: 7,
    sender: 'Start Right',
    type: 'ai',
    content: 'Great question! I found your assignment:',
    items: [
      {
        id: 't1',
        text: 'JIRA-247: Set up local development environment',
        icon: JiraIcon,
        color: '#0052CC',
        subtext: 'Priority: High • Estimated: 4h',
      },
    ],
  },
  {
    id: 8,
    sender: 'Start Right',
    type: 'ai',
    content: `This ticket includes:
• Docker setup guide (linked from Confluence)
• Database seed scripts (GitHub repo)
• Sarah\'s walkthrough video (Teams recording)

Would you like me to schedule a pairing session with Sarah for tomorrow morning?`,
  },
]

export function OnboardingMockup() {
  return <BaseTeamsMockup messages={ONBOARDING_MESSAGES} height="600px" />
}
