export function Card ({
  title,
  className,
  children,
  ...props
}) {
  return <div 
    {...props}
    >
      { title && <h3>{title}</h3> }
      { children }
  </div>
}