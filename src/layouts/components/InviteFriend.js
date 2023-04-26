import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
// const DATA = [
//     {
//         title: ' Lauralee Quintero',
//         id: 0,
//         number: '+0123456789',
//         invite: false
//     },
//     {
//         title: 'Anabel Rohan',
//         id: 1,
//         number: '+0123456789',
//         invite: false

//     },
//     {
//         title: 'Alfanzo Schuessler',
//         id: 2,
//         number: '+0123456789',
//         invite: false
//     },
//     {
//         title: 'Augustina Midgett',
//         id: 3,
//         number: '+0123456789',
//         invite: false
//     },
//     {
//         title: 'Freida Varnes',
//         id: 4,
//         number: '+0123456789'
//     },
//     {
//         title: 'Francrne Vandyne',
//         id: 5,
//         number: '+0123456789',
//         invite: false
//     },
//     {
//         title: 'Geoffry Mott',
//         id: 6,
//         number: '+0123456789',
//         invite: false
//     },
//     {
//         title: 'Raford chenal',
//         id: 7,
//         number: '+0123456789',
//         invite: false
//     },
//     {
//         title: 'Florencio Dorrance',
//         id: 8,
//         number: '+0123456789',
//         invite: false
//     },

// ]
const InviteFriend = ({ item, id, itemData, data, value }) => {
    // console.log("item======2", data?.id);

    // const [select, setSelect] = useState(item);
    // const OnSelect = (itemList) => {
    //     // const itemList = [...itemData];
    //     if (itemList.press == false) {
    //         // setSelect(true)
    //         itemList.press = true;
    //         setSelect(itemList);
    //         console.log("true");
    //         id(itemList.id);
    //         itemData(itemList);

    //     }
    //     else {
    //         console.log("false");
    //         // setSelect(false)
    //         itemList.press = false;
    //         setSelect(itemList);
    //     }
    // }
    // console.log(select);
    const [select, setSelect] = useState(false)
    const OnSelect = () => {
        if (select == false) {
            setSelect(true)
        }
        else {
            setSelect(false)
        }
    }
    return (
        <>
            <View style={styles.container}>

                {value == false ? <View>
                    {  data?.status == 'Orders'?
                        <Image style={styles.profileImg} source={data?.image} />:
                        <Image style={styles.profileImg} source={data?.image} />
                        }
                    </View>
                     :
                    <Image style={styles.profileImg} source={require('../../assets/imgs/profileImg.png')} />}
                <View style={{ alignSelf: 'center' }}>
                    {
                        value == false ?
                            <Text style={styles.profilename}>
                                {data?.title}
                            </Text> :
                            <Text style={styles.profilename}>
                                {item?.title}
                            </Text>
                    }
                    {
                        value == false ?
                            <Text>{data?.date}</Text>
                            :
                            <Text style={styles.number}>+1234569870</Text>
                    }
                </View>
                {
                    value == false ?

                        undefined
                        :
                        <TouchableOpacity style={{ position: 'absolute', right: 10, alignSelf: 'center' }} onPress={() => OnSelect(select)}>
                            {
                                select === false ?
                                    <View style={styles.invite}>
                                        <Text style={styles.inviteText}>{item?.invite}</Text>
                                    </View> :
                                    <View style={styles.invited}>
                                        <Text style={[styles.inviteText, { color: '#1a8a38' }]}>{item?.invited}</Text>
                                    </View>
                            }
                        </TouchableOpacity>
                }

                {
                    value === false ?
                        <View style={{ alignSelf: 'center', position: 'absolute', right: 0 }}>
                            <Text>
                                {data.Price}
                            </Text>
                            <View style={styles.status}>
                                <Text>
                                    {data.status}
                                </Text>
                                {
                                    data?.status == 'Orders' ? <Ionicons style={styles.arrowIcon} color={'red'} name="arrow-up" /> : <Ionicons style={styles.arrowIcon} color={'green'} name="arrow-down-outline" />
                                }
                            </View>
                        </View> : undefined
                }


                {/* {
                value==false?<View style={{alignSelf:'center',position:'absolute',right:0}}>
                { data?.status==='Orders'? <Text>
                    {data?.status}
                </Text>:undefined}
                { data?.status==='Top-Up'? <Text>
                    {data?.status}
                </Text>:undefined}
               </View>:undefined
               } */}
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        // alignItems: 'center',


    },
    profileImg: {
        height: 70,
        width: 70,
        borderRadius: 40,
        marginRight: 12
    },
    profilename: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    },
    number: {
        fontSize: 15
    },
    invite: {
        backgroundColor: '#1a8a38',
        height: 35,
        width: 85,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inviteText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold'
    },
    invited: {
        height: 35,
        width: 85,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#1a8a38',
        borderWidth: 1,

    },
    EWalletDateSection: {
        flexDirection: 'row',

    },
    status: {
        flexDirection: 'row',
    },
    arrowIcon: {
        marginLeft: 5
    }

})
export default InviteFriend;