import React from 'react';
import { View, Text, ColorValue } from 'react-native';
import { THEME } from '../../theme';

interface Props {
    label: string;
    value: string;
    colorValue?: ColorValue;
}

import { styles } from './styles';

export function DuoInfo({label, value, colorValue = THEME.COLORS.TEXT}: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>
            {label}
        </Text>

        <Text style={[styles.value, {color: colorValue}]}
          numberOfLines={1}
          >
             {value}
        </Text>
    </View>
  );
}