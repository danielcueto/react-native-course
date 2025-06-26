import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IMovie} from '../../utils/service/TMBDService';
import Label from './Label';
import {useTheme} from '../../context/ThemeContext';
import { IMAGE_BASE_URL } from '@env';

const {width: screenWidth} = Dimensions.get('window');
const MOVIE_WIDTH = (screenWidth - 60) / 3;
const MOVIE_HEIGHT = MOVIE_WIDTH * 1.5;

export function MovieComponent({movies}: {movies: IMovie[]}) {
  const {theme} = useTheme();
  const navigation = useNavigation();

  const handleMoviePress = (movie: IMovie) => {
    (navigation as any).navigate('MovieDetail', {movie});
  };

  const renderMovieItem = ({item}: {item: IMovie}) => (
    <TouchableOpacity
      style={styles.movieContainer}
      onPress={() => handleMoviePress(item)}
    >
      <Image
        source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
        style={styles.moviePoster}
        resizeMode="cover"
      />
      <Label family="semiBold" numberOfLines={2} style={styles.movieTitle}>
        {item.title}
      </Label>
      <Text style={styles.movieDetails}>⭐ {item.vote_average?.toFixed(1)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  row: {
    justifyContent: 'flex-start',
  },
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
