import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import Label from '../common/Label';
import {Button} from '../common/Button';
import {useNavigation} from '@react-navigation/native';
import {IMovie} from '../../utils/service/TMBDService';

type CarouselHeaderProps = {
  text1: string;
  text2: string;
  movies: IMovie[];
};

export function CarouselHeader({text1, text2, movies}: CarouselHeaderProps) {
  const navigation = useNavigation<any>();

  return (
    <View style={carouselStyles.container}>
      <Label size="large" family="medium">
        {text1}
      </Label>
      <Button
        text={text2}
        size="medium"
        variant="text"
        onPress={() =>
          navigation.navigate('SeeMore', {
            title: text1,
            movies,
          })
        }
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
