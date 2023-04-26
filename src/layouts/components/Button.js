import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const Button = ({ titile,btn }) => {
    return (
        <>
            <TouchableOpacity onPress={btn} style={styles.Btn}>
                <Text style={styles.btnText}>
                    {titile}
                </Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    Btn: {
       height:52,
       width:'100%',
        backgroundColor: '#1BAC4B',
        marginBottom: 20,
        borderRadius: 35,
        justifyContent:'center'
    },
    btnText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: '#fff',
    }
})
export default Button;