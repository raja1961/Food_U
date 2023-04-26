import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import CustomCheckBox from '../screens/CustomCheckBox';
import WorkThroughScreen from '../screens/WorkThroughScreen';
import WorkThroughFlatlist from '../screens/WorkThroughFlatlist';
import LoginScreen from '../screens/LoginScreen';
import OTPCodeVerification from '../screens/OTPCodeVerificationScreen';
import ProfileDataFilledScreen from '../screens/ProfileDataFilledScreen';
import LocationScreen from '../screens/LocationScreen';
import BottomSheetScreen from '../screens/BottomSheetScreen';
import CreatePinScreen from '../screens/CreatePinScreen';
import CartScreen from '../screens/CartScreen';
import RecomandScreen from '../screens/RecomandScreen';
import SpecialOffersScreen from '../screens/SpecialOffersScreen';
import BotomTab from '../screens/BotomTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import OrderScreen from '../screens/OrderScreen';
import MessageScreen from '../screens/MessageScreen';
import EWalletScreen from '../screens/E-WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyFavoriteScreen from '../screens/MyFavoriteScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import ProfileDataScreen from '../screens/ProfileDataScreen';
import AddressScreen from '../screens/AddressScreen';
import NotificationCustomizeScreen from '../screens/NotificationCustomizeScreen';
import SecurityScreen from '../screens/SecurityScreen';
import LanguageScreen from '../screens/LanguageScreen';
import InviteScreen from '../screens/InviteScreen';
import HelpCenter from '../screens/HelpCenter';
import CustomerSupport from '../screens/CustomerSupport';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';
import TopUpEWalletScreen from '../screens/TopUpEWalletScreen';
import EnterYourPinScreen from '../screens/EnterYourPinScreen';
import TopUpEWalletPaymentScreen from '../screens/TopUpEWalletPaymentScreen';
import ChatScreen from '../screens/ChatScreen';
import CancelOrder from '../screens/CancelOrder';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CheckOutsOrders from '../screens/CheckOutsOrders';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarInactiveTintColor: '#b0adac',
            tabBarActiveTintColor: '#199e1e',
            tabBarLabelStyle: { fontSize: 14, fontFamily: "Poppins-SemiBold", },
            tabBarItemStyle: { width: 100 },
            headerShown: false
        }} barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) =>

                (
                    <Ionicons color={focused ? "#199e1e" : "#b0adac"} name="home" size={30} />

                ),
            }} />
            <Tab.Screen name="Orders" component={OrderScreen} options={{
                tabBarIcon: ({ focused }) =>

                (
                    <Ionicons color={focused ? "#199e1e" : "#b0adac"} name="ios-reader" size={30} />
                ),
            }} />
            <Tab.Screen name="Message" component={MessageScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons color={focused ? "#199e1e" : "#b0adac"} name="chatbubble-ellipses-sharp" size={30} />
                ),
            }} />
            <Tab.Screen name="E-Wallet" component={EWalletScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons color={focused ? "#199e1e" : "#b0adac"} name="ios-wallet" size={30} />
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons color={focused ? "#199e1e" : "#b0adac"} name="ios-person" size={30} />
                ),
            }} />


        </Tab.Navigator>
    )
}

const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="BottomTab">
            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SpecialOffersScreen" style={{}} component={SpecialOffersScreen} options={{ headerShown: false }} />
            <Stack.Screen name="RecomandScreen" style={{}} component={RecomandScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MyFavoriteScreen" style={{}} component={MyFavoriteScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PaymentMethodScreen" style={{}} component={PaymentMethodScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ProfileDataScreen" style={{}} component={ProfileDataScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddressScreen" style={{}} component={AddressScreen} options={{ headerShown: false }} />
            <Stack.Screen name="NotificationCustomizeScreen" style={{}} component={NotificationCustomizeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SecurityScreen" style={{}} component={SecurityScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LanguageScreen" style={{}} component={LanguageScreen} options={{ headerShown: false }} />
            <Stack.Screen name="InviteScreen" style={{}} component={InviteScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HelpCenter" style={{}} component={HelpCenter} options={{ headerShown: false }} />
            <Stack.Screen name="CustomerSupport" style={{}} component={CustomerSupport} options={{ headerShown: false }} />
            <Stack.Screen name="TransactionHistoryScreen" style={{}} component={TransactionHistoryScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TopUpEWalletScreen" style={{}} component={TopUpEWalletScreen} options={{ headerShown: false }} />
            <Stack.Screen name="EnterYourPinScreen" style={{}} component={EnterYourPinScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TopUpEWalletPaymentScreen" style={{}} component={TopUpEWalletPaymentScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ChatScreen" style={{}} component={ChatScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CancelOrder" style={{}} component={CancelOrder} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetailsScreen" style={{}} component={ProductDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CheckOutsOrders" style={{}} component={CheckOutsOrders} options={{ headerShown: false }} />

            <Stack.Screen name="NotificationScreen" options={{ headerShown: false }} style={{}} component={NotificationScreen} />
            <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CustomCheckBox" component={CustomCheckBox} options={{ headerShown: false }} />
            <Stack.Screen name="WorkThroughScreen" component={WorkThroughScreen} options={{ headerShown: false }} />
            <Stack.Screen name="WorkThroughFlatlist" component={WorkThroughFlatlist} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="OTP Code Verification" options={{ headerShown: false }} style={{}} component={OTPCodeVerification} />
            <Stack.Screen name="Fill Your Profile" style={{}} component={ProfileDataFilledScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Set your Location" style={{}} component={LocationScreen} />
            <Stack.Screen name="BottomSheetScreen" style={{}} component={BottomSheetScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Create New Pin" options={{ headerShown: false }} style={{}} component={CreatePinScreen} />
            <Stack.Screen name="BotomTab" options={{ headerShown: false }} style={{}} component={BotomTab} />

        </Stack.Navigator>
    );
};

export default AppNavigation;
