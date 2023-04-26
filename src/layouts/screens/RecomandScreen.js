import React,{useState} from "react";
import { Text,View,ScrollView,TouchableOpacity,Image,StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProductData from '../../utils/JSONDATA/Product.json'
import CustomHeader from "../components/CustomHeader";
import ProductList from '../../utils/JSONDATA/ListProduct.json'
import ProductComponent from '../components/ProductComponent';

const RecomandScreen=()=>{
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
    return(
        <ScrollView>
            <CustomHeader title={"Recommended For You"} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={All} style={selectedId1 === null ? styles.Active : styles.deactive}>
          <Ionicons size={20} name='checkbox' />
          <Text style={selectedId1 === null ? styles.AllactiveText : styles.AlldeactiveText}>All</Text>
        </TouchableOpacity>
        {ProductData.map((item, index) => {
          return (
            <TouchableOpacity key={item.id.toString()} style={selectedId1 === index ? styles.Active : styles.deactive} onPress={() =>
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
          <ProductComponent data={item} value={false} />
        )
      })}
      </ScrollView>
    )
}
const styles =StyleSheet.create({
    Active: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: '#1a8a38',
        padding: 10,
        margin: 5,
        borderWidth: 2,
        backgroundColor: '#1a8a38',
        height:45
    
    
      },
      deactive: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: '#1a8a38',
        padding: 10,
        margin: 5,
        borderWidth: 2,
        height:45
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
export default RecomandScreen;