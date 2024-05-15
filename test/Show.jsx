import { Show, SimpleShowLayout } from 'react-admin'
import CompanyNameField from '../fields/CompanyName'
import CustomerReferenceField from '../fields/CustomerReference'
import DateField from '../fields/Date'
import DescriptionField from '../fields/Description'
import GenderSelectField from '../fields/GenderSelect'
import IDField from '../fields/ID'
import ImagesField from '../fields/Images'
import IncotermField from '../fields/Incoterm'
import IncotermPortField from '../fields/IncotermPort'
import MinQuantityField from '../fields/MinQuantity'
import NotesField from '../fields/Notes'
import NrField from '../fields/Nr'
import OrdersCountField from '../fields/OrdersCount'
import OwnerField from '../fields/Owner'
import PackageField from '../fields/Package'
import PaymentSelectField from '../fields/PaymentSelect'
import PaymentTermReferenceField from '../fields/PaymentTermReference'
import PriceField from '../fields/Price'
import ProductImageField from '../fields/ProductImage'
import ProductImagesField from '../fields/ProductImages'
import ProductReferenceImageField from '../fields/ProductReferenceImage'
import ProjectReferenceField from '../fields/ProjectReference'
import ProjectStatusField from '../fields/ProjectStatus'
import ProposalsCountField from '../fields/ProposalsCount'
import QuantityField from '../fields/Quantity'
import SelectMUField from '../fields/SelectMU'
import SKUField from '../fields/SKU'
import TitleField from '../fields/Title'
import TotalAmountField from '../fields/TotalAmount'
import TotalItemsField from '../fields/TotalItems'
import TotalPriceField from '../fields/TotalPrice'
import UnitPriceField from '../fields/UnitPrice'

export default function(){
  return <Show>
    <SimpleShowLayout >
      <CompanyNameField />
      <CustomerReferenceField />
      <DateField />
      <DescriptionField />
      <GenderSelectField />
      <IDField />
      <ImagesField />
      <IncotermField />
      <IncotermPortField />
      <MinQuantityField />
      <NotesField />
      <NrField />
      <OrdersCountField />
      <OwnerField />
      <PackageField />
      <PaymentSelectField />
      <PaymentTermReferenceField />
      <PriceField />
      <ProductImageField />
      <ProductImagesField />
      <ProductReferenceImageField />
      <ProjectReferenceField />
      <ProjectStatusField />
      <ProposalsCountField />
      <QuantityField />
      <SelectMUField />
      <SKUField />
      <TitleField />
      <TotalAmountField />
      <TotalItemsField />
      <TotalPriceField />
      <UnitPriceField />
    </SimpleShowLayout>
  </Show>
}