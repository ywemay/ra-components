import { 
  TextInput
} from "react-admin";

export function IncotermPortInput(props) {
  return <TextInput 
    label="incoterms.port"
    source="port" 
    {...props}
    />
}