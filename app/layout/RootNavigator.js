import React from 'react';
import { StatusBar } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './Tabs';
import TopicGroup from "../screens/TopicGroup";

// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import HomeScreen from "./app/screens/HomeScreen";
// import LoginScreen from "./app/screens/LoginScreen";

const Stack = createStackNavigator();


const RootNavigator = () => {



    return (
        <>
            <StatusBar
                backgroundColor="#000561"
                barStyle="light-content"
            />
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="none"
            >
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="TopicGroup"
                    component={TopicGroup}
                />
            </Stack.Navigator>
        </>
    );
}

export default RootNavigator;