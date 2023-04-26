import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
const Order = ({ item}) => {
    // console.log('data===',item);
    const navigation = useNavigation()
    return (
        <View >


            <Card style={styles.Cardcontainer} >

                <View style={styles.container}>
                    <Image style={styles.CardImage} source={require('../../assets/imgs/MixedSalad.jpg')} />

                    <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                        <Text style={styles.title}>{item?.comletedTitle}</Text>
                        <Text style={styles.Item}>4 items | 2.7KM</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Price}>
                                $22.00
                            </Text>
                            {
                                item?.statusCancel == 'Cancelled' ?
                                    <Text style={styles.statusCancel} >
                                        {item?.statusCancel}
                                    </Text> :
                                    item?.statusCancel == 'Active' ? <Text style={styles.Status} >
                                        Paid
                                    </Text> :
                                        <Text style={styles.Status} >
                                            {item?.statusCancel}
                                        </Text>
                            }
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 2, marginTop: 10, borderColor: '#f0f2f5' }} />
                {
                    item?.statusCancel == 'Completed' ?
                        <View style={styles.btnView}>
                            <TouchableOpacity style={styles.rivewBtn}>
                                <Text style={styles.btnText}>Leave A Review</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.rivewBtn, { backgroundColor: '#1BAC4B' }]}>
                                <Text style={[styles.btnText, { color: '#fff', }]}>Order Again</Text>
                            </TouchableOpacity>
                        </View> : item?.statusCancel == 'Active' ?
                            <View style={styles.btnView}>
                                <TouchableOpacity onPress={() => navigation.navigate('CancelOrder')} style={styles.rivewBtn}>
                                    <Text style={styles.btnText}>Cancel Order</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.rivewBtn, { backgroundColor: '#1BAC4B' }]}>
                                    <Text style={[styles.btnText, { color: '#fff', }]}>Track Driver</Text>
                                </TouchableOpacity>
                            </View> : undefined
                }
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    Cardcontainer: {
        margin: 10,
        borderRadius: 15,
        marginVertical: 10
    },
    container: {
        flexDirection: 'row',
        padding: 18
    },
    CardImage: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 20

    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    Item: {
        fontSize: 16
    },
    Price: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        marginRight: 10,
        color: '#1BAC4B',
        alignSelf: 'center'
    },
    Status: {
        paddingHorizontal: 18,
        paddingVertical: 3,
        backgroundColor: '#1BAC4B',
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        borderRadius: 10

    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingTop: 0
    },
    rivewBtn: {
        paddingVertical: 7,
        paddingHorizontal: 43,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1BAC4B',
        marginTop: 20
    },
    btnText: {
        color: '#1BAC4B'
    },
    statusCancel: {
        paddingHorizontal: 18,
        paddingVertical: 3,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#FA9595',
        fontFamily: 'Poppins-SemiBold',
        borderRadius: 10,
        borderColor: '#FA9595',
        borderWidth: 1
    }

})
export default Order;    