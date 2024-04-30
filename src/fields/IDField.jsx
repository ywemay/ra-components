import { TextField, } from "react-admin";

export function IDField(props) {
  return <TextField
    source="id"
    {...props}
    />
}

IDField.defaultProps = { label: "common.id" }