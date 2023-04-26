import React,{useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomHeader from "../components/CustomHeader";
import { RadioButton } from 'react-native-paper';
const DATA = [
    {
        title: 'one',
        id: 0,
        language: 'English(US)'
    },
    {
        title: 'two',
        id: 1,
        language: 'English(UK)'

    },
    {
        title: 'Four',
        id: 2,
        language: 'Language'
    },
    {
        title: 'Five',
        id: 3,
        language: 'Mandarin'
    },
    {
        title: 'Six',
        id: 4,
        language: 'Hindi'
    },
    {
        title: 'Saven',
        id: 5,
        language: 'Spanish'
    },
    {
        title: 'eaight',
        id: 6,
        language: 'French'
    },
    {
        title: 'nine',
        id: 7,
        language: 'Arabic'
    },
    {
        title: 'ten',
        id: 8,
        language: 'Bengali'
    },
    {
        title: 'eleven',
        id: 9,
        language: 'Russian'
    },
    {
        title: 'twielve',
        id: 10,
        language: 'Indonesia'
    },

]
const LanguageScreen = () => {
    const [checked, setChecked] = useState('first');
    return (
        <>
            <CustomHeader title={'Language'} />
            <View style={styles.Maincontainer}>
                <Text style={styles.Text}>Sujesteed</Text>
                {DATA.map((item) => {
                    return (
                        <View key={item.id.toString()} >
                            {item.id === 2 ? <Text style={styles.Text}>Language</Text>

                                :
                                <View style={styles.Container}>
                                    <Text style={styles.Text}>{item.language}</Text>

                                    <RadioButton
                                    
                                        value={item.title}
                                        status={checked === item.title ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked(item.title)}
                                    />
                                </View>
                            }
                        </View>
                    )
                })}
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:8
    },
    Text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18
    },
    Maincontainer:{
        padding:15
    }
})
export default LanguageScreen;