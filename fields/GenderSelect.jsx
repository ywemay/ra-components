import { SelectField } from "react-admin";
import { genders } from "ywemay-erp-choices/genders";

export default function GenderSelectField(props) {

  return <SelectField
    // label="people.gender"
    source="gender"
    choices={genders}
    {...props}
    />
}

GenderSelectField.defaultProps = { label: "people.gender"}