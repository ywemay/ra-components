import { SelectField } from "react-admin";
import { genders } from "../choices/genders";

export function GenderSelectField(props) {

  return <SelectField
    // label="people.gender"
    source="gender"
    choices={genders}
    {...props}
    />
}

GenderSelectField.defaultProps = { label: "people.gender"}