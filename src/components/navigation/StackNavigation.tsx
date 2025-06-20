import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigation} from './TabNavigation';
import {SeeMore} from '../../screens/SeeMore';
import { Search } from '../../screens/Search';
const Stack = createNativeStackNavigator();
export function StackNavigation() {
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SeeMore" component={SeeMore} />
    </Stack.Navigator>
  );
}
