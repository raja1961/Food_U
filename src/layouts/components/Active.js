import React from "react";
import { Text, View, StyleSheet,Image } from "react-native";
import Order from '../components/Order'
import { DATA } from "./DATA";
const Active = () => {
    return (
        <View>
            { DATA.length>0?
                DATA.map((item) => {
                    if(item.statusCancel=='Active'){
                        return (
                            <View key={item.id.toString()}>
                                <Order item={item} value={false} />
                            </View>
                        )
                    }
                    
                }):
                <View style={styles.container}>
                    <Image style={styles.Image} source={require('../../assets/imgs/copy.png')} />
                    <Text style={{ marginTop: 8, color: '#3a3b3a', fontFamily: 'Poppins-SemiBold', fontSize: 20 }}>
                        Empty
                    </Text>
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    Image: {
        // resizeMode:'cover',
        height: 150,
        width: 150,
    }
})
export default Active;    