import React from "react";
import { Text, View, StyleSheet,ScrollView,Image,TextInput } from "react-native";
import CustomHeader from "../components/CustomHeader";
import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomerSupport = () => {
    return (
        <>
            <CustomHeader title={"Profile"} name2={'call-outline'} name={'ellipsis-horizontal-circle-outline'} />
            <ScrollView style={styles.container}>
                <View style={styles.TodayText}>
                    <Text >Today</Text>
                </View>

                <View style={styles.OpponentText}>
                    <Text style={styles.chatText} >
                        Hello Good morning
                    </Text>
                    <Text style={styles.timeText}>09:41</Text>
                </View>
                <View style={styles.OpponentText}>
                    <Text style={styles.chatText} >
                        I am a customar service. is theire anything i can help you with?
                    </Text>
                    <Text style={styles.timeText}>09:41</Text>
                </View>
                <View style={styles.MyText}>
                    <Text style={[styles.chatText, { color: '#fff' }]} >
                        I having problems with my payments
                    </Text>
                    <Text style={[styles.timeText, { right: 24, color: '#fff' }]}>09:41</Text>
                    <Ionicons style={[styles.checkmark]} name="checkmark-done-outline" />
                </View>
                <View style={styles.MyText}>
                    <Text style={[styles.chatText, { color: '#fff' }]} >
                        Can you help me?
                    </Text>
                    <Text style={[styles.timeText, { right: 24, color: '#fff' }]}>09:41</Text>
                    <Ionicons style={[styles.checkmark]} name="checkmark-done-outline" />
                </View>
                <View style={styles.OpponentText}>
                    <Text style={styles.chatText} >
                        Of course......
                    </Text>
                    <Text style={styles.timeText}>09:41</Text>
                </View>
                <View style={styles.OpponentText}>
                    <Text style={styles.chatText} >
                       Can you tell me the problem you are having? so I can help solve it
                    </Text>
                    <Text style={styles.timeText}>09:41</Text>
                </View>
            </ScrollView>
            <View style={styles.TextInputMain}>
                <View style={styles.TextInputMainView}>
                 <Ionicons style={{backgroundColor:'#ebebeb',marginLeft:10}} name="happy-outline" size={28} />
                 <TextInput style={styles.TextInput} placeholder="Type a Message" />
                 <Ionicons style={{position:'absolute',right:33}} name="document-text-outline" size={30}  />
                <Ionicons style={{position:'absolute',right:5}} name="camera-outline" size={28} />
                </View>
                <Ionicons style={{position:'absolute',right:5,}} name="mic-circle-outline" color={'#3ca630'} size={48} />
            </View>


        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginBottom:10
    },
    TodayText: {
        height: 25,
        width: 80,
        backgroundColor: '#d1d1cf',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    OpponentText: {
        backgroundColor: '#ededed',
        marginVertical: 10,
        padding: 5,
        width: '70%',
        borderRadius: 15
    },
    timeText: {
        position: 'absolute',
        right: 5,
        fontSize: 12,
        bottom: 3,
    },
    chatText: {
        fontSize: 15,
        margin: 15,
    },
    MyText: {
        backgroundColor: '#3ca630',
        marginVertical: 10,
        padding: 5,
        width: '70%',
        alignSelf: 'flex-end',
        borderRadius: 8,
    },
    checkmark: {
        position: 'absolute',
        right: 0,
        fontSize: 20,
        bottom: 0,
        color: '#fff'
    },
    TextInputMainView: {
        flexDirection:'row',
        alignItems:'center',
        width:'84%',
        backgroundColor:'#ebebeb',
        height:60,
        marginBottom:10,
        borderRadius:20,
        marginLeft:10
    },
    TextInput: {
        width: '68%',
        height: 60,
    },
})
export default CustomerSupport;