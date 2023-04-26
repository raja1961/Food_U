import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import CustomHeader from "../components/CustomHeader";
import Ionicons from 'react-native-vector-icons/Ionicons'

const DATA = [
    {
        id: 0,
        image: require('../../assets/imgs/paypleimg.png'),
        method: 'Payple',
        status: 'Connected'
    },
    {
        id: 1,
        image: require('../../assets/imgs/googleIcon.png'),
        method: 'Google Pay',
        status: 'Connected'
    },
    {
        id: 2,
        image: require('../../assets/imgs/apple.png'),
        method: 'Apple',
        status: 'Connected'
    },
    {
        id: 3,
        image: require('../../assets/imgs/mastercard.png'),
        method: '.... .... .... .... 4651',
        status: 'Connected'
    },
    {
        id: 4,
        image: require('../../assets/imgs/mastercard.png'),
        method: '.... .... .... .... 4651',
        status: 'Connected'
    },
    {
        id: 5,
        image: require('../../assets/imgs/mastercard.png'),
        method: '.... .... .... .... 4651',
        status: 'Connected'
    },
]

const PaymentMethodScreen = () => {
    const [select, setSelect] = useState()

    const onSelect = (item) => {
        setSelect(item.id)
    }

    return (
        <>
            <CustomHeader title={'Payment Methods'} name={'scan'} />
            <View style={styles.mainContainer}>
                {
                    DATA.map((item, index) => {
                        return (
                            <TouchableOpacity key={item.id.toString()} onPress={() => onSelect(item)} style={select === index ? styles.Active : styles.deActive}>
                                <Image style={styles.paypleImage} source={item.image} />
                                <Text style={styles.paypleText}>{item.method}</Text>
                                <Text style={styles.ConnectedText}>
                                    {item.status}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 10
    },
    Active: {
        flexDirection: 'row',
        height: 60,
        width: '90%',
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#2c9c46',  
    },
    deActive: {
        flexDirection: 'row',
        height: 60,
        width: '90%',
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10
    },
    paypleImage: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginLeft: 7

    },
    paypleText: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: 10
    },
    ConnectedText: {
        position: 'absolute',
        right: 10,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#2c9c46'

    }
})
export default PaymentMethodScreen;