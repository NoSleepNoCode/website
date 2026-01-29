import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { LayoutGrid, User, Send, Bell } from 'lucide-react'
import { ExternalLink } from 'lucide-react'
import { StatusIndicator } from '../ui/StatusIndicator'

interface BaseTeamsMockupProps {
  messages: any[]
  height?: string
}

export function BaseTeamsMockup({ messages, height = '500px' }: BaseTeamsMockupProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const isStarted = useRef(false)

  useEffect(() => {
    if (isStarted.current) return
    isStarted.current = true

    const sequence = async () => {
      for (let i = 0; i < messages.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, i === 0 ? 500 : 2000))
        setVisibleMessages((prev) => {
          if (prev.includes(i)) return prev
          return [...prev, i]
        })
      }
    }
    sequence()
  }, [messages])

  return (
    <div
      className="w-full max-w-2xl glass-card border border-white/10 overflow-hidden flex flex-col shadow-2xl"
      style={{ height }}
    >
      {/* Teams Header */}
      <div className="bg-[#6264A7] p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <LayoutGrid className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">Start Right Bot</span>
        </div>
        <div className="flex gap-3">
          <Bell className="w-4 h-4 text-white/70" />
          <User className="w-4 h-4 text-white/70" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6 bg-[#0B0B0E]">
        <AnimatePresence>
          {visibleMessages.map((idx) => {
            const msg = messages[idx]
            const isAI = msg.type === 'ai'
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: isAI ? -20 : 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                className={`flex gap-3 ${isAI ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    isAI ? 'bg-accent-primary' : 'bg-zinc-700'
                  }`}
                >
                  {isAI ? (
                    <LayoutGrid className="w-4 h-4 text-white" />
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`flex flex-col gap-1 max-w-[80%] ${
                    isAI ? 'items-start' : 'items-end'
                  }`}
                >
                  <span className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">
                    {msg.sender}
                  </span>
                  <div
                    className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      isAI
                        ? 'bg-white/5 border border-white/5 text-white'
                        : 'bg-accent-primary text-white'
                    }`}
                  >
                    {msg.content && (
                      <div className="whitespace-pre-line">{msg.content}</div>
                    )}

                    {/* Items list (projects, tasks, blockers, etc.) */}
                    {msg.items && (
                      <div className="flex flex-col gap-2 mt-2">
                        {msg.items.map((item: any, i: number) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                              <item.icon className="w-4 h-4" style={{ color: item.color }} />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium flex items-center gap-2">
                                {item.text}
                                {item.badge && (
                                  <span className="text-xs px-1.5 py-0.5 rounded bg-white/10">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              {item.subtext && (
                                <div className="text-xs text-text-secondary mt-0.5">
                                  {item.subtext}
                                </div>
                              )}
                            </div>
                            {item.status && (
                              <StatusIndicator status={item.status} size="sm" />
                            )}
                            {item.link && (
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40 transition-opacity" />
                            )}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Files */}
                    {msg.files && (
                      <div className="flex gap-2 mt-3 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar">
                        {msg.files.map((file: any, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl cursor-pointer transition-colors whitespace-nowrap group shrink-0"
                          >
                            <file.icon className="w-4 h-4" />
                            <div className="flex flex-col">
                              <span className="text-[11px] font-medium">{file.name}</span>
                              {file.updated && (
                                <span className="text-[9px] text-text-secondary">
                                  {file.updated}
                                </span>
                              )}
                            </div>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Timeline */}
                    {msg.timeline && (
                      <div className="flex flex-col gap-3 mt-2">
                        {msg.timeline.map((event: any, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                            className="flex gap-3 items-start"
                          >
                            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                              <event.icon className="w-3 h-3" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-medium">{event.title}</div>
                              <div className="text-[10px] text-text-secondary flex items-center gap-1.5 mt-0.5">
                                <span>{event.date}</span>
                                <span>•</span>
                                <span>{event.source}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Stakeholders */}
                    {msg.stakeholders && (
                      <div className="flex flex-col gap-2 mt-2">
                        {msg.stakeholders.map((stakeholder: any, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                            className="p-2 rounded-xl bg-white/5 border border-white/5"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="text-sm font-medium">{stakeholder.name}</div>
                                <div className="text-xs text-text-secondary">
                                  {stakeholder.role}
                                </div>
                                {stakeholder.contact && (
                                  <div className="text-xs text-accent-primary mt-1">
                                    {stakeholder.contact}
                                  </div>
                                )}
                              </div>
                              {stakeholder.position && (
                                <span className="text-xs px-2 py-1 rounded bg-white/10">
                                  {stakeholder.position}
                                </span>
                              )}
                            </div>
                            {stakeholder.items && (
                              <div className="mt-2 text-xs text-text-secondary">
                                {stakeholder.items.map((item: string, idx: number) => (
                                  <div key={idx} className="mt-1">
                                    • {item}
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Metrics */}
                    {msg.metrics && (
                      <div className="grid grid-cols-1 gap-2 mt-2">
                        {msg.metrics.map((metric: any, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                            className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between"
                          >
                            <div className="flex-1">
                              <div className="text-xs text-text-secondary">{metric.label}</div>
                              <div className="text-sm font-medium mt-0.5">{metric.value}</div>
                              <div className="text-[10px] text-text-secondary mt-1">
                                {metric.reference}
                              </div>
                            </div>
                            <StatusIndicator status={metric.status} size="md" />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/5 bg-white/2">
        <div className="bg-zinc-900/50 rounded-lg p-3 flex items-center justify-between border border-white/5">
          <span className="text-sm text-text-secondary">Type a message...</span>
          <Send className="w-4 h-4 text-accent-primary" />
        </div>
      </div>
    </div>
  )
}
