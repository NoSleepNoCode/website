import { BaseTeamsMockup } from './BaseTeamsMockup'
import { SlackIcon, ConfluenceIcon, CalendarIcon, EmailIcon } from '../ui/CustomIcons'

const DECISION_MESSAGES = [
  {
    id: 1,
    sender: 'Engineering Manager',
    type: 'user',
    content:
      'What were the main concerns when we decided to use GraphQL instead of REST?',
  },
  {
    id: 2,
    sender: 'Start Right',
    type: 'ai',
    content: "Here's what I found from the knowledge graph:",
  },
  {
    id: 3,
    sender: 'Start Right',
    type: 'ai',
    content: 'Decision Timeline: Q3 2025',
    timeline: [
      {
        date: 'Oct 12',
        title: 'Architecture Review Meeting',
        source: 'Calendar',
        icon: CalendarIcon,
      },
      {
        date: 'Oct 10',
        title: 'RFC Document: "GraphQL vs REST" by Engineering',
        source: 'Confluence',
        icon: ConfluenceIcon,
      },
      {
        date: 'Oct 8-12',
        title: 'Slack Discussion: 47 messages in #architecture',
        source: 'Slack',
        icon: SlackIcon,
      },
    ],
  },
  {
    id: 4,
    sender: 'Start Right',
    type: 'ai',
    content: `Key Concerns Raised:
1. Learning curve for junior devs (mentioned by 3 people)
2. Caching complexity (Sarah's concern in the RFC)
3. Tooling maturity (GitHub PR comments)

Outcome: Approved with 6-month trial period
• Training budget allocated
• Performance benchmarks defined`,
  },
  {
    id: 5,
    sender: 'Engineering Manager',
    type: 'user',
    content: 'What metrics did we commit to tracking?',
  },
  {
    id: 6,
    sender: 'Start Right',
    type: 'ai',
    content: 'From the decision document and follow-up meetings:',
    metrics: [
      {
        label: 'API Response Time',
        value: '< 200ms',
        status: 'green' as const,
        reference: 'JIRA-405',
      },
      {
        label: 'Developer Onboarding Time',
        value: 'Tracked',
        status: 'green' as const,
        reference: 'Confluence',
      },
      {
        label: 'Client Bundle Size Reduction',
        value: 'On track',
        status: 'green' as const,
        reference: 'GitHub #234',
      },
    ],
  },
  {
    id: 7,
    sender: 'Start Right',
    type: 'ai',
    content:
      "Current status: All three metrics are green according to last week's engineering sync.",
  },
  {
    id: 8,
    sender: 'Engineering Manager',
    type: 'user',
    content: 'Who were the key decision makers and what were their positions?',
  },
  {
    id: 9,
    sender: 'Start Right',
    type: 'ai',
    content: 'Decision stakeholders from the Oct 12 meeting:',
    stakeholders: [
      {
        name: 'Sarah Chen',
        role: 'Tech Lead',
        position: 'Advocate',
        items: ['Wrote the RFC', 'Presented technical benefits'],
      },
      {
        name: 'Marcus Rodriguez',
        role: 'Product',
        position: 'Concerned',
        items: ['Timeline impact worries', 'Proposed trial period compromise'],
      },
      {
        name: 'VP Engineering',
        role: 'Decision Maker',
        position: 'Approved',
        items: ['Set trial period condition', 'Allocated training budget'],
      },
      {
        name: '3 Senior Engineers',
        role: 'Technical Review',
        position: 'Split 2-1',
        items: ['2 in favor', '1 preferred REST'],
      },
    ],
  },
  {
    id: 10,
    sender: 'Start Right',
    type: 'ai',
    content:
      "Meeting notes show the trial period was Marcus's compromise to address timeline concerns.",
  },
  {
    id: 11,
    sender: 'Engineering Manager',
    type: 'user',
    content: 'Are there any similar architectural decisions we should review?',
  },
  {
    id: 12,
    sender: 'Start Right',
    type: 'ai',
    content: 'I found 3 related decisions in the knowledge graph:',
    items: [
      {
        id: 'd1',
        text: 'Database migration to PostgreSQL (Q2 2025)',
        icon: ConfluenceIcon,
        color: '#0052CC',
        subtext: 'Similar trial period approach • Success metrics in CONF-234',
      },
      {
        id: 'd2',
        text: 'Microservices adoption (Q4 2024)',
        icon: SlackIcon,
        color: '#611f69',
        subtext: 'Lessons learned doc • Retrospective in #architecture',
      },
      {
        id: 'd3',
        text: 'Cloud provider selection (Q1 2025)',
        icon: EmailIcon,
        color: '#EA4335',
        subtext: 'Cost-benefit analysis • Final decision with CFO approval',
      },
    ],
  },
  {
    id: 13,
    sender: 'Start Right',
    type: 'ai',
    content: 'Would you like me to pull the lessons learned from any of these?',
  },
]

export function DecisionContextMockup() {
  return <BaseTeamsMockup messages={DECISION_MESSAGES} height="600px" />
}
