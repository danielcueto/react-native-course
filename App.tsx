import React from 'react';
import {View} from 'react-native';
import ThemeProvider from './src/context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigation} from './src/components/TabNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
