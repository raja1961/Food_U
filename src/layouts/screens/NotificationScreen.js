import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity ,ScrollView} from "react-native";
import CustomHeader from "../components/CustomHeader";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Notification from '../../utils/JSONDATA/Notification.json'
const NotificationScreen = () => {
  return (
    <>
        <CustomHeader title={'Notification'} name={"ellipsis-horizontal-circle-outline"} />
      <ScrollView>
      {
        Notification.map((item) => {
          // console.log(item.description);
          return (
            <ScrollView>
              <View style={styles.headerSection}>
                <View style={styles.ImageContainer} >
                  <Image style={styles.profileImg} source={require('../../assets/imgs/close-window.png')} />
                </View>
                <View style={styles.Delivery}>
                  <Text style={styles.Delivery}>Order Cancelled</Text>
                  <View style={styles.timeSquireView}>
                    <Text style={styles.timeSquire}>19 Dec,2022  |  20:50PM</Text>

                  </View>
                </View>
                <TouchableOpacity style={styles.iconView} >
                  <Text style={{ color: '#fff', fontFamily: 'Poppins-SemiBold' }}>New</Text>
                </TouchableOpacity>
              </View>
              <View>
              <Text style={{textAlign:'center'}}>{item.description}</Text>
              </View>
            </ScrollView>

          )
        })
      }
      </ScrollView>

    </>

  )
}
const styles = StyleSheet.create({
  profileImg: {
    height: 40,
    width: 40,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  timeSquireView: {
    flexDirection: 'row',
  },
  timeSquire: {
    fontSize: 15,
  },
  iconView: {
    alignItems: 'center',
    borderRadius: 6,
    position: 'absolute',
    right: 6,
    backgroundColor: '#1a8a38',
    height: 30,
    width: 50,
    justifyContent: 'center'
  },
  bell: {
    paddingLeft: 20,

  },
  Delivery: {
    paddingRight: 20,
    fontFamily: 'Poppins-SemiBold'
  },
  ImageContainer: {
    padding: 10,
    backgroundColor: '#f5e5e4',
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 10
  }
})

export default NotificationScreen