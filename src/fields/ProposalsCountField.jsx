import { NumberField } from "react-admin";

export function ProposalsCountField(props) {
  return <NumberField
    label="proposals.count"
    source="proposals_count"
    className="flex justify-end"
    {...props}
    />
}

ProposalsCountField.defaultProps = {label: 'proposals.count' }