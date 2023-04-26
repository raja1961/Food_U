import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Alert, Modal, Pressable } from "react-native";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomHeader from "../components/CustomHeader";
const EnterYourPinScreen = ({route}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <CustomHeader title={'Enter Your Pin'} />
            <View style={styles.container}>
                <Text style={styles.headerText}>Enter Your Pin to Top Up</Text>
                <OTPInputView
                    style={styles.OTPInputView}
                    pinCount={4}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(code) => {
                    }}
                />
                <TouchableOpacity
                    onPress={() => setModalVisible(true)} style={styles.verifyBtn} >
                    <Text style={styles.verifyBtnText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Ionicons style={styles.walletIcon} name="ios-wallet" />
                        <Text style={styles.status}>
                            Top Up Sucessfull
                        </Text>
                        <Text style={styles.topUpAmount}>You have Sucessfully top up {"\n"} e-wallet for {route.params.Price}</Text>
                        <TouchableOpacity
                            style={styles.okBtn}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.verifyBtnText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:50
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },
    OTPInputView: {
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
    },
    headerText: {
        marginTop: 50,
        fontSize: 17,
        fontFamily: 'Poppins-SemiBold'
    },
    ResendCode: {
        fontSize: 17,
        marginBottom: 80
    },
    verifyBtn: {
        height: 50,
        width: Dimensions.get('screen').width - 20,
        backgroundColor: '#199e1e',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 10
    },
    verifyBtnText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold'
    },
    modalView: {
        margin: 120,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        height: 320,
        width: 250,
        shadowOffset: {
            width: 0,
            height: 255
        },
        alignSelf: 'center'
    },
    walletIcon: {
        padding: 30,
        backgroundColor: '#4ac761',
        borderRadius: 60,
        color: '#fff',
        fontSize: 40,
        marginTop:10
    },
    status: {
        marginTop: 20,
        color: '#4ac761',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold'
    },
    okBtn: {
        height: 50,
        width: '100%',
        backgroundColor: '#199e1e',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 8,
        position:'absolute',
        bottom:15
    },
    topUpAmount:{
        textAlign:'center',
        fontSize:16,
    }
})
export default EnterYourPinScreen;
