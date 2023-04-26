
import React,{useState,useEffect} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import CustomHeader from '../components/CustomHeader';



const OTPCodeVerificationScreen = ({navigation},title) => {
    const [Count,setCount]=useState(59)
    useEffect(()=>{
        const Timer=
        Count>0 && setInterval(()=>setCount(Count-1),1000);
        return ()=>clearInterval(Timer);
    },[Count]);
    return (
        <View>
            <CustomHeader title={'OTP Code Verification'} />
            <View style={styles.container}>

            <Text style={styles.headerText}>Code has been to +1 111******99</Text>
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
            <Text style={styles.ResendCode}>Resend code in<Text style={{color:'#1a8a38'}}>{Count}</Text><Text> s</Text></Text>
            <TouchableOpacity style={styles.verifyBtn} onPress={()=>navigation.navigate('Fill Your Profile')}>
                <Text style={styles.verifyBtnText}>
                    Verify
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
        marginTop: 50,
        fontSize: 17,
        fontFamily:'Poppins-SemiBold'
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
        justifyContent:'center'

        
    },
    verifyBtnText:{
        textAlign:'center',
        fontSize:18,
        color:'#fff',
        fontFamily:'Poppins-SemiBold'
    }
});

export default OTPCodeVerificationScreen

