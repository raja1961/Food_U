import React,{useState} from "react";
import { Text,View,StyleSheet,TouchableOpacity,Image } from "react-native";
import CustomHeader from "../components/CustomHeader";
import { RadioButton } from 'react-native-paper';

const DATA = [
    {
        title: 'one',
        id: 0,
        payment:'Paypel',
        image: require('../../assets/imgs/paypleimg.png'),
    },
    {
        title: 'two',
        id: 1,
        payment:'Google Pay',
        image: require('../../assets/imgs/googleIcon.png'),
    },
    {
        title: 'Four',
        id: 2,
        payment:'Appel Pay',
        image: require('../../assets/imgs/apple.png'),   
     },
    {
        title: 'Five',
        id: 3,
        payment:'.... .... .... 2546' ,
        image: require('../../assets/imgs/mastercard.png'),   
    },
]
const TopUpEWalletPaymentScreen = ({navigation,route}) =>{
    const [checked, setChecked] =useState('first');
    return(
        <>
        <CustomHeader title={'Top Up E-Wallet'} name="scan-outline" />
        <View style={styles.mainContainer}>
                {
                    DATA.map((item,) => {
                        return (
                            <TouchableOpacity key={item.id.toString()}  style={ styles.deActive}>
                                <Image style={styles.paypleImage} source={item.image} />
                                <Text style={styles.paypleText}>{item.payment}</Text>
                                <View style={styles.ConnectedText}>
                                <RadioButton
                                        value={item.title}
                                        status={checked === item.title ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked(item.title)}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                <TouchableOpacity
                     style={[styles.verifyBtn,{backgroundColor:'#d1fccf'}]} >
                    <Text style={[styles.verifyBtnText,{color:'#199e1e'}]}>
                        Add New Card
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('EnterYourPinScreen',{Price:route.params.Price})}
                     style={[styles.ContinueBtn,]} >
                    <Text style={styles.verifyBtnText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles=StyleSheet.create({
    mainContainer: {
        paddingTop: 10,
    },
    Active: {
        flexDirection: 'row',
        height: 60,
        width: '90%',
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#2c9c46',  
    },
    deActive: {
        flexDirection: 'row',
        height: 60,
        width: '90%',
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10
    },
    paypleImage: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginLeft: 7

    },
    paypleText: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: 10
    },
    ConnectedText: {
        position: 'absolute',
        right: 10,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#2c9c46'

    },
    verifyBtn: {
        height: 60,
        width: "90%",
        backgroundColor: '#199e1e',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 10,
        alignSelf:'center'
    },
    ContinueBtn: {
        height: 60,
        width: "90%",
        backgroundColor: '#199e1e',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 120,
        alignSelf:'center',
        
    },
    verifyBtnText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold'
    },
})
export default TopUpEWalletPaymentScreen;