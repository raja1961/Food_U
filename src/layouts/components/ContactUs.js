import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const DATA = [
    {
        id: 0,
        image: require('../../assets/imgs/headPhone.png'),
        method: 'Customer Service',
       
    },
    {
        id: 1,
        image: require('../../assets/imgs/whatsapp.png'),
        method: 'WhatsAppS',
       
    },
    {
        id: 2,
        image: require('../../assets/imgs/webSite.png'),
        method: 'Website',
        
    },
    {
        id: 3,
        image: require('../../assets/imgs/facebook.png'),
        method: 'Facebook',
    },
    {
        id: 4,
        image: require('../../assets/imgs/Twitter.png'),
        method: 'Twitter',
    },
    {
        id: 5,
        image: require('../../assets/imgs/InsatGram.png'),
        method: 'Instagram',
    },
]
const ContactUs = () => {
    const navigation=useNavigation();
    return (
        <>
            
            <View style={styles.mainContainer}>
                {
                    DATA.map((item,) => {
                        return (
                            <TouchableOpacity key={item.id.toString()}  style={ styles.Active} >
                                <Image style={styles.paypleImage} source={item.image} />
                                <Text onPress={item.id==0 ?()=>navigation.navigate('CustomerSupport') :undefined } style={styles.paypleText}>{item.method}</Text>

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
export default ContactUs;