import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Component</Text>
    </View>
  );
};

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
