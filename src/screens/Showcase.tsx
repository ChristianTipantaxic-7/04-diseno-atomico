// TODO [RETO FINAL]: Integra los 4 componentes (CustomButton, InfoCard,
// StyledInput, AlertBox) en una sola pantalla para probarlos.
//
// Pregunta 1: ¿Cómo organizas el ScrollView para que no se corte el contenido?
// Pregunta 2: ¿Qué estado necesitas para probar el StyledInput y el AlertBox aquí?
// Prompt IA: "No me des la respuesta. Hazme 3 preguntas para descubrir
//             cómo organizar múltiples componentes dentro de un contenedor seguro (SafeArea)."

import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
// TODO: Importa los componentes

export default function Showcase() {
  // TODO: Define estados de prueba
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* TODO: Renderiza CustomButton */}
        {/* TODO: Renderiza InfoCard */}
        {/* TODO: Renderiza StyledInput */}
        {/* TODO: Renderiza AlertBox */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF8E7' },
  container: { padding: 20, gap: 20 }
});
