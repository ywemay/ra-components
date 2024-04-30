import { 
  NumberInput, 
} from "react-admin";

export function QuantityInput({mu:defaultMu, mu_source, ...props}) {
  return <NumberInput
    source="quantity"
    {...props}
    />
}

QuantityInput.defaultProps = { label: "common.quantity" }