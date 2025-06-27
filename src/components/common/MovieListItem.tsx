import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Label from './Label';
import {IMovie} from '../../interfaces/Movie';
import {IMAGE_BASE_URL} from '@env';
import {useNavigation} from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('window');
const MOVIE_WIDTH = (screenWidth - 60) / 3;
const MOVIE_HEIGHT = MOVIE_WIDTH * 1.5;

export function MovieListItem({item}: {item: IMovie}) {
  const navigation = useNavigation();

  const handleMoviePress = (movie: IMovie) => {
    (navigation as any).navigate('MovieDetail', {movie});
  };

  return (
    <TouchableOpacity
      style={styles.movieContainer}
      onPress={() => handleMoviePress(item)}>
      <Image
        source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
        style={styles.moviePoster}
        resizeMode="cover"
      />
      <Label family="semiBold" numberOfLines={2} style={styles.movieTitle}>
        {item.title}
      </Label>
      <Text style={styles.movieDetails}>
        ⭐ {item.vote_average?.toFixed(1)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  movieContainer: {
    width: MOVIE_WIDTH,
    alignItems: 'center',
    marginBottom: 16,
    margin: 4,
  },
  moviePoster: {
    width: MOVIE_WIDTH,
    height: MOVIE_HEIGHT,
    borderRadius: 8,
    marginBottom: 8,
  },
  movieTitle: {
    textAlign: 'center',
    fontSize: 12,
    paddingHorizontal: 4,
  },
  movieDetails: {
    textAlign: 'center',
    fontSize: 11,
    color: 'gray',
    marginTop: 4,
  },
});
