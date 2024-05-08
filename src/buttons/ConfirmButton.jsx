import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { 
  useShowContext, 
  useTranslate,
  useUpdate,
  useNotify,
} from "react-admin";

export function ConfirmButton({ label, 
    onSuccess, onError, ...params}) {
  const { record: previousData, resource, isLoading } = useShowContext() || {}
  const { id, confirmed, customer_id } = previousData;

  const t = useTranslate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notify = useNotify();

  const defaultOnSuccess = (data) => {
    notify('message.confirmed', { type: 'success' })
    return false;
  }

  const defaultOnError = (data) => {
    notify('message.failed', { type: 'error' })
  }

  const [ update ] = useUpdate(resource, { id, 
    data: { confirmed: true, customer_id }, 
    previousData
  }, {
    onSuccess: onSuccess || defaultOnSuccess,
    onError: onError || defaultOnError,
    onSettled: (data) => console.log(data),
    }
  )
  if (isLoading) return null;
  if (confirmed) return null;
  
  return <React.Fragment>
    <Button 
      color="success"
      variant="contained" 
      onClick={handleClickOpen}
      {...params}
      >{t(label || 'common.confirm')}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData).entries());
            if(formJson.confirm === `#${id}`) {
              update();
              handleClose();
            }
          },
        }}
      >
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type '#{id}' to confirm the order.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="confirm"
            label=""
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Confirm</Button>
        </DialogActions>
      </Dialog>
  </React.Fragment>
}