import React from 'react';
import {View} from 'react-native';
import Home from './src/screens/Home';
import ThemeProvider from './src/context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <View style={{flex: 1}}>
          <Home />
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
