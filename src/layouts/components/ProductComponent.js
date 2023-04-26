import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card } from 'react-native-paper';
const ProductComponent = ({ data, value, item, onPress, Product, active, }) => {
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
    <View>
      <Card onPress={onPress} style={{ marginVertical: 10, borderRadius: 20, width: 390, alignSelf: 'center' }} >
        <View style={styles.SegmentContent}>
          {value === false ? <Image style={styles.CardImg} source={require('../../assets/imgs/MixedSalad.jpg')} /> :
            <View>
              <Image style={styles.CardImg} source={require('../../assets/imgs/MixedSalad.jpg')} />
              {item?.promo === 'PROMO' ? <Text style={styles.promo}>{item?.promo}</Text> : undefined}
            </View>
          }
          <View style={styles.Delivery}>
            {
              active == false && Product?.status == 'New' ?
                <View style={styles.status} >
                  <Text style={{ color: '#fff' }}>{Product?.status}</Text>
                </View> : undefined
            }
            {value === false ? <Text style={[styles.SpecialOffer, { color: '#1a8a38', marginTop: 10 }]}>{data?.title}</Text> :

              item?.restaurentName ? <Text style={[styles.SpecialOffer, { color: '#1a8a38', marginTop: 10 }]}>{item?.restaurentName}</Text> :
                <Text style={[styles.SpecialOffer, { color: '#3B3B3A', marginTop: 15, }]}>{Product?.title}</Text>
            }
            {
              active == false ? <Text style={styles.Price}
              >$10.00</Text> : <View style={[styles.timeSquireView, { marginBottom: 10, marginTop: 10 }]}>
                <Text >800m  |  </Text>
                <TouchableOpacity>
                  <Ionicons name='star' size={20} color={'#EF9F0B'} />
                </TouchableOpacity>
                <Text> 4.9 (2.3k)</Text>
              </View>
            }
            {
              active == false ? undefined :
                <View style={styles.timeSquireView}>
                  <TouchableOpacity>
                    <Ionicons name='bicycle' size={30} color={'#1a8a38'} />
                  </TouchableOpacity>
                  <Text style={styles.BelowText}>$2.00</Text>
                  {select == false ? <TouchableOpacity onPress={OnSelect}>
                    <Ionicons size={24} onPress={OnSelect} style={select == false ? styles.active : styles.deactive} name="heart" />
                  </TouchableOpacity> : <TouchableOpacity onPress={OnSelect}>
                    <Ionicons size={24} onPress={OnSelect} style={select == false ? styles.active : styles.deactive} name="heart-outline" />
                  </TouchableOpacity>}
                </View>
            }
          </View>
        </View>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  SegmentContent: {
    flexDirection: 'row',

    // marginVertical:10
  },
  CardImg: {
    height: 133,
    width: 160,
    borderRadius: 20,
    resizeMode: 'contain',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  Delivery: {
    // paddingRight: 60,
    marginHorizontal: 20
  },
  SpecialOffer: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17
  },
  timeSquireView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  BelowText: {
    paddingLeft: 8,

  },
  active: {
    color: '#fa5d55',
    // backgroundColor:'#fa5d55'
  },
  deactive: {
    color: '#fa5d55'
  },
  promo: {
    position: 'absolute',
    top: 15,
    left: 5,
    paddingHorizontal: 15,
    paddingVertical: 2,
    backgroundColor: '#26ad38',
    color: '#fff',
    borderRadius: 6
  },
  status: {
    width: 60,
    paddingVertical: 5,
    backgroundColor: '#1BAC4B',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10
  },
  Price: {
    paddingTop: 15,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#46BC6E'
  }
})
export default ProductComponent