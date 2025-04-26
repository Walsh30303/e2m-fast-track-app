import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SiteHealthScreen({ route }) {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Site {id} Health Overview</Text>
      <Text style={styles.status}>▶︎ Cylinder: OK</Text>
      <Text style={styles.status}>▶︎ Element: OK</Text>
      <Text style={styles.status}>▶︎ Thermostat: OK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#121212', padding:20 },
  title:{ fontSize:22, color:'#B67AE0', marginBottom:20 },
  status:{ color:'white', fontSize:16, marginBottom:10 },
});
