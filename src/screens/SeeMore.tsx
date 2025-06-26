import {SafeAreaView, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {MovieComponent} from '../components/common/MovieComponent';
import {useTheme} from '../context/ThemeContext';

export function SeeMore() {
  const {theme} = useTheme();
  const route = useRoute();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]}>
      <MovieComponent movies={(route as any).params?.movies || []} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
