import React from 'react';
import { View, Dimensions, StyleSheet, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view'
import CustomHeader from "../components/CustomHeader";
import Chat from '../components/Chat';
import Calls from '../components/Calls';


const MessageScreen = () => {
    const windowWidth = Dimensions.get('screen').width;
    const renderHeader = () => {
        return (
            <View>
                <CustomHeader title={'Message'} name="ellipsis-horizontal-circle-outline" name2={'search-outline'} />
            </View>
        )
    }
    const TabButton = (props) => {
        return (
            <MaterialTabBar
                activeColor="#1a8a38"
                inactiveColor='#a6a5a4'


                {...props}
                width={windowWidth - 20}
                contentContainerStyle={{ alignItems: 'center', }}
                labelStyle={styles.LabelStyle}
                indicatorStyle={styles.IndicatorStyle}
                style={styles.MaterialTabBar1}

            />
        )
    }
    return (
        <View style={{ flex: 1, }}>
            <Tabs.Container renderHeader={renderHeader}
                renderTabBar={TabButton}
                headerContainerStyle={styles.tabs}
            >
                <Tabs.Tab name="Chat">
                    <>

                        <Tabs.ScrollView >
                            <Chat />
                        </Tabs.ScrollView>
                    </>

                </Tabs.Tab>
                <Tabs.Tab name="Calls">
                    <Tabs.ScrollView scrollIndicatorInsets={false}>
                        <Calls />
                    </Tabs.ScrollView>
                </Tabs.Tab>
            </Tabs.Container>
        </View>
    )
}
const styles = StyleSheet.create({
    LabelStyle: {

        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
        // textTransform: 'capitalize'
    }, IndicatorStyle: {
        backgroundColor: '#1a8a38',
        height: 3,
    },
    MaterialTabBar1: {
        marginLeft: 10,
        marginRight: 10
    },
    tabs: {
        // backgroundColor: "white",
        elevation: 0,
    },
})
export default MessageScreen;