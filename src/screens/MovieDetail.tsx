import React from 'react';
import {View, StyleSheet, Image, ScrollView, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useTheme} from '../context/ThemeContext';
import Label from '../components/common/Label';
import {IMovie} from '../utils/service/TMBDService';
import {IMAGE_BASE_URL} from '@env';

export function MovieDetail() {
  const {theme} = useTheme();
  const route = useRoute();
  const movie = (route.params as any)?.movie as IMovie;

  if (!movie) {
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]}>
        <View style={styles.errorContainer}>
          <Label color="gray">No se pudo cargar la información de la película</Label>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Imagen principal */}
        <View style={styles.imageContainer}>
          <Image
            source={{uri: `${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}}
            style={styles.backdropImage}
            resizeMode="cover"
          />
        </View>

        {/* Contenido */}
        <View style={styles.contentContainer}>
          {/* Título */}
          <Label family="semiBold" size="large" style={styles.title}>
            {movie.title}
          </Label>

          {/* Información básica */}
          <View style={styles.infoRow}>
            <View style={styles.ratingContainer}>
              <Label family="medium" style={styles.rating}>
                ⭐ {movie.vote_average?.toFixed(1)}
              </Label>
            </View>
            <Label color="gray" style={styles.releaseDate}>
              {movie.release_date}
            </Label>
          </View>

          {/* Título original */}
          {movie.original_title !== movie.title && (
            <View style={styles.section}>
              <Label family="medium" style={styles.sectionTitle}>
                Título Original
              </Label>
              <Label color="gray">
                {movie.original_title}
              </Label>
            </View>
          )}

          {/* Idioma */}
          <View style={styles.section}>
            <Label family="medium" style={styles.sectionTitle}>
              Idioma Original
            </Label>
            <Label color="gray">
              {movie.original_language?.toUpperCase()}
            </Label>
          </View>

          {/* Popularidad */}
          <View style={styles.section}>
            <Label family="medium" style={styles.sectionTitle}>
              Popularidad
            </Label>
            <Label color="gray">
              {movie.popularity?.toFixed(0)} puntos
            </Label>
          </View>

          {/* Votos */}
          <View style={styles.section}>
            <Label family="medium" style={styles.sectionTitle}>
              Número de Votos
            </Label>
            <Label color="gray">
              {movie.vote_count?.toLocaleString()} votos
            </Label>
          </View>

          {/* Descripción */}
          {movie.overview && (
            <View style={styles.section}>
              <Label family="medium" style={styles.sectionTitle}>
                Sinopsis
              </Label>
              <Label style={styles.overview}>
                {movie.overview}
              </Label>
            </View>
          )}

          {/* Información adicional */}
          <View style={styles.section}>
            <Label family="medium" style={styles.sectionTitle}>
              Información Adicional
            </Label>
            <Label color="gray">
              Contenido para adultos: {movie.adult ? 'Sí' : 'No'}
            </Label>
            <Label color="gray">
              Tiene video: {movie.video ? 'Sí' : 'No'}
            </Label>
            <Label color="gray">
              ID: {movie.id}
            </Label>
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
