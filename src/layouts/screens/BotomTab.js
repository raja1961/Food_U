import React from 'react';
import { View, Text, FlatList, Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view'
import All from '../components/All';
import Pizza from '../components/Pizza';
const BotomTab = () => {
    const windowWidth = Dimensions.get('screen').width;
    const renderHeader = () => {
        return (
            <View>
                <Text>
                    hiiiii
                </Text>
            </View>
        )
    }
    const TabButton = (props) => {
        return (
            <MaterialTabBar
                activeColor="#fff"



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
        <SafeAreaView>
            <ScrollView>
            <Tabs.Container renderHeader={renderHeader}
                renderTabBar={TabButton} >
                <Tabs.Tab name="A">
                    <Tabs.ScrollView>
                        <All />
                    </Tabs.ScrollView>
                </Tabs.Tab>
                <Tabs.Tab name="B">
                    <Tabs.ScrollView>
                        <Pizza />
                    </Tabs.ScrollView>
                </Tabs.Tab>
                {/* <Tabs.Tab name="C">
                    <Tabs.ScrollView>
                        <Pizza />
                    </Tabs.ScrollView>
                </Tabs.Tab> */}
            </Tabs.Container>
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    LabelStyle: {
        color: 'black',
        textTransform: 'capitalize'
    }, IndicatorStyle: {
        backgroundColor: '#bd623e',
        height: null,
        top: '12%',
        bottom: '12%',
        zIndex: -2,
        borderRadius: 10
    },
    MaterialTabBar1: {
        marginLeft: 10,
        marginRight: 10
    }
})
export default BotomTab;