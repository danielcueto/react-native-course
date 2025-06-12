import {Button, StyleSheet, Text, View, Dimensions} from 'react-native';
import {getPopularMovies} from '../utils/service/TMBDService';
import { useEffect, useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';

const {width} = Dimensions.get('window');

export function Slider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(moviesData => {
      console.log('Popular Movies:', moviesData);
      setMovies(moviesData.slice(0, 5)); // Solo mostrar las primeras 5 películas
    });
  }, []);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View style={styles.carouselItem}>
        <Text style={styles.movieTitle}>{item.title || `Movie ${index + 1}`}</Text>
        <Text style={styles.movieOverview} numberOfLines={3}>
          {item.overview || 'No description available'}
        </Text>
        <Text style={styles.rating}>
          ⭐ {item.vote_average ? item.vote_average.toFixed(1) : 'N/A'}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>My list</Text>
        <Text>Discover</Text>
      </View>
      <View style={styles.mainContainer}>
        {movies.length > 0 ? (
          <Carousel
            width={width * 0.8}
            height={160}
            data={movies}
            renderItem={renderItem}
            loop={true}
            autoPlay={true}
            autoPlayInterval={3000}
            scrollAnimationDuration={1000}
          />
        ) : (
          <Text style={styles.text}>Loading movies...</Text>
        )}
      </View>
      <View style={styles.button}>
        <Button color="green" title="WhishList" />
        <Button color="green" title="Details" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
    paddingVertical: 40,
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  mainContainer: {
    height: 200,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  carouselItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  movieOverview: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    lineHeight: 16,
  },
  rating: {
    fontSize: 14,
    color: '#ff6b35',
    fontWeight: '600',
  },
});
