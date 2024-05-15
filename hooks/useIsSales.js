import { useUser } from "..";

export default function useIsSales() {
  const { hasRole } = useUser()
  return hasRole(['sales_manager', 'sales_clerk']);
}