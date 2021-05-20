import * as React from "react";
import { AppRegistry } from "react-native";
import {
  BottomNavigation,
  Provider as PaperProvider,
} from "react-native-paper";
import { name as appName } from "./app.json";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import NewsCategories from "./app/screens/NewsCategories";
import LoginScreen from "./app/screens/LoginScreen";
import TopicGroup from "./app/screens/TopicGroup";
// import Post from "./app/screens/Post";

import Post from "./app/components/Post";
import GroupScreen from "./app/screens/GroupScreen";
import AdminScreen from "./app/screens/AdminScreen";

// const HomeRoute = () => <HomeScreen />;
// const WelcomeRoute = () => <WelcomeScreen />;
// const LoginRoute = () => <LoginScreen />;
const NewsCategoriesRoute = () => <NewsCategories />;
const TopicGroupRoute = () => <TopicGroup />;

export default function Main() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "profile", title: "Profile", icon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: NewsCategoriesRoute,
    profile: TopicGroupRoute,
  });

  return (
    <PaperProvider>
      {/* <GroupScreen></GroupScreen> */}

      <WelcomeScreen></WelcomeScreen>

      {/* <LoginScreen></LoginScreen> */}

      {/* <AdminScreen></AdminScreen> */}

      {/* <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      /> */}
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
