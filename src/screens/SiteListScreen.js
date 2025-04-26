import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const sites = [
  { id:'1', name:'Site A' },
  { id:'2', name:'Site B' },
  { id:'3', name:'Site C' },
];

export default function SiteListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Sites</Text>
      <FlatList
        data={sites}
        keyExtractor={i=>i.id}
        renderItem={({ item })=>(
          <TouchableOpacity style={styles.row} onPress={()=>navigation.navigate('Health', { id: item.id })}>
            <Text style={styles.siteName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#121212', padding:20 },
  title:{ fontSize:22, color:'#B67AE0', marginBottom:10 },
  row:{ padding:15, backgroundColor:'#1E1E1E', borderRadius:5, marginBottom:10 },
  siteName:{ color:'white', fontSize:18 },
});
