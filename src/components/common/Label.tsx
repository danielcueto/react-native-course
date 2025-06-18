import React from 'react';
import {Text, TextStyle, StyleProp} from 'react-native';
import {fonts} from '../../theme/fonts';
import {useTheme} from '../../context/ThemeContext';

interface LabelProps {
  children: React.ReactNode;
  size?: keyof typeof fonts.size;
  family?: keyof typeof fonts.family;
  color?: 'text' | 'primary' | 'gray' | 'muted' | 'accent';
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

const Label: React.FC<LabelProps> = ({
  children,
  size = 'regular',
  family = 'regular',
  color = 'text',
  style,
  numberOfLines,
  ellipsizeMode,
}) => {
  const {theme} = useTheme();

  const textStyle: TextStyle = {
    fontSize: fonts.size[size],
    fontFamily: fonts.family[family],
    color: theme[color],
  };

  return (
    <Text
      style={[textStyle, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {children}
    </Text>
  );
};

export default Label;
