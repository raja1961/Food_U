import React,{useState,useEffect} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import CustomHeader from '../components/CustomHeader';


const CreatePinScreen = ({navigation},title) => {
    
    return (
        <View>
            <CustomHeader title={'Create New Pin'} />
            <View style={styles.container}>

            <Text style={styles.headerText}>Add a Pin number to make your account {'\n'} more secure</Text>
            <OTPInputView
                style={styles.OTPInputView}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                    // console.log(`Code is ${code}, you are good to go!`)
                }}
            />
           
            <TouchableOpacity style={styles.verifyBtn} onPress={()=>navigation.navigate('BottomTab')}>
                <Text style={styles.verifyBtnText}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // flex:1,
        // backgroundColor:'#ffff'
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },
    OTPInputView:{
        width: '80%',
        height: 130,
    },

    borderStyleHighLighted: {
        borderColor: "red",
    },
    underlineStyleBase: {
        width: 60,
        height: 45,
        fontSize: 16,
        borderBottomWidth: 1,
        color: 'black',
        backgroundColor: '#d7d8d9',
        fontFamily: 'Poppins-SemiBold',
        borderRadius: 9,
    },

    underlineStyleHighLighted: {
        //   borderColor:'black',
    },
    headerText: {
        marginTop: 70,
        fontSize: 17,
        fontFamily:'Poppins-SemiBold',
        textAlign:'center',
        marginBottom:20
    },
    ResendCode:{
        fontSize:17,
        marginBottom:80
    },
    verifyBtn:{
        height:50,
        width:Dimensions.get('screen').width-20,
        backgroundColor:'#199e1e',
        borderRadius:30,
        justifyContent:'center',
        marginTop:30

        
    },
    verifyBtnText:{
        textAlign:'center',
        fontSize:18,
        color:'#fff',
        fontFamily:'Poppins-SemiBold'
    }
});

export default CreatePinScreen

