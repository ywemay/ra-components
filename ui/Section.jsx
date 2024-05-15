import { useTranslate } from 'react-admin'
import { Typography } from "@mui/material";

export const Section = ({children, label, ...props}) => {
  const t = useTranslate();
  return <div className="flex flex-col w-full" {...props}>
    {label && <Typography variant="h6">{t(label)}</Typography>}
    {children}
  </div>
}

export const RowSection = ({children, ...props}) => {
  return <div className="md:flex md:flex-row gap-3 w-full" {...props}>
    {children}
  </div>
}

export const ColSection = ({children, ...props}) => {
  return <div className="flex flex-col p-2 gap-3" {...props}>
    {children}
  </div>
}