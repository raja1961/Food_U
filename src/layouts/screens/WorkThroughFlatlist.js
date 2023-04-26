import React from "react";
import { FlatList, StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

const DATA = [
    {
        id: 0,
        image: require('../../assets/imgs/workThroughFristImage.png'),
        title: 'Order for Food',
        Description: 'Lorem ipsum dolor sit amet. consectetur \n adipicing elit. sed do eiusmod tempor \n incidunt ut labore et dolore magna alique.'
    },
    {
        id: 1,
        image: require('../../assets/imgs/Payment.png'),
        title: 'Easy Payment',
        Description: 'Lorem ipsum dolor sit amet. consectetur \n adipicing elit. sed do eiusmod tempor \n incidunt ut labore et dolore magna alique.'
    },
    {
        id: 2,
        image: require('../../assets/imgs/Delivery.png'),
        title: 'Fast Delivery',
        Description: 'Lorem ipsum dolor sit amet. consectetur \n adipicing elit. sed do eiusmod tempor \n incidunt ut labore et dolore magna alique.'
    },
]
const width = Dimensions.get('window').width;
const WorkThroughFlatlist = ({ navigation }) => {
    // const navigation = useNavigation();
    const [isActive, setIsActive] = React.useState(0);
    const ref = React.useRef();

    const Footer = () => {
        // const [height,width]=Dimensions.get('screen')
        return (
            <View style={styles.footerSection}>
                <View style={styles.FooterIndicator} >
                    {
                        DATA.map((_, index) => (
                            // console.log(index);
                            <View key={index} style={[styles.indicator, isActive == index && {
                                backgroundColor: '#3ac769',
                                width: 25
                            },]} />
                        ))
                    }
                </View>
                <View style={styles.btn}>
                    {
                        (isActive !== DATA.length - 1 ?
                            <TouchableOpacity onPress={goNextSlides} >
                                <Text style={styles.btnText}>Next</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={[goNextSlides,]} >
                                <Text onPress={() => navigation.navigate('OnboardingScreen')} style={styles.btnText}>Get Strted</Text>
                            </TouchableOpacity>
                        )

                    }
                </View>
            </View>


        )

    }
    const goNextSlides = () => {
        const nxtSlideIndex = isActive + 1;
        // console.log('next slide index ==========> ', nxtSlideIndex);
        if (nxtSlideIndex != DATA.length) {
            const offset = nxtSlideIndex * width;
            //   console.log('offset =======>', offset);
            ref?.current?.scrollToOffset({ offset });
            setIsActive(nxtSlideIndex);
        }

    }
    const updateSlide = (e) => {
        // console.log(e);
        // console.log('event ===========> ', e.nativeEvent)
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        // console.log('X========>', contentOffsetX);
        const currentIndex = Math.round(contentOffsetX / width);
        console.log('Index ========>', currentIndex);
        setIsActive(currentIndex);
    }


    return (<View style={styles.container}>

        <FlatList
            ref={ref}
            contentContainerStyle={styles.flatlist}
            horizontal
            onMomentumScrollEnd={updateSlide}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                // console.log('hdgdggd===', item);

                return (
                    <View>
                        <Image style={styles.img} source={item.image} />
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.Description}>{item.Description}</Text>
                        </View>

                    </View>
                )

            }}

        />
        <Footer />
    </View>
    )
}
const styles = StyleSheet.create({
    container: {  
        flex:1
    },
    img: {
        height: 300,
        width: 300,
        marginBottom: 20,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 38,
        color: '#02bf3b',
        fontFamily: 'Poppins-SemiBold'

    },
    Description: {
        textAlign: 'center',
        fontSize: 18,
        width:Dimensions.get('window').width
    },
    footerSection: {
        height: Dimensions.get('window').height * 0.24,
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    indicator: {
        height: 8,
        width: 8,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 5
    },
    FooterIndicator: {

        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50

    },
    flatlist: {

    },
    btn: {
        backgroundColor: '#02bf3b',
        height: 50,
        width: Dimensions.get('screen').width - 50,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'center'
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    }



})

export default WorkThroughFlatlist;