import React from 'react';
import { View, Dimensions, StyleSheet, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view'
import Active from "../components/Active";
import Completed from '../components/Completed';
import Cancelled from '../components/Cancelled';
import CustomHeader from "../components/CustomHeader";



const OrderScreen = () => {
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
                <Tabs.Tab name="Active">
                    <>

                        <Tabs.ScrollView >
                            <Active />
                        </Tabs.ScrollView>
                    </>

                </Tabs.Tab>
                <Tabs.Tab name="Completed">
                    <Tabs.ScrollView scrollIndicatorInsets={false}>
                        <Completed />
                    </Tabs.ScrollView>
                </Tabs.Tab>
                <Tabs.Tab name="Cancelled">
                    <Tabs.ScrollView scrollIndicatorInsets={false}>
                        <Cancelled />
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
export default OrderScreen;