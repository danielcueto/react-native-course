import {Image, StyleSheet, View} from 'react-native';
import {Button} from './Button';
import Hero from '../../../assets/images/oferta.png';
import Label from './Label';

export function BlackFriday() {
  return (
    <View style={styles.container}>
      <Image source={Hero} style={styles.image} />
      <Label family="semiBold" size="medium" style={styles.title}>
        Black friday is here
      </Label>
      <Label style={styles.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ea,
        unde dolor neque nobis omnis libero autem repellat eaque, minima tempora
        officiis odio aperiam possimus deserunt esse aliquam odit
        necessitatibus!
      </Label>
      <Button text="CheckDetails" fullWidth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
  },
  image: {
    width: 380,
    height: 191,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 6,
  },
  description: {
    paddingBottom: 10,
  },
});
