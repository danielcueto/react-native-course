import {
  View,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {IMovie} from '../../interfaces/Movie';
import {useTheme} from '../../context/ThemeContext';
import {IMAGE_BASE_URL} from '@env';
import Label from '../common/Label';
import {useTMBProps, useTMDB} from '../../hooks/useTMDB';
import {CarouselHeader} from './HeaderCarousel';
const MOVIE_WIDTH = 120;
const MOVIE_HEIGHT = 160;
import {useNavigation} from '@react-navigation/native';
const Separator = () => <View style={styles.separator} />;

interface MoviesCarouselProps extends useTMBProps {
  title: string;
}

export function MoviesCarousel({path, params, title}: MoviesCarouselProps) {
  const {theme} = useTheme();
  const navigation = useNavigation();
  const {movies, loading} = useTMDB({
    path,
    params,
  });
  const handleMoviePress = (movie: IMovie) => {
    (navigation as any).navigate('MovieDetail', {movie});
  };

  const renderMovieItem = ({item}: {item: IMovie}) => (
    <TouchableOpacity
      onPress={() => handleMoviePress(item)}
      style={styles.movieContainer}>
      <Image
        source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
        style={styles.moviePoster}
        resizeMode="cover"
      />
      <Label family="semiBold" numberOfLines={2} style={styles.movieTitle}>
        {item.title}
      </Label>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <View>
          <CarouselHeader text1={title} text2="See more" movies={[]} />
        </View>
        <ActivityIndicator size="large" color={theme.accent} />
        <Label size="regular" style={styles.loadingText}>
          Cargando...
        </Label>
      </View>
    );
  }

  return (
    <View>
      <View>
        <CarouselHeader text1={title} text2="See more" movies={movies} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={renderMovieItem}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={Separator}
          snapToInterval={MOVIE_WIDTH + 15}
          decelerationRate="fast"
          snapToAlignment="start"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  listContent: {
    paddingHorizontal: 24,
  },
  separator: {
    width: 16,
  },
  movieContainer: {
    width: MOVIE_WIDTH,
    alignItems: 'center',
  },
  moviePoster: {
    width: MOVIE_WIDTH,
    height: MOVIE_HEIGHT,
    borderRadius: 8,
    marginBottom: 16,
  },
  movieTitle: {
    textAlign: 'left',
    paddingHorizontal: 4,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  loadingText: {
    marginTop: 10,
  },
});
