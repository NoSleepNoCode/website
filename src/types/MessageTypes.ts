import type { ComponentType } from 'react'

export interface BaseMessage {
  id: number
  sender: string
  type: 'ai' | 'user'
  content?: string
}

export interface MessageItem {
  id: string
  text: string
  icon: ComponentType<any>
  link?: string
  color: string
  badge?: string
}

export interface MessageFile {
  name: string
  type: string
  icon: ComponentType<any>
  updated?: string
}

export interface ItemMessage extends BaseMessage {
  items: MessageItem[]
}

export interface FileMessage extends BaseMessage {
  files: MessageFile[]
}

export interface TimelineEvent {
  date: string
  title: string
  source: string
  icon: ComponentType<any>
}

export interface TimelineMessage extends BaseMessage {
  timeline: TimelineEvent[]
}

export interface StakeholderCard {
  name: string
  role: string
  contact: string
  position?: string
  items?: string[]
}

export interface StakeholderMessage extends BaseMessage {
  stakeholders: StakeholderCard[]
}

export interface MetricCard {
  label: string
  value: string
  status: 'green' | 'yellow' | 'red'
  reference: string
}

export interface MetricMessage extends BaseMessage {
  metrics: MetricCard[]
}

export type Message =
  | BaseMessage
  | ItemMessage
  | FileMessage
  | TimelineMessage
  | StakeholderMessage
  | MetricMessage
