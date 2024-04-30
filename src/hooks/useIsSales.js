import { useUser } from "..";

export function useIsSales() {
  const { hasRole } = useUser()
  return hasRole(['sales_manager', 'sales_clerk']);
}