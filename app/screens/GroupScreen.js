import React, { useState } from "react";
import { Appbar, Card, Title, Paragraph, Button } from "react-native-paper";
import { Platform, Text, View, StyleSheet, ScrollView } from "react-native";
// import { black } from "react-native-paper/lib/typescript/styles/colors";
import AppText from "./../components/AppText";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
const GroupScreen = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="News Categories" subtitle={""} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.cont}>
        <View style={styles.container}>
          <Title>Celebrity</Title>
          <Paragraph>
            Dont trust on paparazzis? Get your news verefied with us!
          </Paragraph>
        </View>

        <View style={styles.container}>
          <Title>Celebrity</Title>
          <Paragraph>
            Dont trust on paparazzis? Get your news verefied with us!
          </Paragraph>
        </View>
        <View style={styles.container}>
          <Title>Celebrity</Title>
          <Paragraph>
            Dont trust on paparazzis? Get your news verefied with us!
          </Paragraph>
        </View>
        <View style={styles.container}>
          <Title>Celebrity</Title>
          <Paragraph>
            Dont trust on paparazzis? Get your news verefied with us!
          </Paragraph>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 22,
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 4,
    marginRight: 8,
    fontSize: 12,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  cont: {
    backgroundColor: "#ab47bc",
    flex: 1,
  },
});

export default GroupScreen;
