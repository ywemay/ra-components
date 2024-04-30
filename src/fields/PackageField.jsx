import { WrapperField, NumberField, SelectField } from "react-admin";
import { packings } from "../choices/packing-types";

export function PackageField (props) {
  return <WrapperField
    label="common.package"
    >
      <div className='flex flex-row justify-start gap-1'>
        <div><NumberField source="inner_packing_count" /></div>
        <div><SelectField source="inner_packing" choices={packings} /></div>
        *
        <div><NumberField source="inner_per_outer" /></div>
      </div>
    </WrapperField>
}

PackageField.defaultProps = { label: 'common.package' }