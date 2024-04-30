import { NumberField } from "react-admin";

export function TotalItemsField(props) {
  return <NumberField
    source="total_items"
    className="flex flex-row justify-end"
    {...props}
  />
}

TotalItemsField.defaultProps = { label: "total.items" }