import { 
  TextInput,
  required,
  minLength,
} from "react-admin";

export default function CompanyNameInput(props) {
  return <TextInput 
    className='w-full'
    source="company_name" 
    validate={[required(), minLength(3)]}
    {...props}
  />
}
