
import React,{useState} from "react";
import { Text, View,StyleSheet,TouchableOpacity } from "react-native";
import CustomHeader from "../components/CustomHeader";
import { Switch } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'

const SecurityScreen = () => {
    const [isSwitchOn,setIsSwitchOn]=useState({
        RememberMe:false,
        FaceId:false,
        BiomatricId:false
        
    })
    const onToggleSwitch=(item)=>{
        setIsSwitchOn(pevState=>({...pevState,[item]:!isSwitchOn[item]}))
    }

    return (
        <> 
        <CustomHeader title={'Security'} />
            <View style={styles.container}>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>Remember Me</Text>
                    <TouchableOpacity style={styles.penIcon}>

                        <Switch color={'#1a8a38'} value={isSwitchOn.RememberMe} onValueChange={ ()=> onToggleSwitch ("RememberMe")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>Face Id</Text>
                    <TouchableOpacity style={styles.penIcon}>

                        <Switch color={'#1a8a38'} value={isSwitchOn.FaceId} onValueChange={ ()=> onToggleSwitch ("FaceId")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.NotificationData}>
                    <Text style={styles.NotificationText}>Biomatric Id</Text>
                    <TouchableOpacity style={styles.penIcon}>

                        <Switch color={'#1a8a38'} value={isSwitchOn.BiomatricId} onValueChange={ ()=> onToggleSwitch ("BiomatricId")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Authenticator}>
                    <Text style={styles.NotificationText}>Google Authenticator</Text>
                    <Ionicons size={25} style={styles.backIcon} name="chevron-forward-outline" />
                </View>
                <TouchableOpacity style={styles.ChangeBtn}>
                    <Text style={styles.btnText}>Change Pin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ChangeBtn}>
                    <Text style={styles.btnText}>Change Pin</Text>
                </TouchableOpacity>
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
    },
    Authenticator:{
        flexDirection:'row',
    },
    backIcon:{
        position:'absolute',
        right:10
    },
    ChangeBtn:{
        height:55,
        width:'90%',
        backgroundColor:'#a0dbae',
        alignItems:'center',
        justifyContent:'center'
        ,alignSelf:'center',
        borderRadius:35,
        marginTop:30
    },
    btnText:{
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
        color:'#1a8a38'

    }
})
export default SecurityScreen;