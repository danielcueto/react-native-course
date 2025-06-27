import React from 'react';
import {View, StyleSheet} from 'react-native';
import ThemeProvider from './src/context/ThemeContext';
import WishlistProvider from './src/context/WishlistContext';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StackNavigation} from './src/components/navigation/StackNavigation';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <SafeAreaProvider>
          <View style={styles.container}>
            <NavigationContainer>
              <StackNavigation />
            </NavigationContainer>
          </View>
        </SafeAreaProvider>
      </WishlistProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
