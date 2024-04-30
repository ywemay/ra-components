import { SelectInput } from "react-admin";
import { genders } from "../choices/genders";

export function GenderSelectInput(props) {

  return <SelectInput
    // label="people.gender"
    source="gender"
    choices={genders}
    {...props}
    />
}

GenderSelectInput.defaultProps = { label: "people.gender"}