import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import Label from '../components/common/Label';
import {Button} from '../components/common/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTMDB} from '../hooks/useTMDB';
import {MovieListItem} from '../components/common/MovieListItem';

export function Profile() {
  const {theme} = useTheme();
  const {movies, loading} = useTMDB({
    path: 'movie/popular',
    params: {
      language: 'en-US',
      page: '1',
    },
  });
  const watchHistory = movies.slice(0, 5);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme.background}}
      edges={['top', 'left', 'right']}>
      <ScrollView style={styles.container}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/62757813?s=400&u=f15a94f94716feac2174afccf91c8bf2c80dc0f6&v=4',
              }}
              style={styles.avatar}
            />
          </View>
          <Label family="semiBold" size="large" style={styles.name}>
            Daniel Cueto Torrico
          </Label>
          <Label style={styles.email}>danielcuetorrico@gmail.com</Label>
          <View style={styles.subscriptionContainer}>
            <Label
              family="medium"
              size="small"
              style={styles.subscriptionLabel}>
              Plan: Gratis
            </Label>
          </View>
          <Button text="Suscribirse a Pro" style={styles.subscribeButton} />
        </View>

        <View style={styles.historySection}>
          <Label family="semiBold" size="medium" style={styles.sectionTitle}>
            Historial de Visualización
          </Label>
          {loading ? (
            <Label>Loading history...</Label>
          ) : (
            <View style={styles.moviesWrapper}>
              {watchHistory.map(movie => (
                <MovieListItem key={movie.id} item={movie} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    marginBottom: 24,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: 'white',
    backgroundColor: '#007ACC',
  },
  name: {
    marginBottom: 8,
  },
  email: {
    marginBottom: 16,
  },
  subscriptionContainer: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 24,
  },
  subscriptionLabel: {
    color: '#666',
  },
  subscribeButton: {
    marginTop: 8,
    width: '75%',
  },
  historySection: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  moviesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
});
