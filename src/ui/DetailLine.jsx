import {
  useTranslate,
  TextField,
  NumberField,
  DateField,
} from "react-admin";
import { PriceField } from "..";

export function DetailLine({children, hidden, label, ...rest}) {
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

export function DetailField({element, hidden, label, ...props}) {
  const params = { hidden, label }
  const Element = element ? element : TextField;
  return <DetailLine {...params}>
    <Element {...props} />
  </DetailLine>
}

export function DetailTextField(props) {
  return <DetailField element={TextField} {...props} />
}

export const DetailNumberField = (props) =>  <DetailField element={NumberField} {...props} />
export const DetailPriceField = (props) =>  <DetailField element={PriceField} {...props} />
export const DetailDateField = (props) =>  <DetailField element={DateField} {...props} />