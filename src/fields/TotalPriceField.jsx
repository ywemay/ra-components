import { PriceField } from ".";

export function TotalPriceField(props) {
  return <PriceField
    source="total_price"
    className="flex justify-end"
    {...props}
  />
}

TotalPriceField.defaultProps = { label: "total.price" }