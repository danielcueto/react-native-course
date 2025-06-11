import { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { getPopularMovies } from '../utils/service/TMBDService';

function Home() {

  useEffect(() => {
    getPopularMovies()
      .then((movies) => {
        console.log('Popular Movies:', movies);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 16,
        paddingVertical: 40,
        color: 'white',
        backgroundColor: '#1d49e8',
    },
});

export default Home;
