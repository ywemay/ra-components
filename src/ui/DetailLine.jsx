import {
  useTranslate
} from "react-admin";

export default function DetailLine({children, hidden, label, ...rest}) {
  if (hidden) return <></>
  const t = useTranslate();
  return <div 
    {...rest}
    className="flex flex-row gap-2 justify-stretch border-b border-b-stone-500">
    {label && <div className="w-full">{t(label)}</div>}
    <div className="w-full">
      {children}
    </div>
  </div>
}