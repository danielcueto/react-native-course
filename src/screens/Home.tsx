import {ScrollView} from 'react-native';
import {MainCarousel} from '../components/carousels/MainCarousel';
import {useTheme} from '../context/ThemeContext';
import {MoviesCarousel} from '../components/carousels/MoviesCarousel';
import {BlackFriday} from '../components/common/BlackFriday';
import { HeaderTab } from '../components/common/HeaderTab';

function Home() {
  const {theme} = useTheme();
  return (
    <ScrollView
      style={{backgroundColor: theme.background}}>
      <MainCarousel />

      <MoviesCarousel
        title="Marvel Studios"
        path="discover/movie"
        params={{
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc',
          with_companies: '420',
        }}
      />
      <MoviesCarousel
        title="Best Movies"
        path="movie/top_rated"
        params={{
          language: 'en-US',
          page: '1',
        }}
      />
      <BlackFriday />
      <HeaderTab/>
    </ScrollView>
  );
}
export default Home;
