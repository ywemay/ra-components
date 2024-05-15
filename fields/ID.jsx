import { NumberField } from "react-admin";

export default function IDField(props) {
  return <NumberField
    source="id"
    label="common.id"
    className="number-field"
    {...props}
    />
}

IDField.defaultProps = { label: "common.id" }