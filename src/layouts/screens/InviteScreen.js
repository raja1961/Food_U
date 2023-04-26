import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import InviteFriend from "../components/InviteFriend";
import CustomHeader from "../components/CustomHeader";
const DATA = [
    {
        title: ' Lauralee Quintero',
        id: 0,
        number: '+0123456789',
        invite: 'invite',
        invited: 'invited',
        press: false,
    },
    {
        title: 'Anabel Rohan',
        id: 1,
        number: '+0123456789',
        invite: 'invite',
        invited: 'invited',
        press: false,

    },
    {
        title: 'Alfanzo Schuessler',
        id: 2,
        number: '+0123456789',
        invite: 'invite',
        invited: 'invited',
        press: false,
    },
    {
        title: 'Augustina Midgett',
        id: 3,
        number: '+0123456789',
        invite: 'invite',
        invited: 'invited',
        press: false,
    },
    {
        title: 'Freida Varnes',
        id: 4,
        number: '+0123456789',
        invite: 'invite',
        invited: 'invited',
        press: false,
    },
    {
        title: 'Francrne Vandyne',
        id: 5,
        number: '+0123456789',
        invite: 'invite',
        invited: 'invited',
        press: false,
    },
    {
        title: 'Geoffry Mott',
        id: 6,
        number: '+0123456789',
        invite: 'invite',
        invited: 'invited',
        press: false,
    },
    {
        title: 'Raford chenal',
        id: 7,
        number: '+0123456789',
        invite: 'invite',
        invited: 'invited',
        press: false,
    },
    {
        title: 'Florencio Dorrance',
        id: 8,
        number: '+0123456789',
        invite: 'invite',
        invited: 'invited',
        press: false,
    },

]
const InviteScreen = () => {
    // const inviteFriendId=(data)=>{
    // }
    return (
        <>
            <CustomHeader title={'Invite Screen'} />
            <ScrollView>
                {
                    DATA.map((item) => {
                        return (
                            <View  style={{marginVertical:5}} key={item.id.toString()}>
                                <InviteFriend /*id={inviteFriendId}*/  item={item} /*itemData={getIte}*/ />
                            </View>
                        )
                    }
                    )

                }
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',

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
        position: 'absolute',
        right: 10,
        backgroundColor: '#1a8a38',
        height: 35,
        width: 85,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inviteText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold'
    },
    invited: {
        position: 'absolute',
        right: 10,
        height: 35,
        width: 85,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#1a8a38',
        borderWidth: 1,
    }

})
export default InviteScreen;