import { useLocation } from 'react-router-dom';
import { useRedirect } from 'react-admin';

export default function useStateRedirect() {
  const { redirect: params } = useLocation() || {};
  const re = useRedirect()

  const redirect = ({fallback}) => {
    if (!params) return fallback || 'edit';
    if (typeof params === 'function') params();
    else {
      const { resource, id, action } = params;
      re(action, resource, id)
    }
  }
  return redirect
}