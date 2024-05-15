import { Create, SimpleForm } from "react-admin";
import CompanyNameInput from '../inputs/CompanyName'
import CurrencySelectInput from '../inputs/CurrencySelect'
import DateInput from '../inputs/Date'
import GenderSelectInput from '../inputs/GenderSelect'
import IncotermPortInput from '../inputs/IncotermPort'
import IncotermSelectInput from '../inputs/IncotermSelect'
import InnerPackingSelectInput from '../inputs/InnerPackingSelect'
import MinimumQuantityInput from '../inputs/MinimumQuantity'
import NotesInput from '../inputs/Notes'
import PaymentTermSelectInput from '../inputs/PaymentTermSelect'
import ProductImagesInput from '../inputs/ProductImages'
import QuantityInput from '../inputs/Quantity'
import SalesProductInput from '../inputs/SalesProduct'
import SelectMUInput from '../inputs/SelectMU'
import UnitPriceInput from '../inputs/UnitPrice'

export default function() {
  return <Create>
    <SimpleForm>
      <CompanyNameInput />
      <CurrencySelectInput />
      <DateInput />
      <GenderSelectInput />
      <IncotermPortInput />
      <IncotermSelectInput />
      <InnerPackingSelectInput />
      <MinimumQuantityInput />
      <NotesInput />
      <PaymentTermSelectInput />
      <ProductImagesInput />
      <QuantityInput />
      <SalesProductInput />
      <SelectMUInput />
      <UnitPriceInput />
    </SimpleForm>
  </Create>
}