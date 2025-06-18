import {ScrollView} from 'react-native';
import {MainCarousel} from '../components/carousels/MainCarousel';
import {CarouselHeader} from '../components/carousels/HeaderCarousel';
import {useTheme} from '../context/ThemeContext';
import {MoviesCarousel} from '../components/carousels/MoviesCarousel';

function Home() {
  const {theme} = useTheme();
  return (
    <ScrollView style={{backgroundColor: theme.background}}>
      <MainCarousel />
      <CarouselHeader text1="Marvel Studios" text2="See more" />

      <MoviesCarousel
        path="discover/movie"
        params={{
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc',
          with_companies: '420',
        }}
      />
      <CarouselHeader text1="Best Movies" text2="See more" />
      <MoviesCarousel
        path="movie/top_rated"
        params={{
          language: 'en-US',
          page: '1',
        }}
      />
    </ScrollView>
  );
}

export default Home;
