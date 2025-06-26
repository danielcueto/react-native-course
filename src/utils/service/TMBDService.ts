import {ACCESS_TOKEN, TMBD_BASE_URL} from '@env';

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  vote_count: number;
}

export async function getPopularMovies() {
  try {
    const url = new URL('movie/popular', TMBD_BASE_URL);
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', '1');

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.results as IMovie[] || [];
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
}

export const getMarvelMovies = async (): Promise<IMovie[]> => {
  try {
    const url = new URL('discover/movie', TMBD_BASE_URL);
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', '1');
    url.searchParams.append('sort_by', 'popularity.desc');
    url.searchParams.append('with_companies', '420');

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
    });

    const data = await response.json();
    return (data.results as IMovie[]) || [];
  } catch (error: any) {
    console.error('Error fetching Marvel movies:', error.message || error);
    return [];
  }
};


export const getMovieDetails = async (movieId: string) => {
  try {
    const url = new URL(`movie/${movieId}`, TMBD_BASE_URL);
    url.searchParams.append('language', 'en-US');
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results as IMovie[] || [];
  } catch (error: any) {
    console.error('Error fetching movie details:', error.message || error);
    return [];
  }
};

export const searchMovies = async (query: string): Promise<IMovie[]> => {
  try {
    if (!query.trim()) {
      return [];
    }
    const url = new URL('search/movie', TMBD_BASE_URL);
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', '1');
    url.searchParams.append('query', query);

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data.results as IMovie[]) || [];
  } catch (error: any) {
    console.error('Error searching movies:', error.message || error);
    return [];
  }
};
