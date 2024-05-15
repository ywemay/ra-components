import { useRedirect, useTranslate } from "react-admin";
import { Button } from "@mui/material";

export function FilterButton({ resource, filter, label, ...params}) {
  const redirect = useRedirect();
  const t = useTranslate();
  const pathTo = `/${resource}?filter=${JSON.stringify(filter || {})}`; 

  const handleClick = () => { redirect(pathTo) };

  return <Button 
    color="primary" 
    onClick={handleClick}
    {...params}
    >{t(label)}</Button>
}