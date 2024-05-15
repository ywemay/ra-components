import { 
  NumberInput, 
} from "react-admin";

export default function MinimumQuantityInput(props) {
  return <NumberInput
    label="min.quantity"
    source="minimum_quantity"
    {...props}
    />
}
