import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {getMarvelMovies, IMovie} from '../utils/service/TMBDService';
import {useTheme} from '../context/ThemeContext';
import {IMAGE_BASE_URL} from '@env';
import Label from './Label';

const MOVIE_WIDTH = 120;
const MOVIE_HEIGHT = 160;

const Separator = () => <View style={styles.separator} />;

export const MarvelMoviesCarousel: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const {theme} = useTheme();

  useEffect(() => {
    fetchMarvelMovies();
  }, []);

  const fetchMarvelMovies = async () => {
    try {
      setLoading(true);
      const marvelMovies = await getMarvelMovies();
      setMovies(marvelMovies);
    } catch (error) {
      console.error('Error fetching Marvel movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderMovieItem = ({item}: {item: IMovie}) => (
    <TouchableOpacity style={styles.movieContainer}>
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
        <ActivityIndicator size="large" color={theme.accent} />
        <Label size="regular" style={styles.loadingText}>
          Cargando...
        </Label>
      </View>
    );
  }

  return (
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
  );
};

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
