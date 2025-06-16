import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {getPopularMovies} from '../utils/service/TMBDService';
import {useEffect, useRef, useState} from 'react';
import Carousel, {
  Pagination,
  ICarouselInstance,
} from 'react-native-reanimated-carousel';
import {IMAGE_BASE_URL} from '@env';
import {useSharedValue} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../components/Button';
import {useTheme} from '../context/ThemeContext';
import Label from '../components/Label';

const {width} = Dimensions.get('window');

export function MainCarousel() {
  const {theme} = useTheme();
  const [movies, setMovies] = useState([]);
  const progress = useSharedValue<number>(0);
  const ref = useRef<ICarouselInstance>(null);
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
  useEffect(() => {
    getPopularMovies().then(moviesData => {
      setMovies(moviesData.slice(0, 5));
    });
  }, []);

  const renderItem = ({item}: {item: any; index: number}) => {
    return (
      <View style={styles.carouselItem}>
        <Image
          style={styles.image}
          source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
        />
        <LinearGradient
          colors={['transparent', theme.background]}
          style={styles.gradient}></LinearGradient>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.carouselContainer}>
        {movies.length > 0 ? (
          <>
            <Carousel
              ref={ref}
              width={width}
              height={width * 1.07}
              data={movies}
              renderItem={renderItem}
              loop={true}
              autoPlay={true}
              autoPlayInterval={3000}
              scrollAnimationDuration={1000}
              onProgressChange={(_, absoluteProgress) => {
                progress.value = absoluteProgress;
              }}
            />
            <View style={styles.controlContainer}>
              <View style={styles.header}>
                <Label size="medium" family="medium">
                  My List
                </Label>
                <Label size="medium" family="medium">
                  Discover
                </Label>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  text="+ Wishlist"
                  variant="secondary"
                  onPress={() => {}}
                />
                <Button text="Details" variant="primary" onPress={() => {}} />
              </View>
            </View>
            <Pagination.Basic
              progress={progress}
              data={movies}
              dotStyle={styles.dotStyle}
              activeDotStyle={{backgroundColor: '#f2c94c'}}
              containerStyle={styles.paginationContainer}
              onPress={onPressPagination}
            />
          </>
        ) : (
          <Text style={[styles.text]}>Loading movies...</Text>
        )}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  controlContainer: {
    position: 'absolute',
    top: width * 0.8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 36,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    gap: 16,
  },
  button1: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    backgroundColor: '#333',
    borderRadius: 8,
    width: 155.5,
    height: 48,
  },
  button2: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    backgroundColor: '#f2c94c',
    borderRadius: 8,
    width: 155.5,
    height: 48,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'Gilroy-Medium',
  },
  carouselItem: {
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  movieOverview: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    lineHeight: 16,
  },

  image: {
    width: width,
    height: width * 1.07,
    borderRadius: 8,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 233,
    height: '100%',
    justifyContent: 'flex-end',
  },
  dotStyle: {
    backgroundColor: '#fff',
    borderRadius: 6,
    width: 6,
    height: 6,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 8,
  },
});
