import {Button, StyleSheet, Text, View} from 'react-native';

export function Slider() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>My list</Text>
        <Text>Discover</Text>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.text}>1</Text>
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
});
