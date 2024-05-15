import { SelectInput, required } from "react-admin";
import { payments } from "ywemay-erp-choices/payments-terms";

export default function PaymentTermSelectInput(props) {
  return <SelectInput
    source="payment_term"
    label="payments.term"
    choices={payments}
    optionValue="id"
    defaultValue="ADV"
    validate={[required()]}
    optionText="name"
    {...props}
    />
}
