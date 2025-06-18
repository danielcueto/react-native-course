import {StyleSheet, View, Dimensions, Image} from 'react-native';
import {getPopularMovies, IMovie} from '../../utils/service/TMBDService';
import {useEffect, useRef, useState} from 'react';
import Carousel, {
  Pagination,
  ICarouselInstance,
} from 'react-native-reanimated-carousel';
import {IMAGE_BASE_URL} from '@env';
import {useSharedValue} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../common/Button';
import {useTheme} from '../../context/ThemeContext';
import Label from '../common/Label';
import {MyModal} from '../modals/MyModal';
import {MovieDetailModal} from '../modals/MovieDetailModal';

const {width} = Dimensions.get('window');

export function MainCarousel() {
  const {theme} = useTheme();
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
          style={styles.gradient}
        />
      </View>
    );
  };

  return (
    <View>
      <MyModal visible={modalVisible} setVisible={setModalVisible}>
        {movies.length > 0 ? (
          <MovieDetailModal
            title={movies[activeIndex]?.title || 'No Title'}
            descripcion={
              movies[activeIndex]?.overview || 'No description available'
            }
            imageUrl={`${IMAGE_BASE_URL}${movies[activeIndex]?.poster_path}`}
          />
        ) : (
          <Label>Loading movie details...</Label>
        )}
      </MyModal>
      <View style={styles.carouselContainer}>
        {movies.length > 0 ? (
          <>
            <Carousel
              ref={ref}
              width={width}
              height={width * 1.07}
              data={movies}
              renderItem={renderItem}
              onSnapToItem={index => {
                setActiveIndex(index);
              }}
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
                <Button
                  text="Details"
                  variant="primary"
                  onPress={() => setModalVisible(true)}
                />
              </View>
            </View>
            <Pagination.Basic
              progress={progress}
              data={movies}
              dotStyle={{...styles.dotStyle, backgroundColor: theme.muted}}
              activeDotStyle={{backgroundColor: theme.primary}}
              containerStyle={styles.paginationContainer}
              onPress={onPressPagination}
            />
          </>
        ) : (
          <Label>Loading movies...</Label>
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
    height: '32%',
    justifyContent: 'flex-end',
  },
  dotStyle: {
    borderRadius: 6,
    width: 6,
    height: 6,
    marginTop: 24,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 8,
  },
});
