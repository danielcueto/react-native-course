import {useState, useEffect, useMemo} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import Label from '../components/common/Label';
import {MoviesVerticalList} from '../components/common/MoviesVerticalList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTMDB} from '../hooks/useTMDB';

export function Search() {
  const {theme} = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const params = useMemo(
    () => ({
      path: 'search/movie',
      params: {
        language: 'en-US',
        page: '1',
        query: debouncedQuery,
      },
    }),
    [debouncedQuery],
  );

  const {movies, loading} = useTMDB(params);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme.background}}
      edges={['top', 'left', 'right']}>
      <View style={[styles.container, {backgroundColor: theme.background}]}>
        <View style={styles.searchContainer}>
          <TextInput
            style={[
              styles.searchInput,
              {
                backgroundColor: theme.background,
                borderColor: theme.primary,
                color: theme.text,
              },
            ]}
            placeholder="Search movies..."
            placeholderTextColor={theme.muted}
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        {loading ? (
          <View style={styles.loadingContainer}>
            <Label color="gray">Searching...</Label>
          </View>
        ) : searchQuery.length > 0 && movies.length === 0 ? (
          <View style={styles.noResultsContainer}>
            <Label color="gray">No results found</Label>
          </View>
        ) : movies.length > 0 ? (
          <MoviesVerticalList movies={movies} />
        ) : (
          <View style={styles.initialContainer}>
            <Label color="gray" style={styles.initialText}>
              Type the name of a movie to search for
            </Label>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  searchInput: {
    height: 48,
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Gilroy-Regular',
  },
  resultsContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  initialContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  initialText: {
    textAlign: 'center',
    paddingHorizontal: 24,
  },
});
