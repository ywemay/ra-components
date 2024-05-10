import {
  default as getProvider,
  defaultPrimaryKeys, 
  defaultSchema } from '@raphiniert/ra-data-postgrest';
import { withLifecycleCallbacks } from 'react-admin';

import { doFetch } from './fetch'

const setHeaders = (headers) => {
  const schema = 'hub';
  if (!headers.get('Accept-Profile')) headers.set('Accept-Profile', schema);
  if (!headers.get('Content-Profile')) headers.set('Content-Profile', schema);
}

const { VITE_API_HOST } = import.meta.env;

export function createDataProvider({ schema, hooks }) {
  const config = {
    apiUrl: VITE_API_HOST,
    httpClient: (uri, options = {}) => {
      if (!options) options = {};
      if (!options.headers) {
          options.headers = new Headers({ Accept: 'application/json' });
      }
      setHeaders(options.headers)
      const url = uri.match(/^http/) ? uri : VITE_API_HOST + uri;
      return doFetch(url, options)
    },
    defaultListOp: 'eq',
    primaryKeys: defaultPrimaryKeys,
    schema: defaultSchema
  }

  const finalProvider = withLifecycleCallbacks(getProvider(config), [
    ...hooks,
  ]);

export default finalProvider;