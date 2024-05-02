import {
  Toolbar,
  SaveButton,
  useTranslate,
} from "react-admin";

import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export function FormToolbarSaveClose({ onClose }) {
  const t = useTranslate();
  return <Toolbar className="gap-2">
    <SaveButton />
    <Button
      startIcon={<CloseIcon />}
      variant="outlined"
      onClick={() => { if (typeof onClose === 'function') onClose()}}
      >{t("ra.action.close")}</Button>
  </Toolbar>
}