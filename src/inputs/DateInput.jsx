import { 
  DateInput as RADateInput,
} from "react-admin";

export function DateInput(props) {
  return <RADateInput
    label="common.date"
    source="date"
    defaultValue={new Date()}
    {...props}
    />
}

