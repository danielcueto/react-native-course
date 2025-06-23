import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {MovieComponent} from '../components/common/MovieComponent';
import {useTheme} from '../context/ThemeContext';

export function SeeMore() {
  const {theme} = useTheme();
  const route = useRoute();
  return (
    <View style={{backgroundColor: theme.background, flex: 1}}>
      <MovieComponent movies={route.params?.movies} />
    </View>
  );
}
