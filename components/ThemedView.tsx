import { type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { View } from '@gluestack-ui/themed';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {


  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
