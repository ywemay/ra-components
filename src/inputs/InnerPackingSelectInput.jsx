import { SelectInput } from "react-admin";
import { packings } from "../choices/packing-types";

export function InnerPackingSelectInput(props) {
  return <SelectInput
    source="inner_packing"
    label="packing.innner"
    choices={packings}
    defaultValue="polybag"
    {...props}
    />
}