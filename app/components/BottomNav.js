import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const HomeRoute = () => <Text>Home</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "profile", title: "Profile", icon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
