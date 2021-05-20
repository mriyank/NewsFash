import React, { useEffect } from "react";
import { AppRegistry } from "react-native";
import { Paragraph, Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./app/layout/RootNavigator";

import { name as appName } from "./app.json";

import Display from "./app/components/Display";

export default function Main() {
  const [auth, setAuth] = React.useState({
    isAuthenticated: true,
  });

  useEffect(() => {
    // setTimeout(, 5000);
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Display show={!auth.isAuthenticated}>
          <Paragraph onPress={() => setAuth({ isAuthenticated: true })}>
            Authenticating...
          </Paragraph>
        </Display>

        <Display show={auth.isAuthenticated}>
          <RootNavigator />
        </Display>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
