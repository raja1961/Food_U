import React from "react";
import { ScrollView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import ProductComponent from "../components/ProductComponent";
import ProductList from '../../utils/JSONDATA/ListProduct.json'

const MyFavoriteScreen=()=>{
    return(
       <>
       <CustomHeader title={'My Favorite Restaurants'} name={'search-outline'}/>
       <ScrollView>
       {
        ProductList.map((item)=>{
            if(item.restaurentName){
                return(
                    <ProductComponent key={item.id.toString()} item={item}  value={true} />
                )
            }
          
        }
        )
       }
       </ScrollView>

       </>
    )
}
export default MyFavoriteScreen;
