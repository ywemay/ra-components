export function ResponsiveContainer({children, ...props}) {
  return <div className="flex flex-col md:flex-row w-full gap-2 justify-stretch" {...props}>
    {children}
  </div>
}