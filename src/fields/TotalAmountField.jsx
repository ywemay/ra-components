import { PriceField } from ".";

export function TotalAmountField(props) {
  return <PriceField
    source="total_amount"
    className="flex justify-end"
    {...props}
  />
}

TotalAmountField.defaultProps = { label: "total.amount" }