import {ScrollView} from 'react-native';
import {MainCarousel} from './MainCarousel';
import {CarouselHeader} from './CarouselHeader';
import {useTheme} from '../context/ThemeContext';
import {MarvelMoviesCarousel} from '../components/MarvelMoviesCarousel';

function Home() {
  const {theme} = useTheme();
  return (
    <ScrollView style={{backgroundColor: theme.background}}>
      <MainCarousel />
      <CarouselHeader text1="Marvel Studios" text2="See more" />
      <MarvelMoviesCarousel />
    </ScrollView>
  );
}

export default Home;
