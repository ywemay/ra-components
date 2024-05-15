import { TextInput } from "react-admin";

export default function NotesInput(props) {
  return <TextInput
    label="common.notes"
    multiline={true}
    source="notes"
    fullWidth={true}
    {...props}
    />
}