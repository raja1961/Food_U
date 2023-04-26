
import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import CustomHeader from "../components/CustomHeader";
import { Switch } from 'react-native-paper';


const NotificationCustomizeScreen = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(
        {
            GenaralNotification: false,
            Sound: false,
            Vibrate:false,
            SpecialOffers:false,
            Promo:false,
            Payments:false,
            Cashback:false,
            AppUpdates:false,
            Service:false,
            Tips:false

           
        },

    );
    function onToggleSwitch(item){
        setIsSwitchOn(pevState =>
        ({ ...pevState, [item]: !isSwitchOn[item]}))
       
    };
    //     const onToggleSwitch = (index) =>{
    //         console.log(index);
    //     if(isSwitchOn==false){
    //         setIsSwitchOn(!isSwitchOn)
    //     }
    //     else{
    //         setIsSwitchOn(false)
    //     }



    // };

    // const OnFalse=()=>{
    //     setIsSwitchOn(!onToggleSwitch)
    // }
    console.log('item notifi', isSwitchOn);
    return (
        <>
            <CustomHeader title={'Notification'} />
            <View style={styles.container}>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>Genaral Notification</Text>
                    <TouchableOpacity style={styles.penIcon}>

                        <Switch color={'#1a8a38'} value={isSwitchOn.GenaralNotification} onValueChange={ ()=> onToggleSwitch ("GenaralNotification")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>Sound</Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Switch color={'#1a8a38'} value={isSwitchOn.Sound} onValueChange={ ()=> onToggleSwitch ("Sound")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>Vibrate</Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Switch color={'#1a8a38'} value={isSwitchOn.Vibrate} onValueChange={()=>onToggleSwitch('Vibrate')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>Special Offers</Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Switch color={'#1a8a38'} value={isSwitchOn.SpecialOffers} onValueChange={()=>onToggleSwitch('SpecialOffers')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>Promo & Discount</Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Switch color={'#1a8a38'} value={isSwitchOn.Promo} onValueChange={()=>onToggleSwitch('Promo')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>Payments</Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Switch color={'#1a8a38'} value={isSwitchOn.Payments} onValueChange={()=>onToggleSwitch('Payments')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>Cashback</Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Switch color={'#1a8a38'} value={isSwitchOn.Cashback} onValueChange={()=>onToggleSwitch('Cashback')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>App Updates</Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Switch color={'#1a8a38'} value={isSwitchOn.AppUpdates} onValueChange={()=>onToggleSwitch('AppUpdates')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>New Service Available</Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Switch color={'#1a8a38'} value={isSwitchOn.Service} onValueChange={()=>onToggleSwitch('Service')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>New Tips Available</Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Switch color={'#1a8a38'} value={isSwitchOn.Tips} onValueChange={()=>onToggleSwitch('Tips')} />
                    </TouchableOpacity>
                </View>


            </View>
        </>

    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    NotificationData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    NotificationText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    }
})
export default NotificationCustomizeScreen;