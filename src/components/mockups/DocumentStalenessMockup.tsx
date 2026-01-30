import { BaseTeamsMockup } from './BaseTeamsMockup'
import { ConfluenceIcon, SharePointIcon } from '../ui/CustomIcons'

const STALENESS_MESSAGES = [
  {
    id: 1,
    sender: 'Engineering Lead',
    type: 'user',
    content: 'Are any of our technical docs outdated? I want to do a cleanup sprint.',
  },
  {
    id: 2,
    sender: 'Start Right',
    type: 'ai',
    content: 'I\'ve analyzed 247 documents across your knowledge base. Here\'s what needs attention:',
  },
  {
    id: 3,
    sender: 'Start Right',
    type: 'ai',
    content: '🚨 Critical: 12 documents are significantly outdated',
    items: [
      {
        id: 'd1',
        text: 'API Authentication Guide',
        icon: ConfluenceIcon,
        color: '#0052CC',
        subtext: 'Last updated: 8 months ago • References deprecated OAuth 1.0',
        badge: 'Critical',
      },
      {
        id: 'd2',
        text: 'Deployment Runbook',
        icon: ConfluenceIcon,
        color: '#0052CC',
        subtext: 'Last updated: 6 months ago • Jenkins steps no longer valid',
        badge: 'Critical',
      },
      {
        id: 'd3',
        text: 'Mobile App Architecture',
        icon: ConfluenceIcon,
        color: '#0052CC',
        subtext: 'Last updated: 5 months ago • Missing microservices update',
        badge: 'High',
      },
    ],
  },
  {
    id: 4,
    sender: 'Start Right',
    type: 'ai',
    content: 'Based on recent changes detected in your systems:',
  },
  {
    id: 5,
    sender: 'Start Right',
    type: 'ai',
    content: `Detected Changes Impacting Documentation:

• GitHub: 47 commits to auth-service since doc was last updated
• Jira: PROJ-892 migrated authentication to OAuth 2.0 (completed 2 months ago)
• Slack: 23 messages in #dev-team about deployment pipeline changes
• CI/CD: Migrated from Jenkins to GitHub Actions (5 months ago)`,
  },
  {
    id: 6,
    sender: 'Engineering Lead',
    type: 'user',
    content: 'Can you identify who should update these docs?',
  },
  {
    id: 7,
    sender: 'Start Right',
    type: 'ai',
    content: 'Recommended document owners based on activity patterns:',
    stakeholders: [
      {
        name: 'Sarah Chen',
        role: 'Senior Engineer',
        position: 'API Auth Expert',
        items: ['Led OAuth 2.0 migration', 'Last edited auth code 3 days ago', 'Active in #security channel'],
      },
      {
        name: 'Marcus Rodriguez',
        role: 'DevOps Lead',
        position: 'Deployment Owner',
        items: ['Owns CI/CD pipeline', 'Migrated to GitHub Actions', 'Created new runbook draft'],
      },
      {
        name: 'Alex Kim',
        role: 'Mobile Architect',
        position: 'Architecture Lead',
        items: ['Designed microservices split', 'Reviewed in architecture meeting', 'Mentioned in RFC-1045'],
      },
    ],
  },
  {
    id: 8,
    sender: 'Start Right',
    type: 'ai',
    content: 'Would you like me to create a Jira epic to track these documentation updates?',
  },
  {
    id: 9,
    sender: 'Engineering Lead',
    type: 'user',
    content: 'Yes, and can you show me documents that are being actively maintained?',
  },
  {
    id: 10,
    sender: 'Start Right',
    type: 'ai',
    content: '🟢 Well-maintained documents (updated within 30 days):',
    items: [
      {
        id: 'm1',
        text: 'Incident Response Playbook',
        icon: ConfluenceIcon,
        color: '#0052CC',
        subtext: 'Updated 2 days ago • Last reviewed: Jan 28, 2026',
        status: 'green' as const,
      },
      {
        id: 'm2',
        text: 'Security Compliance Guide',
        icon: SharePointIcon,
        color: '#03787C',
        subtext: 'Updated 5 days ago • SOC 2 aligned',
        status: 'green' as const,
      },
      {
        id: 'm3',
        text: 'Onboarding Checklist',
        icon: ConfluenceIcon,
        color: '#0052CC',
        subtext: 'Updated 1 week ago • Feedback incorporated',
        status: 'green' as const,
      },
    ],
  },
  {
    id: 11,
    sender: 'Start Right',
    type: 'ai',
    content: `I can set up automated staleness monitoring:

• Weekly scan for documents not updated in 90+ days
• Auto-flag when referenced code changes significantly
• Notify owners when linked Jira tickets are resolved
• Track document accuracy through user feedback

Would you like me to enable these alerts?`,
  },
]

export function DocumentStalenessMockup() {
  return <BaseTeamsMockup messages={STALENESS_MESSAGES} height="650px" />
}
