import { NumberField } from "react-admin";

export default function ProposalsCountField(props) {
  return <NumberField
    label="proposals.count"
    source="proposals_count"
    className="number-field"
    {...props}
    />
}

ProposalsCountField.defaultProps = {label: 'proposals.count' }