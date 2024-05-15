import { SelectInput, required } from "react-admin";

const currencies = [
  { id: 'CNY' },
  { id: 'USD' },
  { id: 'EUR' },
]

export default function CurrencySelectInput(props) {
  return <SelectInput
    source="currency"
    choices={currencies}
    optionValue="id"
    defaultValue="CNY"
    validate={[required()]}
    optionText='id'
    {...props}
    />
}
