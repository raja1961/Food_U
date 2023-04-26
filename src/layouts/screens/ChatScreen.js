import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TextInput, Dimensions, Alert, Modal, TouchableOpacity } from "react-native";
import CustomHeader from "../components/CustomHeader";
import Ionicons from 'react-native-vector-icons/Ionicons'

const DATA = [
    {
        title: 'Document',
        id: 0,
        color: '#5ab9e8'
    },
    {
        title: 'two',
        id: 1,
        language: 'English(UK)'

    },
    {
        title: 'Four',
        id: 2,
        language: 'Language'
    },
    {
        title: 'Five',
        id: 3,
        language: 'Mandarin'
    },
    {
        title: 'Six',
        id: 4,
        language: 'Hindi'
    },
    {
        title: 'Saven',
        id: 5,
        language: 'Spanish'
    },

]

const ChatScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>

            <CustomHeader title={'Message'} name="ellipsis-horizontal-circle-outline" name2={'videocam-outline'} name3={'call-outline'} />
            <ScrollView style={styles.container}>
                <View style={styles.OpponentText}>
                    <Text style={styles.chatText} >
                        Greate i will arived soon
                    </Text>
                    <Text style={styles.timeText}>09:41</Text>
                </View>
                <View style={styles.OpponentText}>
                    <Text style={styles.chatText} >
                        I will brought your order.I will arived your at your place in 5 Minutes
                    </Text>
                    <Text style={styles.timeText}>09:41</Text>
                </View>
                <View style={styles.ImgView}>
                    <Image style={[styles.Img, { marginRight: 8 }]} source={require('../../assets/imgs/ProfileMale.png')} />
                    <Image style={styles.Img} source={require('../../assets/imgs/ProfileMale.png')} />
                </View>
                <View style={styles.MyText}>
                    <Text style={[styles.chatText, { color: '#fff' }]} >
                        Wow that's really fast
                    </Text>
                    <Text style={[styles.timeText, { right: 24, color: '#fff' }]}>09:41</Text>
                    <Ionicons style={[styles.checkmark]} name="checkmark-done-outline" />
                </View>
                <View style={styles.voicePlayView}>

                    <Ionicons style={styles.playIcon} name="play" />
                    <View style={styles.Dot} />
                    <View style={styles.Track} />
                    <Text>16:01</Text>
                    <Ionicons style={styles.Arrow} name="checkmark-done-outline" />
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
                    <Ionicons style={{ backgroundColor: '#ebebeb', marginLeft: 10 }} name="happy-outline" size={28} />
                    <TextInput style={styles.TextInput} placeholder="Type a Message" />
                    <Ionicons style={{ position: 'absolute', right: 33 }} onPress={() => setModalVisible(true)} name="document-text-outline" size={30} />
                    <Ionicons style={{ position: 'absolute', right: 5 }} name="camera-outline" size={28} />
                </View>
                <Ionicons style={{ position: 'absolute', right: 5, }} name="mic-circle-outline" color={'#3ca630'} size={48} />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    
                    onRequestClose={() => {
                       
                        setModalVisible(!modalVisible);
                    }}
                >

                    <View style={styles.modelContainer}>
                        <View style={styles.ModalItem}>
                            <View>
                                <View style={styles.galary}>
                                    <Ionicons name="document-text" color={'#fff'} style={styles.Icon} />
                                </View>
                                <Text style={styles.galeryText}>
                                    Document
                                </Text>
                            </View>
                            <View>
                                <View style={[styles.galary,{backgroundColor:'#FF7A8E'}]}>
                                    <Ionicons name="camera" color={'#fff'} style={styles.Icon} />
                                </View>
                                <Text style={styles.galeryText}>
                                    Camera
                                </Text>
                            </View>
                            <View>
                                <View style={[styles.galary,{backgroundColor:'#ffa72e'}]}>
                                    <Ionicons name="flower" color={'#fff'} style={styles.Icon} />
                                </View>
                                <Text style={styles.galeryText}>
                                    Galery
                                </Text>
                            </View>


                        </View>
                        <View style={styles.ModalItem}>
                            <View>
                                <View style={[styles.galary,{backgroundColor:'#9D28AC'}]}>
                                    <Ionicons name="headset" color={'#fff'} style={styles.Icon} />
                                </View>
                                <Text style={styles.galeryText}>
                                   Audio
                                </Text>
                            </View>
                            <View>
                                <View style={[styles.galary,{backgroundColor:'#3CCA6B'}]}>
                                    <Ionicons name="location" color={'#fff'} style={styles.Icon} />
                                </View>
                                <Text style={styles.galeryText}>
                                    Location
                                </Text>
                            </View>
                            <View>
                                <View style={[styles.galary,{backgroundColor:'#673ab3'}]}>
                                    <Ionicons name="person" color={'#fff'} style={styles.Icon} />
                                </View>
                                <Text style={styles.galeryText}>
                                    Contact
                                </Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>


        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginBottom: 10
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
        flexDirection: 'row',
        alignItems: 'center',
        width: '84%',
        backgroundColor: '#ebebeb',
        height: 60,
        marginBottom: 10,
        borderRadius: 20,
        marginLeft: 10
    },
    TextInput: {
        width: '68%',
        height: 60,
    },
    ImgView: {
        flexDirection: 'row',

    },
    Img: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    voicePlayView: {
        marginTop: 10,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#bcf5be',
        borderRadius: 30
    },
    playIcon: {
        alignSelf: 'center',
        fontSize: 10,
        padding: 2,
        backgroundColor: '#3ca630',
        color: '#FFF',
        borderRadius: 30,
        marginRight: 10
    },
    Dot: {
        backgroundColor: '#3ca630',
        height: 15,
        width: 15,
        borderRadius: 10,
        alignSelf: 'center'
    },
    Track: {
        width: '40%',
        height: 5,
        backgroundColor: '#3ca630',
        borderRadius: 10,
        alignSelf: 'center',
        marginRight: 5
    },
    Arrow: {
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 2,
        color: '#3ca630'
    },

    modelContainer: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: '#fff',
        width: '90%',
        margin: 20,
        borderRadius: 15,
        borderBottomLeftRadius: 15,
        height: '30%',
        // justifyContent:'center'

    },
    Icon: {
        fontSize: 30,


    },
    galary: {
        height: 60,
        width: 60,
        backgroundColor: "#4884FF",
        borderRadius: 100,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },
    galeryText: {
        fontFamily: 'Poppins-SemiBold',
    },
    ModalItem:{
        
        flexDirection: 'row',
        justifyContent: 'space-evenly'
        // alignItems:'center'
    }

})
export default ChatScreen;