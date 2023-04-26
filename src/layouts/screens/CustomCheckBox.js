import React,{useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const CustomCheckBox = () => {
    const [active,setinactive]=useState(false)
    const Active=()=>{
       
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={active ? styles.activeColor: styles.inactiveColor} onPress={Active} >
                <View style={styles.container2}>
                </View>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    container2: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius:10


    },
    activeColor:{
           backgroundColor:'black'
    },
    inactiveColor:{
        backgroundColor:'red'
    }

})
export default CustomCheckBox
