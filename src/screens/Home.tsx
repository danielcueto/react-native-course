import {View} from 'react-native';
import {MainCarousel} from './MainCarousel';
import {CarouselHeader} from './CarouselHeader';
import {useTheme} from '../context/ThemeContext';

function Home() {
  const {theme} = useTheme();
  return (
    <View style={{backgroundColor: theme.background}}>
      <MainCarousel />
      <CarouselHeader text1="Marvel Studios" text2="See more" />
    </View>
  );
}

export default Home;
