import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './MainCarousel';
import {StyleSheet} from 'react-native';


export function CarouselHeader({text1, text2}: {text1: string; text2: string}) {
  return (
    <View style={carouselStyles.container}>
      <Text style={carouselStyles.text}>{text1}</Text>

      <TouchableOpacity style={carouselStyles.btn} onPress={() => {Alert.alert('Could you?')}}>
        <Text style={[styles.text, {color: '#f2c94c'}]}>{text2}</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Gilroy-Medium',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
