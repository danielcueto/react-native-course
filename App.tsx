import React from 'react';
import {View} from 'react-native';
import {Slider} from './src/screens/Slider';
import {StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
