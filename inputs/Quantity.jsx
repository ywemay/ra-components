import { 
  NumberInput, 
} from "react-admin";

export default function QuantityInput({mu:defaultMu, mu_source, ...props}) {
  return <NumberInput
    label="common.quantity"
    source="quantity"
    {...props}
    />
}