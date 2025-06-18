import {Modal, StyleSheet, View} from 'react-native';
import {Button} from '../common/Button';
import {useTheme} from '../../context/ThemeContext';
import {ReactNode} from 'react';

interface MyModalProps {
  visible: boolean;
  setVisible: (v: boolean) => void;
  children: ReactNode;
}

export function MyModal({visible, setVisible, children }: MyModalProps) {
  const {theme} = useTheme();

  return (
    <Modal
      animationType="slide"
      hardwareAccelerated={true}
      navigationBarTranslucent={true}
      transparent={true}
      statusBarTranslucent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {backgroundColor: theme.background}]}>
          {children}
          <Button onPress={() => setVisible(!visible)} text="Close" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 30,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '60%',
  },
});
