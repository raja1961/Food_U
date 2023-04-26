import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert, Modal, Image } from "react-native";
import CustomHeader from "../components/CustomHeader";
import { RadioButton } from 'react-native-paper';
import Button from "../components/Button";
import Ionicons from 'react-native-vector-icons/Ionicons'

const DATA = [
    {
        title: 'one',
        id: 0,
        reasone: 'Waiting for long time'
    },
    {
        title: 'two',
        id: 1,
        reasone: 'Unable to contact driver'

    },
    {
        title: 'Four',
        id: 2,
        reasone: 'Driver denied to destination'
    },
    {
        title: 'Five',
        id: 3,
        reasone: 'Driver denied to come to pick up'
    },
    {
        title: 'Six',
        id: 4,
        reasone: 'Driver denied to come to pick up'
    },
    {
        title: 'Saven',
        id: 5,
        reasone: 'Worng address shown'
    },
    {
        title: 'eaight',
        id: 6,
        reasone: 'The price is not reasonable'
    },
    {
        title: 'nine',
        id: 7,
        reasone: 'I want to order another resturent'
    },
    {
        title: 'ten',
        id: 8,
        reasone: 'I just want to cancel'
    },


]
const CancelOrder = ({ navigation }) => {
    const [checked, setChecked] = useState('first');
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <CustomHeader title={'Cancel Order'} />
            <ScrollView style={styles.container}>
                <Text style={styles.headresText}>Please select the reasone for cancelations</Text>
                <View style={styles.border} />
                {DATA.map((item) => {
                    return (
                        <View key={item.id.toString()} >
                            <View style={styles.ReasoneContainer}>
                                <RadioButton
                                    value={item.title}
                                    status={checked === item.title ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked(item.title)}
                                />
                                <Text style={styles.Text}>{item.reasone}</Text>
                            </View>
                        </View>
                    )
                })}
                <Text style={styles.orthersText}>
                    Others
                </Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image style={styles.emoji} source={require('../../assets/imgs/sademoji.png')} />
                            <Text style={styles.text}>
                                We are so sad for your cancellation
                            </Text>
                            <Text style={styles.topUpAmount}>We will continue to improved our service & satisfy you on the next order</Text>
                            <Button btn={() => setModalVisible(!modalVisible)} titile={'Ok'} />
                        </View>
                    </View>
                </Modal>

                <TextInput style={styles.TextInput} placeholder="Others Reasone" />


                <Button btn={() => setModalVisible(!modalVisible)} titile={'Submit'} />

            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    headresText: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold'
    },
    border: {
        borderBottomWidth: 3,
        borderColor: '#e0e0e0',
        marginTop: 20,
        marginBottom: 10
    },
    ReasoneContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    Text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        alignSelf: 'center'
    },
    orthersText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
    },
    TextInput: {
        height: 90,
        width: '100%',
        backgroundColor: '#FAFAFA',
        borderRadius: 18,
        alignSelf: 'flex-start',
        textAlignVertical: 'top',
        marginBottom: 30
    },
    modalView: {
        margin: 130,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        height: 380,
        width: 250,
        shadowOffset: {
            width: 0,
            height: 255
        },
        alignSelf: 'center'
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: '#1BAC4B'
    },
    topUpAmount: {
        fontSize: 16,
        marginBottom: 18,
        marginTop: 10
    },
    emoji: {
        height: 150, width: 150
    }
})
export default CancelOrder;