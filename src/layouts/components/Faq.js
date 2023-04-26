import React, { useState } from "react";

import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { List, Card } from 'react-native-paper';

const DATA = [
    {
        id: 0,
        title: 'General'
    },
    {
        id: 1,
        title: 'Account'
    },
    {
        id: 2,
        title: 'Service'
    },
    {
        id: 3,
        title: 'Payment'
    },
    {
        id: 4,
        title: 'Payment'
    },
    {
        id: 5,
        title: 'Payment'
    },

]

const Faq = () => {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);
    const [select, setSelect] = useState()
    const onselect = (item) => {
        // console.log('item2=======',item.id);
        setSelect(item.id)

    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={{ marginBottom: 20 }}>
                {
                    DATA.map((item, index) => {
                        console.log('item=====', index);
                        return (

                            <TouchableOpacity key={item.id.toString()} onPress={() => onselect(item)} style={select === index ? styles.ActiveButton : styles.DeactiveButton}>
                                <Text style={select === index ? styles.ActiveButtonText : styles.DeactiveButtonText}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>

                        )
                    })
                }

            </ScrollView>
            <List.Section style={{ borderRadius: 100 }}>
                <List.Accordion
                style={{color:'#fff'}}
                    title="What is foodu"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        // flex: 1
    },
    ActiveButton: {
        height: 45,
        width: 100,
        backgroundColor: '#1a8a38',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginHorizontal: 8
    },
    DeactiveButton: {
        height: 45,
        width: 100,
        // backgroundColor: '#1a8a38',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: '#1a8a38'
    },
    ActiveButtonText: {
        color: '#fff',
        fontFamily: 'Poppins-SemiBold'
    },
    DeactiveButtonText: {
        // color: '#fff',
        fontFamily: 'Poppins-SemiBold'
    }
})
export default Faq;