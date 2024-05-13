import * as t from '../'
import { Admin, Resource, Datagrid, TextField } from 'react-admin'

const record = {
  company_name: 'Vasilisa',
  date: new Date(),
  description: 'This is some sort of description',
  gender: 'F',
  id: 33,
  incoterm: 'FOB',
  port: 'Shanghai',
  customer_id: 1,
  min_quantity: 23500,
  orders_count: 22,
  owner_id: 1,
  inner_packing_count: 5,
  inner_per_outer: 20,
  inner_packing: 'polybag',
  payment_term: 'ADV',
  unit_price: 33.4,
  product_id: 'KH-0988',
  total_amount: 888888,
  total_items: 5656,
  total_price: 88.8,
  proposals_count: 8

}
const getList =(resource, params) => new Promise((resolve, reject) => {
  let re;
  if (resource === 'customers') re = {
    data: [{id:1, company_name: "A company Name"}] }
  else if (resource === 'projects') re = {
    data: [{id:1, title: "Build a Super Cool Future"}] }
  else if (resource === 'products') re = {
    data: [{id: record.product_id, title: "Super Cheese Bike"}] }
  else re = { data: [] };
  resolve(re)
});

const dataProvider = {
 getList, getMany: getList  
}

export function Layout(){
  return <div>
    <t.Card>
      Yakhunna mathaha
    </t.Card>
    <t.DetailLayout>
      <TextField label="Marianna" data="intercol" />
    </t.DetailLayout>
    <t.BoxIcon />
  </div>
}


export default function App() {
  return <Admin disableTelemetry dataProvider={dataProvider}>
    <Resource name="show" list={Layout} />
    <Resource name="customers" recordRepresentation={r => r.company_name} />
    <Resource name="products" recordRepresentation={r => `${r.id}: ${r.title}`} />
    <Resource name="projects" recordRepresentation={r => `${r.id}: ${r.title}`} />
  </Admin>
}