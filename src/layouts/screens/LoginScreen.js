import React,{useState} from "react";
import { Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Dimensions } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Checkbox } from 'react-native-paper';

const LoginScreen=({navigation})=>{
    const [checked, setChecked] = useState(false);
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/imgs/logo2.png')} />
            <Text style={styles.headerText}>Login to Your Account</Text>
            <View style={styles.TextInputMain}>
                    <Image style={styles.FlatIcon} source={require('../../assets/imgs/flagIcon.png')} />
                    <Ionicons name="chevron-down-outline" size={20} />

                    <TextInput style={styles.TextInput} placeholder="+0123456789" />
                </View>
                <View style={styles.CheckboxView}>
                    <Checkbox
                        borderRadius={10}
                        status={checked ? 'checked' : 'unchecked'}
                        color="#3ead4a"
                        uncheckedColor="#3ead4a"
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={styles.checkboxText}>
                        Remember me
                    </Text>
                </View>
                <TouchableOpacity style={styles.SignUpBtn}>
                    <Text style={styles.SignUpBtnText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <View style={styles.ContinueTextView}>
                    <View style={styles.ContinueText}></View>
                    <Text style={{ alignSelf: 'center', fontSize: 16 }} >or continue with</Text>
                    <View style={styles.ContinueText}></View>

                </View>
                <View style={styles.IconBorderView}>
                    <TouchableOpacity style={styles.IconBorder} >
                        <MaterialCommunityIcons color={'#346beb'} size={25} name="facebook" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.IconBorder}>
                        <Image style={styles.googleIcon} source={require('../../assets/imgs/googleIcon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.IconBorder}>
                        <MaterialCommunityIcons color={'black'} size={25} name="apple" />
                    </TouchableOpacity>
                </View>
                <View style={styles.BottomText}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateAccountScreen')}>
                    <Text style={styles.BottomTextSignUpText}>
                        Sign Up
                    </Text>
                    </TouchableOpacity>
                </View>
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        margin:10,
        marginTop:40
    },
    logo: {
        resizeMode: 'cover',
        height: 130,
        width: 130,
        alignSelf: 'center',
        borderRadius: 150,
        marginBottom:20
    },
    TextInputMain: {
        flexDirection: 'row',
        backgroundColor: '#ebebeb',
        height: 60,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        marginBottom:20
    },
    TextInput: {
        width: 300,
        height: 60,
        // borderWidth:1
    },
    FlatIcon: {
        height: 25,
        width: 25,
        marginRight: 6
    },
    headerText:{
        textAlign:'center',
        fontSize:28,
        fontFamily:'Poppins-SemiBold',
        color:'#363636',
        marginBottom:20
    },
    Ionicons: {
        alignItems: 'center',
        marginRight: 5
    },
    CheckboxView: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkboxText: {

        alignSelf: "center",
        fontFamily: 'Poppins-SemiBold',
    },
    SignUpBtn: {
        height: 50,
        width: Dimensions.get('screen').widthi,
        backgroundColor: '#1a8a38',
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 30
    },
    SignUpBtnText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Poppins-SemiBold'
    },
    ContinueText: {
        borderBottomWidth: 1,
        width: 110,
        marginHorizontal: 5,
    },
    ContinueTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    googleIcon: {
        resizeMode: 'cover',
        height: 20,
        width: 20,
        borderRadius: 12,
        marginRight: 2
    },
    IconBorderView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30
    },
    IconBorder: {
        borderWidth: 1,
        height: 45,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e3e3e3',
        borderRadius: 10
    },
    BottomText: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    BottomTextSignUpText: {
        marginHorizontal: 8,
        color: '#1a8a38'

    }
    
})

export default LoginScreen;