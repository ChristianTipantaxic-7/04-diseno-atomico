// CHECK [RETO 2]: Diseña una tarjeta de información (InfoCard) que
// reciba un título, opcionalmente una imagen y contenido hijo
// (children) que se renderice dentro de la tarjeta.
//
// Pregunta 1: ¿Qué tipo de TypeScript usarías para aceptar contenido
//              hijo arbitrario (texto, otros componentes)?
// Pregunta 2: ¿Cómo evitas que el layout se rompa cuando NO se pasa
//              imagen?
// Prompt IA: "No me des la respuesta. Hazme 3 preguntas para descubrir
//              cómo aceptar children y contenido opcional en un
//              componente reutilizable."

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// CHECK: Define la interface InfoCardProps
interface InfoCardProps {
  title: string;
  image?: string;
  children: React.ReactNode;
}

// CHECK: Implementa el componente
export default function InfoCard({
  title,
  image,
  children,
}: InfoCardProps) {
  return (
    <View style={styles.card}>
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </View>
  );
}

// CHECK: Define los estilos
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  content: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});