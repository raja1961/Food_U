import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
const CustomHeader = ({title,name,name2,name3}) => {
    // console.log('-=======',title);
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack('CreateAccountScreen')}>
            <Ionicons name="arrow-back-outline" size={36} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <Ionicons name={name3} style={{position:'absolute',right:100}} size={30} />
            <Ionicons name={name2} style={{position:'absolute',right:60}} size={30} />

            <Ionicons name={name} style={{position:'absolute',right:10}} size={30} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: '#fff',
        marginTop:20,
        marginLeft:8
    },
    headerText: {
        marginHorizontal: 30,
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold'
    }

})
export default CustomHeader