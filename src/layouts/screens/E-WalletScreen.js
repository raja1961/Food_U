import React from "react";
import { Text, View, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import E_WalletCard from "../components/E-WalletCard";
import InviteFriend from "../components/InviteFriend";
import {DATA} from '../components/DATA'
const EWalletScreen = ({navigation}) => {
    return (
        <>
            <CustomHeader title={'E-Wallet'} name={'ellipsis-horizontal-circle-outline'} name2={'search-outline'} />
            <ScrollView style={styles.container}>
                <E_WalletCard />
                <View style={styles.TransactionView}>
                    <Text style={styles.TransactionText}>
                        Transaction History
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('TransactionHistoryScreen')} >
                        <Text style={[styles.TransactionText, { color: '#46b53a' }]}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    DATA.map((item) => {
                        if(item.id<5){
                        return (
                            <View style={styles.item} key={item.id.toString()} >
                                <InviteFriend data={item} value={false} />
                            </View>
                        )
                        }
                    })
                }
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding:15,
        marginBottom:10
       
    },
    TransactionView: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TransactionText: {
        fontFamily: 'Poppins-Bold'
    },
    item:{
       
    }
})
export default EWalletScreen;