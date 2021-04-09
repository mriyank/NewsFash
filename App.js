import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
// import App from "./src/App";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import HomeScreen from "./app/screens/HomeScreen";
import NewsCategories from "./app/screens/NewsCategories";

export default function Main() {
  return (
    <PaperProvider>
      {/* <HomeScreen></HomeScreen> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <App /> */}
      <NewsCategories></NewsCategories>
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
