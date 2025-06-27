import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import {useWishlist} from '../context/WishlistContext';
import Label from '../components/common/Label';
import {IMovie} from '../interfaces/Movie';
import {IMAGE_BASE_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function Whishlist() {
  const {theme} = useTheme();
  const {wishlist, removeFromWishlist} = useWishlist();
  const navigation = useNavigation();

  const handleMoviePress = (movie: IMovie) => {
    (navigation as any).navigate('MovieDetail', {movie});
  };

  const handleRemoveFromWishlist = (movieId: number) => {
    removeFromWishlist(movieId);
  };

  if (wishlist.length === 0) {
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]} edges={['top', 'left', 'right']}>
        <View style={styles.emptyContainer}>
          <Label family="medium" size="large" style={styles.emptyTitle}>
            Your wishlist is empty
          </Label>
          <Label color="gray" style={styles.emptyDescription}>
             Add movies to your wish list from the details of any movie
          </Label>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Label family="semiBold" size="large">
          My Wishlist ({wishlist.length})
        </Label>
      </View>

      <View style={styles.moviesList}>
        {wishlist.map((movie) => (
          <TouchableOpacity
            key={movie.id}
            style={[styles.movieItem, {borderBottomColor: theme.gray + '20'}]}
            onPress={() => handleMoviePress(movie)}>
            <Image
              source={{uri: `${IMAGE_BASE_URL}${movie.poster_path}`}}
              style={styles.moviePoster}
              resizeMode="cover"
            />
            <View style={styles.movieInfo}>
              <Label family="semiBold" numberOfLines={2} style={styles.movieTitle}>
                {movie.title}
              </Label>
              <Label color="gray" style={styles.movieDetails}>
                ⭐ {movie.vote_average?.toFixed(1)} | {movie.release_date}
              </Label>
              {movie.overview && (
                <Label
                  color="gray"
                  numberOfLines={2}
                  style={styles.movieOverview}>
                  {movie.overview}
                </Label>
              )}
            </View>
            <TouchableOpacity
              style={[styles.removeButton, {backgroundColor: theme.primary + '15'}]}
              onPress={() => handleRemoveFromWishlist(movie.id)}>
              <Label family="medium" style={{color: theme.primary}}>
                ✕
              </Label>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emptyTitle: {
    marginBottom: 16,
    textAlign: 'center',
  },
  emptyDescription: {
    textAlign: 'center',
    lineHeight: 22,
  },
  moviesList: {
    flex: 1,
    paddingHorizontal: 24,
  },
  movieItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
  },
  moviePoster: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  movieInfo: {
    flex: 1,
    paddingRight: 8,
  },
  movieTitle: {
    marginBottom: 8,
    fontSize: 16,
  },
  movieDetails: {
    marginBottom: 8,
    fontSize: 14,
  },
  movieOverview: {
    fontSize: 13,
    lineHeight: 18,
  },
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
