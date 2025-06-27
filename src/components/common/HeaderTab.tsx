import {Dimensions, StyleSheet, View} from 'react-native';
import {HeaderTabButton} from './HeaderTabButton';
import {useState} from 'react';

const {width} = Dimensions.get('window');

export function HeaderTab() {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {['All', 'Romance', 'Sports', 'Kids', 'Horror'].map((val, index) => (
          <HeaderTabButton key={val} selected={selected === index} text={val} onPress={() => setSelected(index)}/>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 47,
    borderRadius: 90,
    backgroundColor: 'rgba(66, 66, 63, 0.4)',
    position: 'absolute',
    top: 40,
    alignSelf: 'center',
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 90,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
