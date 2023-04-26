import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const E_WalletCard = () => {
    const navigation=useNavigation()
    // let address = 0
    return (
        <View style={styles.Container} >
            <Card style={styles.Cardconatiner} >
                <Text style={styles.ownerName}>
                    Andrew Ainsely
                </Text>
                <View style={styles.header}>
                    <Text style={styles.visaText}>
                        VISA
                    </Text>
                    <Image style={styles.img} source={require('../../assets/imgs/mastercard-logo.png')} />
                </View>
                <Text numberOfLines={1} style={styles.cardNumber}>.... .... .... 1234</Text>
                <Text style={styles.yourBalanceText}>
                    Your Balance
                </Text>
                <View style={styles.balanceSection}>
                    <Text style={styles.balance}>
                        $9,379
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('TopUpEWalletScreen')} style={styles.TopUp}>
                        <Ionicons size={20} name="stopwatch" />
                        <Text style={styles.TopUpText}>Top Up</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    // Container: {
    //     padding: 15
    // },
    Cardconatiner: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#5dde57'
    },
    ownerName: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#fff'
    },
    cardNumber: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Poppins-Bold',


    },
    img: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
    header: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0
    },
    visaText: {
        alignSelf: 'center',
        fontSize: 28,
        marginRight: 5,
        fontFamily: 'Poppins-Bold',
        color: '#fff'

    },
    yourBalanceText: {
        marginTop: 10,
        fontFamily: 'Poppins-Bold',
        color: '#fff'
    },
    balanceSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center'
    },
    balance: {
        fontSize: 40,
        fontFamily: 'Poppins-SemiBold',
        color: '#fff',
        alignSelf: 'center'
    },
    TopUp: {
        paddingHorizontal: 28,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center'

    },
    TopUpText:{
        marginLeft:3,
        fontFamily:'Poppins-Bold'
    }
})
export default E_WalletCard;