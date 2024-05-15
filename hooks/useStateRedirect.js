import { useLocation } from 'react-router';

export default function useStateRedirect({ fallback } = {}) {
  const { state } = useLocation() || {};
  console.log('Use Redirect', state)

  const re = () => {
    if (!state) return fallback || 'edit';
    const { redirect } = state;
    if (!redirect.to) return fallback || 'edit';
    return redirect.to
  }

  return re
}