import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

function pesan ()
  {
    alert('Masokk Si-Lajang');
  }

  function pasen()
  {
    alert('Masok Boss');
  }
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}><Text style={{  fontWeight:'bold'}}>Selamat</Text> Datang Si-Lajang</Text>

      <Image
        source={require('@/assets/images/react-logo.png')}
        style={{ width: 400, height: 400 }}
      />

      <Button
        title="Masokk"
        onPress={pesan}
      />

      <TouchableOpacity style={{backgroundColor:'red', padding:10}} onPress={pasen}><Text style={{color:'white', textAlign:'center'}}>Entry boss</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', // Warna background putih
    height : 1000,    
  },
});
