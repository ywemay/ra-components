import { TextField } from "react-admin";

export default function CompanyNameField(props) {
  return <TextField
    source="company_name"
    {...props}
    />
}

CompanyNameField.defaultProps = { label: "company.name" }