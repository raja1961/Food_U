import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
const DeliverAddress = ({ item, value }) => {
    return (
        <>
            <Card style={styles.container}>
                {
                    value == false ? undefined :
                        <View>
                            <Text style={styles.Text}>
                                Deliver To
                            </Text>
                            <View style={{ borderColor: '#d6d6d6', borderBottomWidth: 3 }} />
                        </View>
                }
                <View style={styles.addressView}>
                    <View style={styles.locationImgView}>
                        <Image style={styles.locationImg} source={require('../../assets/imgs/locationImg.png')} />
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.HomeText}>Home</Text>
                            <Text style={styles.defaultText}>Default</Text>
                        </View>
                        <Text style={styles.TimeSquireText}>Time Squire NYC, MANHATTAN,27</Text>
                    </View>
                    {
                    value==false?
                    <Image style={styles.ediiconImg} source={require('../../assets/imgs/editicon4.png')} />
                    :
                        <Ionicons style={styles.ediiconImg} color={'#1a8a38'} name="chevron-forward-outline" size={25} />
                }
                </View>
            </Card>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius:15
    },
    Text: {
        paddingVertical: 10,
        // paddingHorizontal:18,
        backgroundColor: '#fff',
        borderRadius: 20,
        fontFamily: 'Poppins-Bold',
        fontSize: 18
    },
    addressView: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 10,

    },
    locationImg: {
        height: 40,
        width: 40,
        borderRadius: 50

    },
    locationImgView: {
        backgroundColor: '#e4f0e6',
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60

    },
    HomeText: {
        fontSize: 16,
        marginHorizontal: 8,
        fontFamily: 'Poppins-SemiBold'
    },
    defaultText: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: '#e4f0e6',
        color: '#1a8a38'
    },
    TimeSquireText: {
        fontSize: 14,
        marginHorizontal: 8,
        color: '#b5bab6',
        fontFamily: 'Poppins-SemiBold'
    },
    ediiconImg: {
        height: 40,
        width: 40,
        position: 'absolute',
        right: -20,
        // paddingLeft:10
    }
})
export default DeliverAddress;                                          