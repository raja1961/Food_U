import { useNavigation } from "@react-navigation/native";
import React, { useRef,useEffect } from "react";
import { View, Button, TouchableOpacity,Text,StyleSheet,Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
 
const BottomSheet=()=> {
    const navigation=useNavigation()
  
  return (
    <View style={styles.container}>
        <Text style={styles.header}>
           Location
        </Text>
        <View style={styles.locationTextView}>
            <Text style={styles.locationText}>Time Squire NYC,Manhattan</Text>
            <Ionicons style={styles.locationIcon} name="location" />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Create New Pin')} style={styles.btn}>
            <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
    </View>

  );
}
const styles=StyleSheet.create({
    container:{
       padding:8
    },
    header:{
        textAlign:'center',
        fontFamily:'Poppins-SemiBold',
        fontSize:22,
        marginBottom:10
    },
    locationTextView:{
        flexDirection:'row',
        height:55,
        width:'100%',
        justifyContent:'space-between',
        backgroundColor:'#f5f5f5',
        paddingLeft:15,
        paddingRight:15,
        alignItems:'center',
        borderRadius:10,
        marginBottom:30
    },
    locationText:{
        // textAlign:'center',
        fontFamily:'Poppins-SemiBold',
        fontSize:15
    },
    locationIcon:{
        fontSize:24
    },
    btn:{
        height:55,
        width:Dimensions.get('screen').width-50,
        backgroundColor:'#1a8a38',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        borderRadius:60
    },
    btnText:{
        fontFamily:'Poppins-SemiBold',
        color:'#ffff',
        textAlign:'center'
    
      }
})
export default BottomSheet;