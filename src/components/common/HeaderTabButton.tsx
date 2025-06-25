import {TouchableOpacity} from 'react-native';
import Label from './Label';

export function HeaderTabButton({selected = false}: {selected: boolean}) {
  if (selected) {
    return <Label>MIau miau KItyy</Label>;
  } else {
    return (
      <TouchableOpacity>
        <Label size="medium">Opcions</Label>
      </TouchableOpacity>
    );
  }
}
