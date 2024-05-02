import { cn } from '../lib/utils'

export function Card ({
  title,
  className,
  children,
  ...props
}) {
  return <div 
    className={cn('p-3 border', className)} 
    {...props}
    >
      { title && <h3>{title}</h3> }
      { children }
  </div>
}