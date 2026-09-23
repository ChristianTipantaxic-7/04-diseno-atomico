import React from 'react';

import { Pressable, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant: 'primary' | 'secondary' | 'danger';
}

export default function CustomButton({
  title,
  onPress,
  variant,
}: CustomButtonProps) {
  return (
    <Pressable
      style={[styles.button, styles[variant]]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },

  primary: {
    backgroundColor: '#2196F3',
  },

  secondary: {
    backgroundColor: '#757575',
  },

  danger: {
    backgroundColor: '#F44336',
  },

  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});