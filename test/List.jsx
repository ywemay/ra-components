import { Datagrid, List } from "react-admin";
import GenderSelectField from "../fields/GenderSelect";
import DateField from "../fields/Date"
import UnitPriceField from "../fields/UnitPrice"

function Grid() {
  return <Datagrid rowClick="show">
    <GenderSelectField />
    <DateField />
    <UnitPriceField />
  </Datagrid>
}

export default function() {
  return <List>
    <Grid />
  </List>
}