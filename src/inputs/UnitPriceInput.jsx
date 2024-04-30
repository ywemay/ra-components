import {
  NumberInput,
} from 'react-admin';

export function UnitPriceInput(props) {
  const { className, validate } = props;
  return <NumberInput
    source='unit_price'
    className={className}
    validate={validate}
    step={0.01}
    />
}
