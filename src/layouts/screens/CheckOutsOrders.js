import React from "react";
import { Text, View, StyleSheet, Image,ScrollView,TouchableOpacity } from "react-native";
import CustomHeader from "../components/CustomHeader";
import DeliverAddress from "../components/DeliverAddress";
import { Card } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'

const CheckOutsOrders = () => {
    return (
        <>
            <CustomHeader title={'Checkout Orders'} />
            <ScrollView>
                <DeliverAddress />
                <Card style={styles.container}>
                    <View style={styles.Summery}>
                        <Text style={styles.SummeryText}>
                            Order Summary
                        </Text>
                        <Text style={styles.AddItem}>Add Item</Text>
                    </View>
                    {/* <View style={styles.border} /> */}
                    <Card style={{ borderRadius: 20,margin:10}} >
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.img} source={require('../../assets/imgs/MixedSalad.jpg')} />

                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.title}>
                                    Mixed Vegitable Salad
                                </Text>

                                <Text style={styles.Price}>
                                    $10.00
                                </Text>
                            </View>
                            <Text style={styles.onex}>1X</Text>
                            <Image style={styles.ediiconImg} source={require('../../assets/imgs/editicon4.png')} />
                        </View>
                    </Card>
                    {/* <View style={styles.border} /> */}
                    <Card style={{ borderRadius: 20,margin:10 }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.img} source={require('../../assets/imgs/MixedSalad.jpg')} />

                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.title}>
                                    Mixed Vegitable Salad
                                </Text>

                                <Text style={styles.Price}>
                                    $10.00
                                </Text>
                            </View>
                            <Text style={styles.onex}>1X</Text>
                            <Image style={styles.ediiconImg} source={require('../../assets/imgs/editicon4.png')} />
                        </View>
                    </Card>
                    {/* <View style={styles.border} /> */}
                    <Card style={{ borderRadius: 20,margin:10}} >
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.img} source={require('../../assets/imgs/MixedSalad.jpg')} />

                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.title}>
                                    Mixed Vegitable Salad
                                </Text>

                                <Text style={styles.Price}>
                                    $10.00
                                </Text>
                            </View>
                            <Text style={styles.onex}>1X</Text>
                            <Image style={styles.ediiconImg} source={require('../../assets/imgs/editicon4.png')} />
                        </View>
                    </Card>
                </Card>
                <View style={styles.PaymentMethodView}>
                    <TouchableOpacity style={styles.PaymentMethod}>
                        <Ionicons name="wallet" size={26} color={'#3CC669'} />
                        <Text style={[styles.title,{marginLeft:8}]}>Payment Method</Text>
                        <Text style={[styles.backIcon,{fontFamily:'Poppins-SemiBold',right:35,fontSize:18,color:'#46BC6E'}]}>E-Wallet</Text>
                        <Ionicons style={styles.backIcon} name="chevron-forward-outline" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PaymentMethod}>
                        <Ionicons name="document-attach" size={26} color={'#3CC669'} />
                        <Text style={[styles.title,{marginLeft:8}]}>Get Discount</Text>
                        <Text style={[styles.backIcon,{fontFamily:'Poppins-SemiBold',right:35,fontSize:18,color:'#fff',
                        paddingHorizontal:15,
                        paddingVertical:2,
                        backgroundColor:'#46BC6E',borderRadius:18
                    }]}>Discount 20%</Text>
                        <Ionicons style={styles.backIcon} name="chevron-forward-outline" size={25} />
                    </TouchableOpacity>
                </View>
                <View style={styles.TotalPaymentView}>
                    <View style={styles.TotalPayment}>
                        <Text>Subtotal</Text>
                        <Text>
                            $24.00
                        </Text>
                    </View>
                    <View style={styles.TotalPayment}>
                        <Text>Delivery Fee</Text>
                        <Text>
                            $2
                        </Text>
                    </View>
                    <View style={styles.TotalPayment}>
                        <Text>Promo</Text>
                        <Text>
                            -$4.8
                        </Text>
                    </View>
                    <View style={styles.border} />
                    <View style={styles.TotalPayment}>
                        <Text>Subtotal</Text>
                        <Text>
                            $24.00
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 30
    },
    SummeryText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        marginLeft: 10,

    },
    Summery: {
        flexDirection: 'row',
        // backgroundColor: '#fff',
        marginTop: 10,
        marginBottom:10
    },
    AddItem: {
        fontFamily: 'Poppins-Bold',
        paddingHorizontal: 18,
        paddingVertical: 3,
        color: '#46BC6E',
        position: 'absolute',
        right: 10,
        borderColor: '#46BC6E',
        borderWidth: 2,
        borderRadius: 30,
        fontSize: 18,
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 20,
        marginRight: 10,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
    },
    ediiconImg: {
        position: 'absolute',
        right: 10,
        top: 62,
        height: 30,
        width: 30,
    },
    Price: {
        color: '#46BC6E',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        marginTop: 10
    },

    onex: {
        position: 'absolute',
        right: 10,
        top: 18,
        padding: 5,
        borderColor: '#46BC6E',
        borderWidth: 2,
        borderRadius: 10
    },
    border: {
        borderColor: '#d6d6d6',
        borderBottomWidth: 3,
        marginTop: 20,
        marginBottom: 20
    },
    backIcon:{
        position:'absolute',
        right:0,
        alignSelf:'center'
    },
    PaymentMethod:{
        flexDirection:'row' , 
        padding:10,
        margin:10,
        backgroundColor:'#fff'
    },
    PaymentMethodView:{
        backgroundColor:'#fff',
        marginBottom:15,
        borderRadius:19,
        margin:17
    },
    TotalPayment:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    },
    TotalPaymentView:{
        padding:15,
        margin:15,
        backgroundColor:'#fff'
    }

})
export default CheckOutsOrders;                                          