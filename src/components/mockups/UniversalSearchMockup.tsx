import { BaseTeamsMockup } from './BaseTeamsMockup'
import {
  ConfluenceIcon,
  SharePointIcon,
  GitHubIconCustom,
  JiraIcon,
} from '../ui/CustomIcons'

const UNIVERSAL_SEARCH_MESSAGES = [
  {
    id: 1,
    sender: 'Engineer',
    type: 'user',
    content:
      "I'm looking for API documentation. Where are the latest specs for the payment gateway?",
  },
  {
    id: 2,
    sender: 'Start Right',
    type: 'ai',
    content:
      'I found payment gateway documentation across your connected platforms:',
    items: [
      {
        id: 'd1',
        text: 'Payment Gateway API v2.0',
        icon: ConfluenceIcon,
        color: '#0052CC',
        subtext: 'Confluence • Updated yesterday • 42 pages',
        status: 'green' as const,
      },
      {
        id: 'd2',
        text: 'API Contract Specification',
        icon: SharePointIcon,
        color: '#03787C',
        subtext: 'SharePoint • Legal approved • Jan 15',
        status: 'green' as const,
      },
      {
        id: 'd3',
        text: 'payment-gateway.ts',
        icon: GitHubIconCustom,
        color: '#24292e',
        subtext: 'GitHub • main branch • Last commit 2h ago',
        status: 'yellow' as const,
      },
    ],
  },
  {
    id: 3,
    sender: 'Engineer',
    type: 'user',
    content:
      'What about Q3 planning docs? I need the roadmap and strategy documents.',
  },
  {
    id: 4,
    sender: 'Start Right',
    type: 'ai',
    content:
      'Here are the Q3 planning documents from multiple sources:',
    files: [
      {
        name: 'Q3 Product Roadmap',
        type: 'confluence',
        icon: ConfluenceIcon,
        updated: 'Updated 3 days ago by Sarah Chen',
      },
      {
        name: 'Q3 Budget & Allocations',
        type: 'sharepoint',
        icon: SharePointIcon,
        updated: 'Updated last week by Finance',
      },
      {
        name: 'Q3 OKRs & Goals',
        type: 'jira',
        icon: JiraIcon,
        updated: 'Updated 5 days ago by Marcus',
      },
    ],
  },
  {
    id: 5,
    sender: 'Start Right',
    type: 'ai',
    content: `Key highlights from Q3 Roadmap:
• Checkout flow redesign (Project Aurora)
• API Gateway Migration moving to production
• Customer Portal v2.0 beta launch

All docs are linked in the #q3-planning Slack channel.`,
  },
  {
    id: 6,
    sender: 'Engineer',
    type: 'user',
    content:
      'Search for anything related to authentication requirements',
  },
  {
    id: 7,
    sender: 'Start Right',
    type: 'ai',
    content:
      'Found 12 results across your integrated tools for "authentication requirements":',
    items: [
      {
        id: 'a1',
        text: 'OAuth 2.0 Implementation Guide',
        icon: ConfluenceIcon,
        color: '#0052CC',
        subtext: 'Confluence • Tech team wiki • 15 min read',
      },
      {
        id: 'a2',
        text: 'AUTH-342: SSO Integration',
        icon: JiraIcon,
        color: '#0052CC',
        subtext: 'Jira • In Progress • Assigned to Alex',
      },
      {
        id: 'a3',
        text: 'auth-service README',
        icon: GitHubIconCustom,
        color: '#24292e',
        subtext: 'GitHub • 156 lines • Updated today',
      },
    ],
  },
  {
    id: 8,
    sender: 'Start Right',
    type: 'ai',
    content:
      'Would you like me to create a summary of authentication requirements across all these documents?',
  },
]

export function UniversalSearchMockup() {
  return <BaseTeamsMockup messages={UNIVERSAL_SEARCH_MESSAGES} height="600px" />
}
