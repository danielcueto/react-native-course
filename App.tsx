import React from 'react';
import {View} from 'react-native';
import Home from './src/screens/Home';
function App(): React.JSX.Element {
  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <Home />
    </View>
  );
}

export default App;
