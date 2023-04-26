import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card, Title, Paragraph } from 'react-native-paper';
import ProductData from '../../utils/JSONDATA/Product.json'
import ProductList from '../../utils/JSONDATA/ListProduct.json'
import ProductComponent from '../components/ProductComponent';
import SujesstedProduct from '../components/SujesstedProduct';
const HomeScreen = ({ navigation }) => {
  const [Product, setProduct] = useState(ProductList)
  const FilterData = (item, id) => {
    setSelectedId1(id)
    const data = ProductList.filter((elem) => {
      if (elem.pid === item.pid) {
        return elem;
      }
    })
    setProduct(data)
  }
  const All = () => {
    setProduct(ProductList)
    setSelectedId1(null)
  }
  const [selectedId1, setSelectedId1] = useState();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <Image style={styles.profileImg} source={require('../../assets/imgs/profileImg.png')} />
        <View style={styles.Delivery}>
          <Text>Delivery to</Text>
          <View style={styles.timeSquireView}>
            <Text style={styles.timeSquire}>Time Squire</Text>
            <TouchableOpacity>
              <Ionicons size={25} name='chevron-down-outline' />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.iconView} onPress={() => navigation.navigate('NotificationScreen')}>
          <Ionicons style={styles.notifications} size={30} name='notifications-outline' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.iconView} >
          <Ionicons size={30} name='cart-outline' />
        </TouchableOpacity>
      </View>
      <View style={styles.searchView}>
        <Ionicons size={30} name='md-search-outline' />
        <TextInput style={styles.TextInput} placeholder='What are you cravin?' />
      </View>
      <View style={styles.SpecialOfferView}>
        <Text style={styles.SpecialOffer}>
          Special Offers
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SpecialOffersScreen')}>
          <Text style={[styles.SpecialOffer, { color: '#1a8a38' }]}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.DiscountImg} source={require('../../assets/imgs/DiscountImg.jpg')} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          ProductList.slice(0, 7).map((item) => {
            return (
              <View key={item.key.toString()}>
                <TouchableOpacity>
                  <Image style={styles.Itemimg} source={require('../../assets/imgs/hambur2.png')} />
                  <Text numberOfLines={1} style={styles.ItemTitle}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )
          }
          )
        }
        <TouchableOpacity>
          <Image style={styles.Itemimg} source={require('../../assets/imgs/hambur2.png')} />
          <Text style={styles.ItemTitle}>more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SpecialOfferView}>
        <Text style={styles.SpecialOffer}>
          Discount Guaranteed!
        </Text>
        <TouchableOpacity>
          <Text style={[styles.SpecialOffer, { color: '#1a8a38' }]}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {ProductList.map((item) => {
          return (
            <View key={item.id.toString()} >
              <SujesstedProduct item={item} value={false} />
            </View>
          )
        })}
      </ScrollView>
      <View style={styles.SpecialOfferView}>
        <Text style={styles.SpecialOffer}>
          Recommended For you
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RecomandScreen')}>
          <Text style={[styles.SpecialOffer, { color: '#1a8a38' }]}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={All} style={selectedId1 === null ? styles.Active : styles.deactive}>
          <Ionicons size={20} name='checkbox' />
          <Text style={selectedId1 === null ? styles.AllactiveText : styles.AlldeactiveText}>All</Text>
        </TouchableOpacity>
        {ProductData.map((item, index) => {
          return (
            < TouchableOpacity key={item.productKey.toString()} style={selectedId1 === index ? styles.Active : styles.deactive} onPress={() =>
              FilterData(item, item.id)
            }>
              <Image style={styles.SegmentImg} source={require('../../assets/imgs/hambur2.png')} />
              <Text style={selectedId1 === index ? styles.AllactiveText : styles.AlldeactiveText}>{item.title}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      {Product.map((item) => {
        return (
          <ProductComponent onPress={() => navigation.navigate('ProductDetailsScreen', { title: item.title })} key={item.key.toString()} data={item} value={false} />
        )
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  profileImg: {
    height: 58,
    width: 58,
    borderRadius: 58,
    marginRight: 7
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
    fontFamily: 'Poppins-SemiBold'
  },
  iconView: {
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 28,
    marginRight: 24
  },
  bell: {
    paddingLeft: 30,
  },
  Delivery: {
    paddingRight: 60
  },
  TextInput: {
    height: 55,
    paddingLeft: 10,
    fontSize: 18,
    width: Dimensions.get('screen').width - 20,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: '#E8E7E6',
    borderRadius: 15,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginBottom: 10
  },
  SpecialOfferView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  SpecialOffer: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17
  },
  DiscountImg: {
    height: 170,
    width: 380,
    borderRadius: 20,
    resizeMode: 'cover',
    marginBottom: 10
  },
  Itemimg: {
    height: 60,
    width: 60,
    marginHorizontal: 15,
    flexWrap: 'wrap',
    marginBottom: 1,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  ItemTitle: {
    marginHorizontal: 15,
    marginBottom: 8,
    textAlign: 'center',
    width: 50,
    alignSelf: 'center',
  },
  BelowText: {
    paddingLeft: 8,

  },
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
  Active: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#1a8a38',
    padding: 10,
    margin: 5,
    borderWidth: 2,
    backgroundColor: '#1a8a38'


  },
  deactive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#1a8a38',
    padding: 10,
    margin: 5,
    borderWidth: 2
  },
  AllactiveText: {
    marginLeft: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: "#fff"
  },
  AlldeactiveText: {
    marginLeft: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: "#1a8a38"
  },
  SegmentImg: {
    height: 30,
    width: 30,
    marginBottom: 1,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  SegmentContent: {
    flexDirection: 'row',
    // marginVertical:10
  },



})


export default HomeScreen;
