import { ReferenceInput, AutocompleteInput } from "react-admin";

export function SalesProductInput({ autocomplete, ...props }) {
  return <ReferenceInput
    reference="products"
    source="product_id"
    {...props}
    >
     <AutocompleteInput
      className="w-full"
      label="products.product"
      {...autocomplete}
     /> 
    </ReferenceInput>
}

SalesProductInput.defaultProps = { label: 'products.products' }