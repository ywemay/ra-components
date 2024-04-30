import { useEffect } from "react"
import { useRecordContext, ImageInput } from "react-admin"
import { useFormContext } from "react-hook-form";
import { doFetch } from "../lib";
import { ImageField } from '../fields'

const { VITE_API_FILES_HOST: host } = import.meta.env;

export function ProductImagesInput(props) {

  const { setValue } = useFormContext();
  const { id } = useRecordContext() || { id: false };

  const makeFile = (file_name) => {
    return {
      src: file_name,
      path: `${host}/product/imgsub/${id}/${file_name}`,
      sku: id
    }
  }

  useEffect(() => {
    if (id) doFetch(host, `product/list/${id}`).then(rez => {
      const { files } = rez.json
      if (Array.isArray(files)) {
        const images = files.map(val => makeFile(val));
        setValue('products_files', images)
      }
    })
  }, [id])

  return <ImageInput 
    source="products_files" 
    label="Related pictures" 
    multiple
    {...props}
    >
      <ImageField
        className="m-3 border rounded-6 shadow-xl"
        width="160pt"
        height="160pt"
        source="src"
        //parse={r => `${r.product_id}/${r.file_name}`}
        subdir="sku" 
        title="title" 
        crossOrigin="anonymous"
        />
    </ImageInput>
}