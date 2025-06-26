import {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import Label from '../components/common/Label';
import {MovieComponent} from '../components/common/MovieComponent';
import {searchMovies, IMovie} from '../utils/service/TMBDService';

export function Search() {
  const {theme} = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.trim().length > 2) {
        setIsLoading(true);
        try {
          const results = await searchMovies(searchQuery);
          setSearchResults(results);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    const timeoutId = setTimeout(performSearch, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchInput, {
            backgroundColor: theme.background,
            borderColor: theme.primary,
            color: theme.text,
          }]}
          placeholder="Search movies..."
          placeholderTextColor={theme.gray}
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <ScrollView style={styles.resultsContainer}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Label color="gray">Searching...</Label>
          </View>
        ) : searchQuery.length > 0 && searchResults.length === 0 ? (
          <View style={styles.noResultsContainer}>
            <Label color="gray">No se encontraron resultados</Label>
          </View>
        ) : searchResults.length > 0 ? (
          <MovieComponent movies={searchResults} />
        ) : (
          <View style={styles.initialContainer}>
            <Label color="gray" style={styles.initialText}>
              Escribe el nombre de una película para buscar
            </Label>
          </View>
        )}
      </ScrollView>
    </View>
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
