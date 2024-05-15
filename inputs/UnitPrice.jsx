import { NumberInput } from 'react-admin';

export default function UnitPriceInput(props) {
  return <NumberInput
    source='unit_price'
    step={0.01}
    {...props}
    />
}
