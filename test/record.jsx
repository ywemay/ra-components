import { resources } from 'ywemay-ra-erp-data-provider-mock'

export const record = {
  company_name: 'Vasilisa',
  date: new Date(),
  description: 'This is some sort of description',
  gender: 'F',
  id: 1,
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

resources.samples = [ 
  record, {
    ...record,
    id:2, 
    port: 'Ningbo',
    unit_price: 23.45,
    product_id: 'KH-0938',
   },
    {
    ...record,
    id: 3,
    product_id: 'KH-0985',
    unit_price: 33.67,
    } 
  ]

  resources.products = [
    { id: 'HH-34534', title: 'Mirage Plastic Machine'},
    { id: 'HE-23423', title: 'Multi handed Flex Octopus'},
    { id: 'KH-0988', title: 'Reflection Standard Mirror'},
    { id: 'KH-0938', title: 'High Speed Wooded Catapult'},
    { id: 'KH-0985', title: 'Incredible Glass Train'},
  ]

  resources.customers = [
    { id: 1, company_name: 'Stand Stop Look LTD'}
  ]