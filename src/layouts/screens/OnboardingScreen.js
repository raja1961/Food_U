import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OnboardingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/imgs/workThrough.png')} />
            <Text style={styles.headerText}>Let's you in</Text>

            <TouchableOpacity style={styles.Facebook}>
                <MaterialCommunityIcons color={'#346beb'} size={25} name="facebook" />
                <Text style={styles.FacebookText}>Continue with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Facebook}>
                <Image style={styles.googleIcon} source={require('../../assets/imgs/googleIcon.png')} />
                <Text style={styles.FacebookText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Facebook}>
                <MaterialCommunityIcons color={'black'} size={25} name="apple" />
                <Text style={[styles.FacebookText, { marginHorizontal: -3, paddingTop: 7.5 }]}>Continue with Apple</Text>
            </TouchableOpacity>

            <View style={styles.orTextBorderView}>
                <Text style={styles.orTextBorder}>____________________________</Text>
                <Text style={styles.orText}> or </Text>
                <Text style={styles.orTextBorder}>____________________________</Text>
            </View>
            
            <TouchableOpacity  style={styles.SignInButton}>
                <Text style={styles.SignInButtonText}>sign in with phone number</Text>
            </TouchableOpacity>
            <View style={styles.DontHaveAccount}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('CreateAccountScreen')}>
                    <Text style={styles.SignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 20

    }
    ,
    img: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        alignSelf:'center'
    },
    headerText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 40,
        textAlign: 'center',
        color: '#363636',

    },
    Facebook: {
        height: 50,
        borderWidth: 0.5,
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10

    },
    FacebookText: {
        paddingHorizontal: 8,
        fontFamily: 'Poppins-Bold',
        color: '#4a4949',
        fontSize: 15
    },
    googleIcon: {
        resizeMode: 'cover',
        height: 20,
        width: 20,
        borderRadius: 12,
        marginRight: 2
    },
    SignInButton: {
        height: 50,
        // borderWidth: 1,
        alignItems: 'center',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: '#3ead4a'
    },
    SignInButtonText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold'
        // fontFamily:'Poppins-Bold'
    },
    DontHaveAccount: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    SignUp: {
        marginHorizontal: 8,
        color: '#3ead4a',
        fontFamily: 'Poppins-SemiBold'
    },
    orTextBorderView: {
        flexDirection: 'row'
    },
    orText: {
        alignSelf: 'center',
        fontSize: 20
    },
    orTextBorder: {
        color: '#c7c7c5'
    }
})
export default OnboardingScreen