import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {Search} from '../screens/Search';
import {Whishlist} from '../screens/Whishlist';
import {Profile} from '../screens/Profile';
import {useTheme} from '../context/ThemeContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import HomeIcon from '../../assets/icons/Home2.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import BookmarkIcon from '../../assets/icons/Bookmark.svg';
import ProfileIcon from '../../assets/icons/Profile.svg';

const Tab = createBottomTabNavigator();

const icons = {
  Home: HomeIcon,
  Search: SearchIcon,
  Whishlist: BookmarkIcon,
  Profile: ProfileIcon,
};
function getTabBarIcon(routeName: string) {
  const Icon = icons[routeName as keyof typeof icons];
  return ({ 
    color,
    size,
    focused,
  }: {
    color: string;
    size: number;
    focused: boolean;
  }) =>
    Icon ? (
      <Icon
        width={size}
        height={size}
        color={color}
        fill={focused ? color : 'none'}
      />
    ) : null;
}

export function TabNavigation() {
  const {theme} = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.text,
        tabBarStyle: {
          backgroundColor: theme.background,
          paddingHorizontal: 23.5,
          paddingTop: 15,
          paddingBottom: Math.max(insets.bottom, 15),
          height: 70 + Math.max(insets.bottom, 15),
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          marginTop: 4,
          fontSize: 10,
          fontFamily: 'Gilroy-SemiBold',
        },
        tabBarIcon: getTabBarIcon(route.name),
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Whishlist" component={Whishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
