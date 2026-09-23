import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  variant: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

export default function CustomButton({
  label,
  onPress,
  variant,
  disabled = false,
}: CustomButtonProps) {
  return (
    <Pressable
      style={[styles.button, styles[variant], disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{label}</Text>
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

  disabled: {
    opacity: 0.5,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});