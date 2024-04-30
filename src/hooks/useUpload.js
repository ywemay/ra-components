import { httpFilesClient } from '../lib';

/**
 * Provides upload function to upload files on the file server
 * @returns { upload }
 * @category Hooks
 */
export function useUpload({uri}) {

  const upload = (file) => new Promise((resolve, reject) => {
    const body = new FormData();
    body.append('file', file);
    httpFilesClient(uri, {
      method: 'POST',
        headers: new Headers({
          ContentType: 'multipart/form-data',
          Accept: 'application/json' 
        }),
        body,
    }).then(({status}) => {
      return status === 200 ? resolve(body) : reject(new Error('Failed to upload file.'))
    }).catch(err => reject(err.response?.message || err));
  });

  return { upload }
}
