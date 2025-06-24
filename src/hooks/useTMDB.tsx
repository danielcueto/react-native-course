import {useEffect, useState} from 'react';
import {IMovie} from '../utils/service/TMBDService';
import {ACCESS_TOKEN, TMBD_BASE_URL} from '@env';

export interface useTMBProps {
  path: string;
  params: {[key: string]: string};
};

export function useTMDB({path, params}: useTMBProps) {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const url = new URL(path, TMBD_BASE_URL);
        Object.keys(params).forEach(param => {
          url.searchParams.append(param, params[param]);
        });
        const response = await fetch(url.toString(), {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params), path]);

  return {movies, loading};
}
