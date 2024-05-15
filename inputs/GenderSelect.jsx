import { SelectInput } from "react-admin";
import { genders } from "ywemay-erp-choices/genders";

export default function GenderSelectInput(props) {
  return <SelectInput
    label="people.gender"
    source="gender"
    choices={genders}
    defaultValue="M"
    {...props}
    />
}
