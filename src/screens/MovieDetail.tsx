import React from 'react';
import {View, StyleSheet, Image, ScrollView, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useTheme} from '../context/ThemeContext';
import {useWishlist} from '../context/WishlistContext';
import Label from '../components/common/Label';
import {IMovie} from '../interfaces/Movie';
import {IMAGE_BASE_URL} from '@env';
import {Button} from '../components/common/Button';

export function MovieDetail() {
  const {theme} = useTheme();
  const route = useRoute();
  const movie = (route.params as any)?.movie as IMovie;
  const {addToWishlist, removeFromWishlist, isInWishlist} = useWishlist();

  if (!movie) {
    return (
      <SafeAreaView
        style={[styles.container, {backgroundColor: theme.background}]}> 
        <View style={styles.errorContainer}>
          <Label color="gray">
            Could not load movie information
          </Label>
        </View>
      </SafeAreaView>
    );
  }

  const isMovieInWishlist = isInWishlist(movie.id);

  const handleWishlistToggle = () => {
    if (isMovieInWishlist) {
      removeFromWishlist(movie.id);
    } else {
      addToWishlist(movie);
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}> 
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `${IMAGE_BASE_URL}${
                movie.backdrop_path || movie.poster_path
              }`,
            }}
            style={styles.backdropImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.contentContainer}>
          <Label family="semiBold" size="large" style={styles.title}>
            {movie.title}
          </Label>
          <View style={styles.infoRow}>
            <View style={styles.ratingContainer}>
              <Label family="medium" style={styles.rating}>
                ⭐ {movie.vote_average?.toFixed(1)}
              </Label>
            </View>
            <Label color="gray" style={styles.releaseDate}>
              {movie.release_date}
            </Label>
            <Button
              text={isMovieInWishlist ? '-Wishlist' : '+Wishlist'}
              size="small"
              onPress={handleWishlistToggle}
            />
          </View>

          {movie.original_title !== movie.title && (
            <View style={styles.section}>
              <Label family="medium" style={styles.sectionTitle}>
                Original Title
              </Label>
              <Label color="gray">{movie.original_title}</Label>
            </View>
          )}

          <View style={styles.section}>
            <Label family="medium" style={styles.sectionTitle}>
              Original Language
            </Label>
            <Label color="gray">{movie.original_language?.toUpperCase()}</Label>
          </View>

          <View style={styles.section}>
            <Label family="medium" style={styles.sectionTitle}>
              Popularity
            </Label>
            <Label color="gray">{movie.popularity?.toFixed(0)} points</Label>
          </View>

          <View style={styles.section}>
            <Label family="medium" style={styles.sectionTitle}>
              Vote Count
            </Label>
            <Label color="gray">
              {movie.vote_count?.toLocaleString()} votes
            </Label>
          </View>

          {movie.overview && (
            <View style={styles.section}>
              <Label family="medium" style={styles.sectionTitle}>
                Synopsis
              </Label>
              <Label style={styles.overview}>{movie.overview}</Label>
            </View>
          )}

          <View style={styles.section}>
            <Label family="medium" style={styles.sectionTitle}>
              Additional Information
            </Label>
            <Label color="gray">
              Adult content: {movie.adult ? 'Yes' : 'No'}
            </Label>
            <Label color="gray">Has video: {movie.video ? 'Yes' : 'No'}</Label>
            <Label color="gray">ID: {movie.id}</Label>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 250,
  },
  backdropImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    marginBottom: 16,
    lineHeight: 28,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  ratingContainer: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 16,
  },
  rating: {
    fontSize: 14,
  },
  releaseDate: {
    fontSize: 14,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 8,
    fontSize: 16,
  },
  overview: {
    lineHeight: 22,
  },
});
