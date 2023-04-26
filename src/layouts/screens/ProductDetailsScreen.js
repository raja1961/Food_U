import React from "react";
import {View, StyleSheet, ScrollView,Text} from "react-native";
import SujesstedProduct from "../components/SujesstedProduct";
import ProductList from '../../utils/JSONDATA/ListProduct.json'
import ProductDetails from "../components/ProductDetails";
import ProductComponent from "../components/ProductComponent";
import Button from '../components/Button'
const DATA=[
    {
        id:0,
        menu:'Menu'
    },
    {
        id:1,
        title:"Special Bond Salad",
        price:"$10.50",
        status:"New"
    },
    {
        id:2,
        title:"Special Pasta Salad",
        price:"$10.50",
        
    },,
    {
        id:3,
        title:"Special Caesar Salad",
        price:"$10.50",
        
    },
    {
        id:4,
        item:'Drink'
    },
    {
        id:5,
        title:"Fresh Avocado Juice",
        price:"$10.50",
        status:"Promo"
    },
    {
        id:6,
        title:"Fresh Orange Juice",
        price:"$10.50",
       
    },
    {
        id:7,
        title:"Fresh Mango Juice",
        price:"$10.50",
    },
    {
        id:8,
        title:"Fresh Orange Juice",
        price:"$10.50",
    }
]
const ProductDetailsScreen = ({route,navigation}) => {
    return (
        <>
            <ScrollView >
                <View>
                    <ProductDetails name={route} />
                    <ScrollView horizontal>
                        {
                            ProductList.map((item) => {
                                return (
                                    <View key={item.id.toString()}>
                                        <SujesstedProduct  data={item} />
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                {
                    DATA.map((item)=>{
                        return(
                            <View key={item.id.toString()}>
                                {
                                    item.menu=='Menu'?<Text style={styles.menu}>
                                        {item.menu}
                                    </Text>:item.item?
                                    <Text style={styles.menu}>{item.item}</Text>:
                                
                                <ProductComponent Product={item} active={false} />
                                }
                                </View>
                        )
                    })
                }
            </ScrollView>
                <Button titile={"Basket . 3 item's . $24.00"} btn={()=>navigation.navigate('CheckOutsOrders')} />
        </>
    )
}
const styles = StyleSheet.create({
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
    },
    menu:{
        fontFamily:"Poppins-SemiBold",
        fontSize:22,
        marginLeft:10
    }
})
export default ProductDetailsScreen;  