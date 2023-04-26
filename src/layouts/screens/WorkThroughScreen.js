import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import Swiper from 'react-native-swiper'



const WorkThroughScreen = () => {

    const [count,setCount]=useState(0)
    // const increment=()=>{
    //     // if(setCount==count) {
    //     //     count++
    //     // }
    // }

    return (
        <>
            <Swiper  dotColor="#6f706f" onIndexChanged={(index)=>{
                // setCount(index)
                
            }
            
            }  activeDotColor="#02bf3b" style={styles.Container}  >
               
                <View style={styles.slide}>
                    <Image style={styles.Img} source={require('../../assets/imgs/workThroughFristImage.png')} />
                    <Text style={styles.TextHeader}>Order for Food</Text>
                    <Text style={styles.TextDescription} >
                        Lorem ipsum dolor sit amet. consectetur{'\n'} adipicing elit. sed do eiusmod tempor{'\n'} incidunt ut labore et dolore magna alique.
                    </Text>
                </View>
                <View style={styles.slide}>
                    <Image style={styles.Img} source={require('../../assets/imgs/Payment.png')} />
                    <Text style={styles.TextHeader}>Easy Payment</Text>
                    <Text style={styles.TextDescription} >
                        Lorem ipsum dolor sit amet. consectetur{'\n'} adipicing elit. sed do eiusmod tempor{'\n'} incidunt ut labore et dolore magna alique.
                    </Text>
                </View>
                <View style={styles.slide}>
                    <Image style={styles.Img} source={require('../../assets/imgs/Delivery.png')} />
                    <Text style={styles.TextHeader}>Fast Delivery</Text>
                    <Text style={styles.TextDescription} >
                        Lorem ipsum dolor sit amet. consectetur{'\n'} adipicing elit. sed do eiusmod tempor{'\n'} incidunt ut labore et dolore magna alique.
                    </Text>
                </View>

            </Swiper>
            <TouchableOpacity style={[styles.Btn]}>
                <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
        </>

    )
}
const styles = StyleSheet.create({
    Container:{


    },
    slide: {
        //   flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
        // backgroundColor:'rgba(0,0,0,.2)', width: 20, height: 20,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    Img: {
        height: 300,
        width: 300,
    },
    TextHeader: {
        marginTop: 30,
        fontSize: 40,
        color: '#02bf3b',
        marginBottom: 10
    },
    TextDescription: {
        fontSize: 18,
        textAlign: 'center'
    },
    Btn: {
        height: 50,
        width: 370,
        backgroundColor: '#02bf3b',
        margin: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30
    },
    btnText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: 'white'
    }
})
export default WorkThroughScreen