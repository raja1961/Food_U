import React from "react";
import { Text,View,Image,ScrollView,StyleSheet, } from "react-native";
import CustomHeader from "../components/CustomHeader";
const SpecialOffer=[
    {
        image:require('../../assets/imgs/SpecialOfferImage.jpg')
    },
    {
        image:require('../../assets/imgs/SpecialOfferImage2.jpg')
    },
    {
        image:require('../../assets/imgs/SpecialOfferImage3.jpg')
    },
    {
        image:require('../../assets/imgs/SpecialOfferImage4.jpg')
    }
]
const SpecialOffersScreen=()=>{
    return(
        <>
        <CustomHeader title={"Special Offers"} />
        <ScrollView>
         {
            SpecialOffer.map((item)=>{
                return (
                    <View style={styles.container}>
                        <Image style={styles.image} source={item.image} />
                    </View>
                )
            })
         }   
        </ScrollView>
        </>
        
    )
}
const styles=StyleSheet.create({
    container:{
        padding:10
    },
    image:{
        resizeMode:'cover',
        height:150,
        width:400,
        borderRadius:20
    }
})
export default SpecialOffersScreen;