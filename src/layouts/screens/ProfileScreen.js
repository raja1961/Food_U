import React,{useRef} from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import Ionicons from "react-native-vector-icons/Ionicons"
import { Switch } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";

const ProfileScreen = ({ navigation }) => {
    const refRBSheet = useRef();
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <>
         
            <CustomHeader title={"Profile"} name={'ellipsis-horizontal-circle-outline'} />
            <ScrollView style={styles.container}>
                <View style={styles.profileSection}>
                    <Image style={styles.profileImg} source={require('../../assets/imgs/profileImg.png')} />
                    <View>
                        <Text style={styles.profileName}>
                            Andrew Ainsley
                        </Text>
                        <Text>
                            +1111885875
                        </Text>
                    </View>
                    <Ionicons style={styles.penIcon} name="pencil-outline" size={26} color={'green'} />
                </View>
                <View style={styles.profileBottomBorder} />
                <TouchableOpacity style={styles.profileData} onPress={() => navigation.navigate('MyFavoriteScreen')} >
                    <Ionicons name="calendar-outline" size={26} />
                    <Text style={styles.profileDataText}>
                        My Favorite Restaurants
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileData} >
                    <Image style={styles.discountImg} source={require('../../assets/imgs/discount.png')} />
                    <Text style={styles.profileDataText}>
                        Special Offers & Promo
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PaymentMethodScreen')} style={styles.profileData} >
                    <Ionicons name="wallet-outline" size={26} />
                    <Text style={styles.profileDataText}>
                        Payment Methods
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.profileBottomBorder} />
                <TouchableOpacity onPress={() => navigation.navigate('ProfileDataScreen')} style={styles.profileData} >
                    <Ionicons name="person-outline" size={26} />
                    <Text style={styles.profileDataText}>
                        Profile
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddressScreen')} style={styles.profileData} >
                    <Ionicons name="location-outline" size={26} />
                    <Text style={styles.profileDataText}>
                        Address
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationCustomizeScreen')} style={styles.profileData} >
                    <Ionicons name="notifications-outline" size={26} />
                    <Text style={styles.profileDataText}>
                        Notification
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SecurityScreen')} style={styles.profileData} >
                    <Image style={styles.discountImg} source={require('../../assets/imgs/Security.png')} />
                    <Text style={styles.profileDataText}>
                        Security
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LanguageScreen')} style={styles.profileData} >
                    <Ionicons name="language-outline" size={26} />
                    <Text style={styles.profileDataText}>
                        Language
                    </Text>
                    <Text style={{ position: 'absolute', right: 40, fontFamily: 'Poppins-SemiBold' }}>
                        English(US)
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileData} >
                    <Ionicons name="eye-outline" size={26} />
                    <Text style={styles.profileDataText}>
                        Dark Mode
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HelpCenter')} style={styles.profileData} >
                    <Ionicons name="information-circle-outline" size={26} />
                    <Text style={styles.profileDataText}>
                        Help Center
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('InviteScreen')} style={styles.profileData} >
                    <Ionicons name="people-outline" size={26} />
                    <Text style={styles.profileDataText}>
                        Invite Friend
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => refRBSheet.current.open()} style={styles.profileData} >
                    <Ionicons name="log-out-outline" size={26} color={'#fc6e4e'} />
                    <Text   style={[styles.profileDataText, { color: '#fc6e4e' }]}>
                        Log out
                    </Text>
                    <TouchableOpacity style={styles.penIcon}>
                        <Ionicons name="chevron-forward-outline" size={26} />
                    </TouchableOpacity>
                </TouchableOpacity>

            </ScrollView>
            <View>
                {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
                <RBSheet
                height={200}
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        draggableIcon: {
                            backgroundColor: '#1a8a38'
                        }
                    }}
                >
                    <View>
                        <Text style={styles.BottomSheet}>
                           Log Out
                        </Text>
                        <Text style={[styles.BottomSheet,{color:'#4f4e4e'}]}>Are you sure you want to log out?</Text>
                        <View style={styles.btnView}>
                            <TouchableOpacity onPress={()=>refRBSheet.current.close()} style={[styles.BottomSheetButtton,{backgroundColor:'#d3f5d7'}]}>
                                <Text style={[styles.btnText,{color:'#4f4e4e',}]}>
                                    cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.BottomSheetButtton}>
                                <Text style={styles.btnText}>
                                   Yes Logout
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </RBSheet>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10
    },
    profileImg: {
        height: 60,
        width: 60,
        borderRadius: 40,
        marginRight: 20
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    profileName: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    },
    penIcon: {
        position: 'absolute',
        right: 0
    },
    profileBottomBorder: {
        borderBottomWidth: 2,
        borderColor: '#e6e3e3',
        marginBottom: 10
    },
    profileData: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    profileDataText: {
        fontSize: 18,
        marginLeft: 18,
        fontFamily: 'Poppins-SemiBold',

    },
    discountImg: {
        height: 26,
        width: 26
    },
    BottomSheet:{
        fontFamily:'Poppins-SemiBold',
        textAlign:'center',
        fontSize:18,
        color:'#fc6e4e' 
    },
    BottomSheetButtton:{
        backgroundColor:'#1a8a38',
        paddingHorizontal:32,
        paddingVertical:18,
        marginHorizontal:10,
        borderRadius:35
       

    },
    btnView:{
        flexDirection:'row',
        marginTop:15,
        alignSelf:'center'
    },
    btnText:{
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
        color:'#ffff'
    }

})
export default ProfileScreen;