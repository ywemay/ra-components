import { SelectInput, useGetList, useLocaleState } from "react-admin";
import { payments } from "../choices/payments-terms";

export function PaymentTermSelectInput(props) {
  return <SelectInput
    source="payment_term"
    choices={payments}
    optionValue="id"
    defaultValue="ADV"
    optionText="name"
    {...props}
    />
}

PaymentTermSelectInput.defaultProps = { label: 'common.paymentTerm' }