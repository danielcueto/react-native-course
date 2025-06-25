import {Dimensions, StyleSheet, View} from 'react-native';

const {width} = Dimensions.get('window');

export function HeaderTab() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer} />
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
  },
});
