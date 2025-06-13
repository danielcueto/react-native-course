import {View} from 'react-native';
import {MainCarousel} from './MainCarousel';
import {CarouselHeader} from './CarouselHeader';

function Home() {
  return (
    <View>
      <MainCarousel />
      <CarouselHeader text1="Marvel Studios" text2="See more" />
    </View>
  );
}

export default Home;
