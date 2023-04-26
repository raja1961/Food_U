import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card, Title, Paragraph } from 'react-native-paper';

const SujesstedProduct = ({ item, data, value }) => {
    // console.log('item====', value);
    return (
        <>
            <Card style={styles.CardContainer}>
                <Card.Cover style={styles.CardImg} source={require('../../assets/imgs/MixedSalad.jpg')} />
                <Card.Content>
                    {
                        value == false ? <Title>{item?.title2}</Title> :
                            <Title>{data?.forYouTitle}</Title>
                    }
                    {
                        value == false ?
                            <Paragraph>15 KM | <Ionicons name='star' color={'#EF9F0B'} /> 4.8 (12k)</Paragraph> : undefined
                    }

                </Card.Content>
                {
                    value==false?
                    <Card.Actions>
                    <Text style={[styles.SpecialOffer, { color: '#1a8a38' }]}>$ 6.00 |  </Text>
                    <Ionicons name='bicycle' size={30} color={'#1a8a38'} />
                    <Text style={styles.BelowText}>
                        $2.00
                    </Text>
                </Card.Actions>:
                <Text style={[styles.SpecialOffer, { color: '#1a8a38',paddingLeft:16 }]}>$ 6.00</Text>
                }
                
            </Card>
        </>
    )
}
const styles = StyleSheet.create({
    CardContainer: {
        width: 190,
        marginBottom: 10,
        borderRadius: 20,
        marginHorizontal: 10,
        // padding:5
    },
    CardImg: {
        height: 170,
        width: 189,
        borderRadius: 20,
        resizeMode: 'contain',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    SpecialOffer: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17
    },
    BelowText: {
        paddingLeft: 8,

    },
})
export default SujesstedProduct;   