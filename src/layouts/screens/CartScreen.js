import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import ProductComponent from "../components/ProductComponent";
import ProductList from '../../utils/JSONDATA/ListProduct.json'
import Swipeable from 'react-native-gesture-handler/Swipeable'

// import Cart from '../../utils/JSONDATA/Notification.json'
const CartScreen = () => {
    // const [value, setValu] = useState()
    // const CartValue=(item)=>{
    //     console.log(item);
    // }
    // useEffect(()=>{
    //     CartValue
    // },[])
    const renderRight=()=>{
        return(
            <View></View>
        )
    }
    return (
        <>
            <CustomHeader title={"My Cart"} name={"ellipsis-horizontal-circle-outline"} />
            <ScrollView style={{ marginRight: 10, marginLeft: 10 }}>
                {

                    ProductList.length > 0 ? (
                        ProductList.map((item, id) => {
                            // console.log(id);
                            return (
                               
                                    <View key={item.id.toString()}>
                                      
                                        <Swipeable renderRightActions={renderRight} >
                                        <ProductComponent data={item} value={false} /> 
                                        </Swipeable>
                                       
                                           
                                    
                                    </View>
                                
                            )
                        })

                    ) :  <View style={styles.container}>
                    <Image style={styles.Image} source={require('../../assets/imgs/copy.png')} />
                    <Text style={{ marginTop: 8, color: '#3a3b3a', fontFamily: 'Poppins-SemiBold', fontSize: 20 }}>
                        Empty
                    </Text>
                </View>
                   
                }
            </ScrollView>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    Image: {
        // resizeMode:'cover',
        height: 150,
        width: 150,
    }
})
export default CartScreen;