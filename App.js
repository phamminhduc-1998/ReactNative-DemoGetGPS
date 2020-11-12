import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';


{/*
Installation
expo install expo-location  cho phép đọc thông tin định vị từ thiết bị
 */}

export default function App() {
  const [longintude, setLongintude] = useState('longintude');//Kinh độ
  const [latitude, setLatitude] = useState('latitude'); //Vỹ độ


  let getGPS = () => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
      setLatitude(location.coords.latitude);
      setLongintude(location.coords.longitude);
    })();
  }


  return (
    <View style={styles.container}>
      <Text>Vỹ độ : {latitude} : Kinh độ : {longintude}</Text>
      <Button title="Get Location" onPress={() => {
        getGPS();
      }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
