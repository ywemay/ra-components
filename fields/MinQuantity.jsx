import { 
  NumberField
} from "react-admin";

export default function MinQuantityField(props) {
  return <NumberField
    label="min.quantity"
    source="min_quantity"
    {...props}
    />
}

MinQuantityField.defaultProps = { label: 'min.quantity' }