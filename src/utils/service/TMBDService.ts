import {ACCESS_TOKEN, TMBD_BASE_URL} from '@env';

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
    return data.results || [];
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
}
