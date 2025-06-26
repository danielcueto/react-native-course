import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import Label from '../components/common/Label';
import {Button} from '../components/common/Button';
import {MovieComponent} from '../components/common/MovieComponent';
import {getPopularMovies, IMovie} from '../utils/service/TMBDService';

export function Profile() {
  const {theme} = useTheme();
  const [watchHistory, setWatchHistory] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchWatchHistory = async () => {
      const popularMovies = await getPopularMovies();
      setWatchHistory(popularMovies.slice(0, 6));
    };
    fetchWatchHistory();
  }, []);

  return (
    <ScrollView style={[styles.container, {backgroundColor: theme.background}]}>
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
        <Label style={styles.email}>
          danielcuetorrico@gmail.com
        </Label>
        <View style={styles.subscriptionContainer}>
          <Label family="medium" size="small" style={styles.subscriptionLabel}>
            Plan: Gratis
          </Label>
        </View>
        <Button
          text="Suscribirse a Pro"

          style={styles.subscribeButton}
        />
      </View>

      <View style={styles.historySection}>
        <Label family="semiBold" size="medium" style={styles.sectionTitle}>
          Historial de Visualización
        </Label>
        <MovieComponent movies={watchHistory} />
      </View>
    </ScrollView>
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
});
