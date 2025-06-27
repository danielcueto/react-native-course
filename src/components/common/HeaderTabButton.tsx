import {TouchableOpacity, StyleSheet} from 'react-native';
import Label from './Label';

export function HeaderTabButton({
  text,
  selected = false,
  onPress,
}: {
  selected: boolean;
  text: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={selected ? styles.selectedContainer : undefined}
      activeOpacity={0.8}
    >
      <Label
        size="regular"
        family="extraBold"
        {...(selected ? {style: {color: '#42423F'}} : {})}
      >
        {text}
      </Label>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectedContainer: {
    width: 65,
    height: 41,
    backgroundColor: '#fff',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
