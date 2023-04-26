import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Order from '../components/Order'
import { DATA } from "./DATA";
const Cancelled = () => {
    return (
        <View>
            {
                DATA.map((item) => {
                    if(item.statusCancel=='Cancelled'){
                        return (
                            <View key={item.id.toString()}>
                                <Order item={item} />
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
export default Cancelled;    