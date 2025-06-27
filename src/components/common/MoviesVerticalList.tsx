import {FlatList, StyleSheet, View} from 'react-native';
import {IMovie} from '../../interfaces/Movie';
import {useTheme} from '../../context/ThemeContext';
import {MovieListItem} from './MovieListItem';

export function MoviesVerticalList({movies}: {movies: IMovie[]}) {
  const {theme} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <FlatList
        data={movies}
        renderItem={({item}) => <MovieListItem item={item} />}
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
});
