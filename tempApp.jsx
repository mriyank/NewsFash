import React, { useEffect } from "react";
import { AppRegistry, StatusBar, View } from "react-native";
import {
  Paragraph,
  Provider as PaperProvider,
  Appbar
} from "react-native-paper";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './app/layout/Tabs';

import { name as appName } from "./app.json";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";

import Display from './app/components/Display';
// import Post from "./app/screens/Post";

// *******************Drawer***********************

// import Drawer from "./app/screens/Drawer";
// import Drawer1 from "./app/screens/Drawer";
// import { DrawerContent } from "./app/screens/DrawerContent";
// ******************************

const Stack = createStackNavigator();

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";


export default function Main() {

  const [auth, setAuth] = React.useState({
    isAuthenticated: true
  });




  useEffect(() => {

    // setTimeout(, 5000);

  }, []);


  return (
    <PaperProvider>
      <NavigationContainer>
        <Display show={!auth.isAuthenticated}>
          <Paragraph onPress={() => setAuth({ isAuthenticated: true })}>Authenticating...</Paragraph>
        </Display >
        <Display show={auth.isAuthenticated}>
          <Stack.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{
              header: ({ scene, previous, navigation }) => {

                const { options } = scene.descriptor;
                const title =
                  options.headerTitle !== undefined
                    ? options.headerTitle
                    : options.title !== undefined
                      ? options.title
                      : scene.route.name;

                return (
                  <View>
                    <StatusBar
                      backgroundColor="#000561"
                      barStyle="light-content"
                    />
                    <Appbar.Header dark={true} statusBarHeight={0}>
                      <Appbar.Content title={title} subtitle={""} />
                      {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
                      <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
                    </Appbar.Header>
                  </View>
                )
              }
            }}
          >
            <Stack.Screen
              name="Home"
              component={Tabs}
              options={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
                return { headerTitle: routeName };
              }}
            />
          </Stack.Navigator>
        </Display>
      </NavigationContainer>
    </PaperProvider>

  );
}

AppRegistry.registerComponent(appName, () => Main);
