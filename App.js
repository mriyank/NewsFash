import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import NewsCategories from "./app/screens/NewsCategories";
import LoginScreen from "./app/screens/LoginScreen";
import AdminScreen from "./app/screens/AdminScreen";

export default function Main() {
  return (
    <PaperProvider>
      {/* <HomeScreen></HomeScreen> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      {/* <NewsCategories></NewsCategories> */}
      <AdminScreen></AdminScreen>
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
