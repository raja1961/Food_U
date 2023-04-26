
import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import DeliverAddress from "../components/DeliverAddress";

const DATA = [
    {
        id: 0,
        home: 'Home',
        default: 'Default',
        tmeSquire: 'Time Squire NYC, MANHATTAN,27',
        image: require('../../assets/imgs/locationImg.png')
    },
    {
        id: 1,
        home: 'My Office',
        tmeSquire: '522 Blue Bill Park, PC 4627',
        image: require('../../assets/imgs/locationImg.png')
    },
    {
        id: 2,
        home: 'My Apartment',
        tmeSquire: '21833 Clyde Gallagher, PC 4662',
        image: require('../../assets/imgs/locationImg.png')
    },
    {
        id: 3,
        home: "Parent's House",
        tmeSquire: '6993 Meadow Valley Terra, PC 36',
        image: require('../../assets/imgs/locationImg.png')
    },
    {
        id: 4,
        home: 'My Villa',
        tmeSquire: '61480 Sunbrook Park, PC 5679',
        image: require('../../assets/imgs/locationImg.png')
    },
]

const AddressScreen = () => {
    return (
        <>
            <CustomHeader title={'Address'} />
            <ScrollView>
            {

                DATA.map((item) => {

                    return (
                       
                            <View key={item.id.toString()} style={styles.conatiner}>
                                <DeliverAddress item={item} value={false} />

                            </View>
                       

                    )
                })
            }
             </ScrollView>
        </>

    )
}
const styles = StyleSheet.create({
    conatiner: {
        // padding: 10,
        // flexDirection: 'row',
        // alignItems: 'center',
        // marginVertical: 8,
        // backgroundColor: '#fff',
        // borderRadius: 10
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
        height: 50,
        width: 50,
        position: 'absolute',
        right: 10
    }
})
export default AddressScreen;