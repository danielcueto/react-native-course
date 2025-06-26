import {TouchableOpacity} from 'react-native';
import Label from './Label';

export function HeaderTabButton({
  text,
  selected = false,
}: {
  selected: boolean;
  text: string;
}) {
  if (selected) {
    return <Label>{text}</Label>;
  } else {
    return (
      <TouchableOpacity>
        <Label size="medium">Opcions</Label>
      </TouchableOpacity>
    );
  }
}
