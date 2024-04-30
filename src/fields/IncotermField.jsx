import { SelectField } from "react-admin";
import { incoterms } from '../choices/incoterms';

export function IncotermField(props) {
  return <SelectField
    source="incoterm"
    choices={incoterms}
    {...props}
  />
}

IncotermField.defaultProps = { label: "incoterms.incoterm" }