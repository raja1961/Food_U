import React,{useState} from 'react';
import { View, Text, FlatList, Image, Dimensions, StyleSheet, TouchableOpacity,TextInput,ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomHeader from '../components/CustomHeader';
import ImagePicker from 'react-native-image-crop-picker';



const ProfileDataFilledScreen = ({navigation},title) => {
    const [image,setImage]=useState()

    const OnselectImage=()=>{
        console.log(OnselectImage);
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
          }).then(image => {
            console.log(image);
            setImage(image.path)
          });
    }
    return (
        <>
        <CustomHeader title={'Fill Your Profile'} />
        <ScrollView style={styles.container}>
            
            
            <View style={styles.imgcontainer}>
                <Image style={styles.ProfileLogo} source={image ? {uri:image} : require('../../assets/imgs/profilelogo.jpg')} />

                <TouchableOpacity onPress={OnselectImage} style={styles.Editicon}  >
                    <Image style={styles.EditiconImg} source={require('../../assets/imgs/ediicon2.png')} />
                </TouchableOpacity>

            </View>
            <View style={styles.TextInputMain}>
                
                <TextInput style={styles.TextInput} placeholder="Full Name" />
            </View>
            <View style={styles.TextInputMain2}>
                <TextInput style={styles.TextInput} placeholder="NickName" />
                
            </View>
            <View style={styles.TextInputMain2}>
                
                <TextInput style={styles.TextInput} placeholder="Date of Birth" />
                <Ionicons style={styles.Ionicons} name="calendar" size={23} />
            </View>
            <View style={styles.TextInputMain2}>
                
                <TextInput style={styles.TextInput} placeholder="Email" />
                <Ionicons style={styles.Ionicons} name="mail" size={23} />
            </View>
            <View style={styles.TextInputMain}>
                <Image style={styles.FlatIcon} source={require('../../assets/imgs/flagIcon.png')} />
                <Ionicons name="chevron-down-outline" size={20} />
                <TextInput style={styles.TextInput} placeholder="+0123456789" />
            </View>
            <View style={styles.TextInputMain2}>
                <TextInput style={styles.TextInput} placeholder="Gender" />
                <Ionicons name="chevron-down-outline" size={25} />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('BottomSheetScreen')} style={styles.btn}>
                <Text style={styles.btnText}>
                    Continue
                </Text>
            </TouchableOpacity>
      
        </ScrollView>
        </>

    );
};
const styles = StyleSheet.create({
    container: {

        margin:15,
       
    },
    imgcontainer: {
        flexDirection: 'row',
        marginBottom:10,
        alignSelf:'center'

    },
    ProfileLogo: {
        borderRadius: 80,
        height: 130,
        width: 130,
        

    },
    Editicon: {
        position: 'absolute',
        backgroundColor: 'green',
        color: 'green',
        bottom:5,
        right:2,
        borderRadius:5
    },
    EditiconImg: {
        height: 30,
        width: 30,
        borderRadius:5
    },
    TextInputMain: {
        flexDirection: 'row',
        backgroundColor: '#ebebeb',
        height: 60,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10
    },
    FlatIcon: {
        height: 25,
        width: 25,
        marginRight: 6
    },
    TextInput: {
        width: 300,
        height: 60,
        // borderWidth:1
    },
      Ionicons: {
        alignItems: 'center',
    },
    TextInputMain2: {
        flexDirection: 'row',
        backgroundColor: '#ebebeb',
        height: 60,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        justifyContent:'space-between'
    },
    btn:{
        height:55,
        width:Dimensions.get('screen').width-50,
        backgroundColor:'#1a8a38',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        borderRadius:60
    },
    btnText:{
        fontFamily:'Poppins-SemiBold',
        color:'#fff'
    }
})


export default ProfileDataFilledScreen;
