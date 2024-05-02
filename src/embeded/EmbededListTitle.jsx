import { useTranslate } from "react-admin";
import { Typography } from '@mui/material';

export function EmbededListTitle(props) {
  const { label } = props;
  const t = useTranslate();
  return <Typography variant="h6" className="p-3 pb-0">
    {t(label)}
  </Typography>
}