import { Admin, Resource } from 'react-admin'
import { dataProvider } from 'ywemay-ra-erp-data-provider-mock'
import Show from './Show'
import Create from './Create'
import List from './List'

import './record'
import '../fields/style.css'

export default function App() {
  return <Admin disableTelemetry dataProvider={dataProvider}>
    <Resource name="samples" list={List} show={Show} create={Create} />
    <Resource name="customers" recordRepresentation={r => r.company_name} />
    <Resource name="products" recordRepresentation={r => `${r.id}: ${r.title}`} />
    <Resource name="projects" recordRepresentation={r => `${r.id}: ${r.title}`} />
  </Admin>
}