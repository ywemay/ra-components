import { fetchUtils } from 'react-admin';

export const doFetch = (host, uri, options) => {
  const url = uri.match(/^http/) ? uri : host + '/' + uri;
  if (!options) options = {};
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const me = localStorage.getItem('auth');
  if (me) {
    const { token } = JSON.parse(me);
    options.headers.set('Authorization', `Bearer ${token}`);
  }
  return fetchUtils.fetchJson(url, options);
}

/** 
 * HTTP Client used to access the API
 * 
 * @category Client
 * @example
 * ```ts
 * import { httpClient } from '@ywemay/yw-ui-core';
 * 
 * httpClient('products', { method: 'GET' });
 * ```
 */
export const httpClient = (uri, options) => {
  const { VITE_API_HOST } = import.meta.env;
  return doFetch(VITE_API_HOST, uri, options); 
};

/** 
 * HTTP Files Client used to access Files API
 * 
 * @category Client
 */
export const httpFilesClient = (uri, options) => {
  const { VITE_API_FILES_HOST } = import.meta.env;
  return doFetch(VITE_API_FILES_HOST, uri, options); 
};

