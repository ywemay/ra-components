import { PriceField } from ".";

export default function TotalPriceField(props) {
  return <PriceField
    source="total_price"
    className="flex justify-end"
    {...props}
  />
}

TotalPriceField.defaultProps = { label: "total.price" }