import { SelectInput, useGetList } from "react-admin";

const data = [
  {id: 'CNY'},
  {id: 'USD'},
  {id: 'EUR'},
]
export function CurrencySelectInput(props) {
  return <SelectInput
    source="currency"
    choices={data}
    optionValue="id"
    defaultValue="元"
    optionText='id'
    {...props}
    />
}

CurrencySelectInput.defaultProps = { label: 'common.currency' }