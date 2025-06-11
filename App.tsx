import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/screens/Home';
import {Slider} from './src/screens/Slider';

function App(): React.JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <Home />
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;
