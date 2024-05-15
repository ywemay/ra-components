import { 
  DateInput as DateIn,
} from "react-admin";

export default function DateInput(props) {
  return <DateIn
    label="common.date"
    source="date"
    defaultValue={new Date()}
    {...props}
    />
}

