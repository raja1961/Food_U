import React, { useRef,useEffect } from "react";
import { View, Button,TouchableOpacity,StyleSheet,Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import LocationScreen from "./LocationScreen";
import BottomSheet from "../components/BottomSheet";
import CustomHeader from '../components/CustomHeader';
const BottomSheetScreen=(title)=> {
useEffect(()=>{
  refRBSheet.current.open()
},[])
  const refRBSheet = useRef();
  return (
    <>
    <CustomHeader title={'Set Your Location'} />
    <LocationScreen />
    <View>
      {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <BottomSheet />
      </RBSheet>
    </View>
    <TouchableOpacity onPress={ ()=>refRBSheet.current.open()} style={styles.btn}>
            <View ></View>
        </TouchableOpacity>
    </>
  );
}
const styles=StyleSheet.create({
  btn:{
    height:5,
    width:100,
    borderWidth:2,
    // backgroundColor:'#e3e4e6',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:10,
    borderRadius:20,
    borderColor:'#979899'
  }
})
export default BottomSheetScreen;