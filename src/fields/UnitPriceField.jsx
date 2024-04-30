import { PriceField } from ".";

export function UnitPriceField(props) {
  return <PriceField
    source="unit_price"
    className="flex justify-end"
    {...props}
    />
}

UnitPriceField.defaultProps = { label: "common.unitPrice" }