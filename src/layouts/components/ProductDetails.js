import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import CustomHeader from "../components/CustomHeader";
import Ionicons from 'react-native-vector-icons/Ionicons'
const ProductDetails = ({name}) =>{
    // console.log('name=====================',name.params.title);
    return(
        <>
        <View >
        <View style={{ zIndex: 3 }}>
                    <CustomHeader name={'send-outline'} name2={'heart-outline'} />
                </View >
                <Image style={styles.img} source={require('../../assets/imgs/MixedSalad.jpg')} />
                <View style={styles.container}>
                    <TouchableOpacity style={styles.titleView}>
                        <Text style={styles.title}>
                           {name.params.title}
                        </Text>
                        <Ionicons style={styles.BackIcon} name="chevron-forward-outline" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.titleView} >
                        <Ionicons name="star" size={28} color={'#F8A319'} />
                        <Text style={styles.rating} >
                            4.8
                        </Text>
                        <Text style={styles.TotalReviews}>
                            (4.8k reviews)
                        </Text>
                        <Ionicons style={styles.BackIcon} name="chevron-forward-outline" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.titleView} >
                        <Ionicons name="location" size={28} color={'#3CC669'} />
                        <View>
                            <Text style={styles.rating} >
                                4.8 KM
                            </Text>
                            <Text style={styles.TotalReviews}>
                                Deliver Now  |
                                <Ionicons color={'#3CC669'} size={25} name="bicycle" />
                                <Text>
                                    $ 2.00
                                </Text>
                            </Text>
                        </View>
                        <Ionicons style={styles.BackIcon} name="chevron-forward-outline" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.titleView} >
                        <Ionicons name="pricetags" size={28} color={'#3CC669'} />
                        <Text style={styles.rating} >
                            Offers are available
                        </Text>

                        <Ionicons style={styles.BackIcon} name="chevron-forward-outline" size={25} />
                    </TouchableOpacity>
                    <Text style={styles.rating}>
                        For You
                    </Text>
                </View>
        </View>
        </>
    )
}
const styles=StyleSheet.create({
    container: {
        padding: 14
    },
    img: {
        width: '100%',
        resizeMode: 'cover',
        marginTop: -60,
        height: 400


    },
    BackIcon: {
        position: 'absolute',
        right: 0
    },
    titleView: {
        flexDirection: 'row',
        marginVertical: 6
        // justifyContent:'space-between'

    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    rating: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        marginHorizontal: 10
    },
    TotalReviews: {
        fontSize: 19,
        alignSelf: 'center',
    }
})
export default ProductDetails;  