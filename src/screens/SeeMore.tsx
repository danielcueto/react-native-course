import {View} from 'react-native';
import Label from '../components/common/Label';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Button} from '../components/common/Button';

export function SeeMore() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  return (
    <View>
      <Label color="gray">See More Page</Label>
      <Label color="gray">{route.params?.title}</Label>
      <Button
        text="Redirect"
        onPress={() => navigation.navigate(route.params?.screen)}
      />
    </View>
  );
}
