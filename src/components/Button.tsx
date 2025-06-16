import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import Label from './Label';
import {useTheme} from '../context/ThemeContext';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  text: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  fullWidth?: boolean;
}

export function Button({
  text,
  onPress,
  variant = 'primary',
  size = 'large',
  disabled = false,
  style,
  fullWidth = false,
}: ButtonProps) {
  const {theme, currentTheme} = useTheme();

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    };

    const sizeStyles =
      variant === 'text'
        ? {}
        : {
            small: {
              paddingVertical: 8,
              paddingHorizontal: 16,
              height: 32,
            },
            medium: {
              paddingVertical: 14,
              paddingHorizontal: 32,
              height: 48,
            },
            large: {
              paddingVertical: 16,
              paddingHorizontal: 40,
              height: 56,
            },
          };

    const variantStyles = {
      primary: {
        backgroundColor: theme.primary,
      },
      secondary: {
        backgroundColor: theme.gray,
      },
      text: {
        backgroundColor: 'transparent',
      },
    };

    const fullWidthStyle = fullWidth
      ? {width: '100%' as const}
      : variant !== 'text'
      ? {width: 155.5}
      : {};

    const disabledStyle = disabled ? {opacity: 0.5} : {};

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...fullWidthStyle,
      ...disabledStyle,
    };
  };

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return 'gray';
      case 'secondary':
        return 'text';
      case 'text':
        return 'primary';
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'small':
        return 'small';
      case 'medium':
        return 'regular';
      case 'large':
        return 'medium';
    }
  };

  const labelColor =
    currentTheme === 'light' && variant !== 'text'
      ? {...styles.buttonText, color: 'white'}
      : styles.buttonText;

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}>
      <Label
        size={getTextSize() as any}
        family="medium"
        color={getTextColor() as any}
        style={labelColor}>
        {text}
      </Label>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontWeight: '500',
  },
});
