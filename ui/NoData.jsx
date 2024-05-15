import Icon from '@mui/icons-material/NearbyError';
import { useTranslate } from "react-admin";

export function NoData(params) {
  const t = useTranslate();

  return <div className="w-full h-full border p-3" {...params}>
    <Icon /> {t('messages.no.data')}
  </div>
}