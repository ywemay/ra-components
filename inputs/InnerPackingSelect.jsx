import { SelectInput } from "react-admin";
import { packings } from "ywemay-erp-choices/packing-types";

export default function InnerPackingSelectInput(props) {
  return <SelectInput
    source="inner_packing"
    label="packing.innner"
    choices={packings}
    defaultValue="polybag"
    {...props}
    />
}