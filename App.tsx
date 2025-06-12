import React from 'react';
import {View} from 'react-native';
import {Slider} from './src/screens/Slider';
function App(): React.JSX.Element {
  return (
    <View style={{backgroundColor: '#000'}}>
      <Slider />
    </View>
  );
}

export default App;
