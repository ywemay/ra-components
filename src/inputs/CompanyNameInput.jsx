import { 
  TextInput,
  required,
  minLength,
} from "react-admin";

export function CompanyNameInput(props) {
  return <TextInput 
    className='w-full'
    source="company_name" 
    validate={[required(), minLength(3)]}
    {...props}
  />
}

CompanyNameInput.defaultProps = { label: 'company.name' }