interface StatusIndicatorProps {
  status: 'green' | 'yellow' | 'red'
  size?: 'sm' | 'md' | 'lg'
}

export function StatusIndicator({ status, size = 'md' }: StatusIndicatorProps) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  }

  const colorClasses = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
  }

  const glowClasses = {
    green: 'shadow-[0_0_8px_rgba(34,197,94,0.6)]',
    yellow: 'shadow-[0_0_8px_rgba(234,179,8,0.6)]',
    red: 'shadow-[0_0_8px_rgba(239,68,68,0.6)]',
  }

  return (
    <div
      className={`rounded-full ${sizeClasses[size]} ${colorClasses[status]} ${glowClasses[status]}`}
    />
  )
}

interface StatusBadgeProps {
  status: 'green' | 'yellow' | 'red'
  label?: string
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const colorClasses = {
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-xs font-medium ${colorClasses[status]}`}
    >
      <StatusIndicator status={status} size="sm" />
      {label && <span>{label}</span>}
    </div>
  )
}
