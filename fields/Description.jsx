import { TextField } from "react-admin";

export default function DescriptionField(props) {
  return <TextField
    className="w-full"
    label={false}
    source="description"
    {...props}
    />
}