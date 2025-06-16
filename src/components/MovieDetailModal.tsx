import {Image, View} from 'react-native';
import Label from './Label';
import {StyleSheet} from 'react-native';

interface MovieDetailModalProps {
  title: string;
  descripcion: string;
  imageUrl: string;
}

export function MovieDetailModal({
  title,
  descripcion,
  imageUrl,
}: MovieDetailModalProps) {
  return (
    <View style={styles.container}>
      <Label size="large" family="extraBold" style={styles.title}>
        {title}
      </Label>
      <View style={styles.content}>
        <Image
          source={{uri: imageUrl}}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.descriptionContainer}>
          <Label size="small" style={styles.description}>
            {descripcion}
          </Label>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
    marginRight: 'auto',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 12,
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 12,
  },
  description: {
    lineHeight: 20,
    textAlign: 'left',
  },
});
