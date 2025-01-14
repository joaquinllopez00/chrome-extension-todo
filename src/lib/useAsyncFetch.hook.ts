import { useEffect, useState } from 'react';

export function useAsyncFetch<T>(asyncFn: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await asyncFn();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [asyncFn]);

  return { data, loading, error };
}

export function useAsyncPost<T>(asyncFn: () => Promise<T>) {
  const [result, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const execute = async () => {
      try {
        setLoading(true);
        const result = await asyncFn();
        setResult(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    execute();
  }, [asyncFn]);

  return { loading, error, result };
}
