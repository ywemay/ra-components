import { TextInput } from "react-admin";

export default function IncotermPortInput(props) {
  return <TextInput 
    label="incoterms.port"
    source="port" 
    {...props}
    />
}