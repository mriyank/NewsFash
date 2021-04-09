// import React from "react";
// import { View } from "react-native";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

// export default function App() {
// return <ViewImageScreen />;
// return <ListingDetailsScreen />;
//   return <WelcomeScreen />;
// }

import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
// import App from "./src/App";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";

export default function Main() {
  return (
    <PaperProvider>
      <HomeScreen></HomeScreen>
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <App /> */}
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
