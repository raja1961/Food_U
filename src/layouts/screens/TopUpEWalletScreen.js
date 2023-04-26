import React,{useState} from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity,ScrollView } from "react-native";
import CustomHeader from "../components/CustomHeader";
const DATA = [
    {
        id: 0,
        value: '$10'
    },
    {
        id: 1,
        value: '$20'
    },
    {
        id: 2,
        value: '$50'
    },
    {
        id: 3,
        value: '$100'
    },
    {
        id: 4,
        value: '$200'
    },
    {
        id: 5,
        value: '$250'
    },
    {
        id: 6,
        value: '$500'
    },
    {
        id: 7,
        value: '$750'
    },
    {
        id: 8,
        value: '$1000'
    }
]
const TopUpEWalletScreen = ({navigation,item}) => {
    const [value,setValue]=useState()
    const Value=(item)=>{
        setValue(item.value)

    }
    return (
        <>
            <CustomHeader title={'Top Up E-Wallet'} name={'search-outline'} />
            <View style={styles.container}>
                <Text style={styles.topUpText}>Enter the amount of top up</Text>
                <TextInput value={value} onChangeText={(value)=>setValue(value)} placeholder={'$0'} placeholderTextColor={'black'} style={styles.TextInput} />
              <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}} >
              {
                    DATA.map((item) => {
                        return (
                            < TouchableOpacity onPress={()=>Value(item)} key={item.id.toString()} style={styles.topUpValue}>
                                <Text style={{fontSize:18,color:'#4cc74e',fontFamily:'Poppins-SemiBold'}} >{item.value}</Text>
                            </TouchableOpacity>
                         )
                    })
                } 
              </View>
                <TouchableOpacity onPress={()=>navigation.navigate('TopUpEWalletPaymentScreen',{Price:value})} style={styles.btn}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 18
    },
    topUpText: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
    },
    TextInput: {
        height: 150,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 30,
        fontSize: 50,
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#4cc74e',
        fontFamily: 'Poppins-SemiBold',
    },
    topUpValue: {
        marginTop: 15,
       fontSize:18,
        borderWidth: 2,
        borderColor: '#4cc74e',
        borderRadius: 25,
        height:40,
        width:105,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:8
    },
    btn:{
       backgroundColor:'#4cc74e',
       height:55,
       width:'94%',
       justifyContent:'center',
       alignItems:'center',
       marginTop:20,
       alignSelf:'center',
       borderRadius:40
    },
    continueText:{
        fontFamily:'Poppins-SemiBold',
        color:'#fff'
    }
})
export default TopUpEWalletScreen;