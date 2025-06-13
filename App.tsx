import React from 'react';
import {View} from 'react-native';
import Home from './src/screens/Home';
import ThemeProvider from './src/context/ThemeContext';

function App(): React.JSX.Element {


  return (
    <ThemeProvider>
    <View style={{flex: 1}}>
      <Home />
    </View>
    </ThemeProvider>
  );
}

export default App;
