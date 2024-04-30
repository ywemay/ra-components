import { 
  NumberInput, 
} from "react-admin";

export function MinimumQuantityInput(props) {
  return <NumberInput
    source="minimum_quantity"
    {...props}
    />
}

MinimumQuantityInput.defaultProps = { label: "common.minimumQuantity" }