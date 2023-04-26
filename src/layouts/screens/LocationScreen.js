import React, { useRef,useEffect } from "react";
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import { View, StyleSheet, Text, Dimensions,Button,TouchableOpacity } from "react-native";
// import MapView from 'react-native-maps';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

;


const LocationScreen = () => {
  

  coords ={
    latitude: 37.78825,
    longitude: -122.4324,
    
  }
  // console.log('=============',coords);
  return (
    <>
    <View style={styles.container}>
     <MapView
      //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       showsUserLocation={true}
       showsMyLocationButton={true}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,

       }}
     >
      <Marker coordinate={coords}/>
     </MapView>
   </View>
   </>
    
  );
};
const styles = StyleSheet.create({
  container: {
 flex:1
  },
  map: {
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height-130
  },
  btn:{
    height:60,
    width:200,
    backgroundColor:'#1a8a38',
    justifyContent:'center',
    alignSelf:'center'
  },
  btnText:{
    fontFamily:'Poppins-SemiBold',
    color:'#ffff',
    textAlign:'center'

  }
 });



export default LocationScreen;
