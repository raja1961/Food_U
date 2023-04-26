import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Order from '../components/Order'
import { DATA } from "./DATA";
const Completed = () => {
    return (
        <View>
            {
                DATA.map((item) => {
                    if(item.statusCancel==='Completed'){
                        return (
                            <View key={item.id.toString()}>
                                <Order item={item} value={false} />
                            </View>
                        )
                    }
                })
            }
        </View>
    )
}
const styles = StyleSheet.create({

})
export default Completed;    