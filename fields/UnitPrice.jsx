import PriceField from "./Price";

export default function UnitPriceField(props) {
  return <PriceField
    source="unit_price"
    className="number-field"
    {...props}
    />
}

UnitPriceField.defaultProps = { label: "common.unitPrice" }