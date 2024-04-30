import { useState } from 'react';
import { useDataProvider } from 'react-admin';

export function useCreateMany({ resource, onDone }) {
  const dataProvider = useDataProvider();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const create = async (data) => {
    setLoading(true);
    setError(undefined);
    setProgress(0);

    try {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        await dataProvider.create(resource, { data: item });
        setProgress(((i + 1) / data.length) * 100);
      }
      if (typeof onDone === 'function') onDone();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { create, progress, loading, error };
}