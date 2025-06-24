import React from 'react';
import {View} from 'react-native';
import ThemeProvider from './src/context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
//import {TabNavigation} from './src/components/navigation/TabNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StackNavigation} from './src/components/navigation/StackNavigation';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
