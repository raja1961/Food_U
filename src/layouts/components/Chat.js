
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChatData from "./ChatData";
const DATA = [
    {
        id: 0,
        image: require('../../assets/imgs/profileImg.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Raford chenal'
    },
    {
        id: 1,
        image: require('../../assets/imgs/ProfileMale.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Natasiya Wilodra'
    },
    {
        id: 2,
        image: require('../../assets/imgs/profileImg.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Elmer Laverty'
    },
    {
        id: 3,
        image: require('../../assets/imgs/ProfileMale.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Clinton Mcclure'
    },
    {
        id: 4,
        image: require('../../assets/imgs/profileImg.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Aline FullBirde'
    },
    {
        id: 5,
        image: require('../../assets/imgs/ProfileMale.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Aline FullBirde'
    },
    {
        id: 6,
        image: require('../../assets/imgs/profileImg.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Aline FullBirde'
    },
    {
        id: 7,
        image: require('../../assets/imgs/ProfileMale.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Aline FullBirde'
    },
    {
        id: 8,
        image: require('../../assets/imgs/profileImg.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Aline FullBirde'
    },
    {
        id: 9,
        image: require('../../assets/imgs/ProfileMale.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Aline FullBirde'
    },
    {
        id: 10,
        image: require('../../assets/imgs/profileImg.png'),
        Msg: 'Greate i will arive soon',
        Price: '$21.40',
        time: '16:01',
        NumberOfMsg: '1',
        title:'Aline FullBirde'
    },
]
const Chat = () => {
    return (
        DATA.map((item) => {
            return (
                <View key={item.id.toString()}>
                    <ChatData item={item} />
                </View>
            )
        })
    )
}
const styles = StyleSheet.create({

})
export default Chat;