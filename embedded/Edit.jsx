import {
  Edit,
  useNotify,
} from "react-admin";

export default function Edit(props) {

  const { onCreated, children, ...rest } = props

  const notify = useNotify();

  const onSuccess = (data) => {
    notify(`ra.notification.created`);
    if (typeof onCreated === 'function') onCreated(data.id);
  };

  return <Edit
    mutationOptions={{ onSuccess }}
    {...rest}>
      {children}
  </Edit>
}