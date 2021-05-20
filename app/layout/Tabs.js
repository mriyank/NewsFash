import React from 'react';

import {
    BottomNavigation,
} from "react-native-paper";

import NewsCategories from "../screens/NewsCategories";


import HomeScreen from "../screens/HomeScreen";



// const HomeRoute = () => <HomeScreen />;
// const WelcomeRoute = () => <WelcomeScreen />;
// const LoginRoute = () => <LoginScreen />;
const NewsCategoriesRoute = props => <NewsCategories {...props} />;
const TopicGroupRoute = () => <HomeScreen />; //temp jugad

const Tabs = props => {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: "home", title: "Home", icon: "home" },
        { key: "profile", title: "Profile", icon: "account" },
    ]);


    const renderScene = BottomNavigation.SceneMap({
        home: () => NewsCategoriesRoute(props),
        profile: TopicGroupRoute,
    });


    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
}

export default Tabs;