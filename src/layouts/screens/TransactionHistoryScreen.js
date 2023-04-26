import React from "react";
import { Text,View,ScrollView,StyleSheet } from "react-native";
import {DATA} from '../components/DATA'
import InviteFriend from "../components/InviteFriend";
import CustomHeader from "../components/CustomHeader";

const TransactionHistoryScreen = () =>{
    return(
        <>
         <CustomHeader title={'E-Wallet'} name={'search-outline'} />
        <ScrollView>
            {
                    DATA.map((item) => {
                        // console.log(DATA);
                        
                        return (
                            <View style={styles.item} key={item.id.toString()} >
                                <InviteFriend data={item} value={false} />
                            </View>
                        )
                        
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
export default TransactionHistoryScreen;