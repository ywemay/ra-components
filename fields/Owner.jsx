import { TextField } from "react-admin";

export default function OwnerField(props) {
  return <TextField
    source="owner_id"
    />
}

OwnerField.defaultProps = { label: "common.owner" }