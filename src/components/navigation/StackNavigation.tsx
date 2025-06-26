import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigation} from './TabNavigation';
import {SeeMore} from '../../screens/SeeMore';
import {MovieDetail} from '../../screens/MovieDetail';
import {useTheme} from '../../context/ThemeContext';
import { IMovie } from '../../utils/service/TMBDService';

export type RootStackParamList = {
  MainHome: undefined;
  SeeMore: {
    title: string;
    movies: IMovie[];
  };
  MovieDetail: {
    movie: IMovie;
  };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export function StackNavigation() {
  const {theme} = useTheme();
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainHome"
        component={TabNavigation}
      />
      <Stack.Screen
        options={({route}) => ({
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: {
            fontFamily: 'Gilroy-Medium',
          },
          headerBackTitle: 'Back',
          headerShadowVisible: true,
          title: route.params?.title || 'See More',
          headerTintColor: theme.primary,
          animation: 'slide_from_bottom',
        })}
        name="SeeMore"
        component={SeeMore}
      />
      <Stack.Screen
        options={({route}) => ({
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: {
            fontFamily: 'Gilroy-Medium',
          },
          headerBackTitle: 'Back',
          headerShadowVisible: true,
          title: route.params?.movie?.title || 'Movie Details',
          headerTintColor: theme.primary,
          animation: 'slide_from_right',
        })}
        name="MovieDetail"
        component={MovieDetail}
      />
    </Stack.Navigator>
  );
}
