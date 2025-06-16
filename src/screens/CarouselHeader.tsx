import {View, Alert} from 'react-native';
import {StyleSheet} from 'react-native';
import Label from '../components/Label';
import {Button} from '../components/Button';

export function CarouselHeader({text1, text2}: {text1: string; text2: string}) {
  return (
    <View style={carouselStyles.container}>
      <Label size="large" family="medium">
        {text1}
      </Label>
      <Button
        text={text2}
        size="medium"
        variant="text"
        onPress={() => Alert.alert('error: gradle is not defined')}
      />
    </View>
  );
}

const carouselStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});
