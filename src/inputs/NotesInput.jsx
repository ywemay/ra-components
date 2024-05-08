import { TextInput } from "react-admin";

export function NotesInput(props) {
  return <TextInput
    label="common.notes"
    multiline
    source="notes"
    className="w-full"
    fullWidth
    {...props}
    />
}