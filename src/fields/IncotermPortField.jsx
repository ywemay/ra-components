import { TextField } from "react-admin";

export function IncotermPortField(props) {
  return <TextField
    source="port"
    {...props}
    />
}

IncotermPortField.defaultProps = { label: "incoterms.port" }