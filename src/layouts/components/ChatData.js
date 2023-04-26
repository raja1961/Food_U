import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text,View,StyleSheet,Image,TouchableOpacity } from "react-native";
const ChatData = ({item}) =>{
    const navigation=useNavigation()
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('ChatScreen')} style={styles.container}>
            <Image style={styles.image} source={item.image} />
           
            <View style={styles.ProfileName}>
            <Text style={styles.ProfileNameText}>{item.title}</Text>
                <Text>
                    Greate i will arive soon
                </Text>
            </View>
            <View style={styles.time}>
                <Text style={styles.Msg}>1</Text>
                <Text>16:01</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:15,
        flexDirection:'row',
        marginVertical:5
    },
    image:{
        height: 70,
        width: 70,
        borderRadius: 40,
        marginRight: 12

    },
    ProfileName:{
        alignSelf:'center'
    },
    time:{
        alignSelf:'center',
        position:'absolute',
        right:10
    },
    Msg:{
        textAlign:'center',
        paddingHorizontal:2,
        paddingVertical:4,
        backgroundColor:'#4cc74e',
        borderRadius:15
    },
    ProfileNameText:{
        fontFamily:'Poppins-SemiBold',
        fontSize:16
    }
})
export default ChatData;