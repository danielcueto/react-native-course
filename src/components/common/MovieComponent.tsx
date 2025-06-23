import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IMovie} from '../../utils/service/TMBDService';
import Label from './Label';
import {useTheme} from '../../context/ThemeContext';
import { IMAGE_BASE_URL } from '@env';

const Separator = () => <View style={styles.separator} />;
export function MovieComponent({movies}: {movies: IMovie[]}) {
  const {theme} = useTheme();

  const renderMovieItem = ({item}: {item: IMovie}) => (
    <TouchableOpacity style={styles.movieContainer}>
      <Image
        source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
        style={styles.moviePoster}
        resizeMode="cover"
      />
      <View>
        <Label family="semiBold" numberOfLines={2} style={styles.movieTitle}>
          {item.title}
        </Label>
        <Text style={styles.movieDetails}>⭐ {item.vote_average} | {item.release_date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  separator: {
    height: 16,
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  moviePoster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  movieDetails: {
    fontSize: 14,
    color: 'gray',
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
