import * as React from "react";
import { Appbar, Card, Title, Paragraph, Button } from "react-native-paper";
import { Platform, Text, View, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/Searchbar";
import BottomNav from "../components/BottomNav";
import Progressbar from "../components/Progressbar";

import Post from "../components/Post";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const TopicGroup = () => (
  <View style={styles.cont}>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content
        title="News Affairs"
        subtitle={"we consider news of golbal importance."}
      />
      {/* <Appbar.Action icon={MORE_ICON} onPress={() => { }} /> */}
      <Text style={styles.access}>Collaborator</Text>
    </Appbar.Header>
    <ScrollView>
      <Post
        name="Neetigya Chahar"
        timestamp="3h"
        newsHeadline="Corona can only infect in day light says Pakistan's Prime Minister."
        newsDesc="As corona cases are rising and the preventive measuers being taken by Pakistani government are lacking behind, the PM Imran Khan in the preventive measuers being taken by Pakistani government are lacking behind, the PM Imran Khan in a public meeting said 'Corona is spread by the help of sun light. Hence it can only be spread in broad day light!'. Opposition back fires. "
        realVoteCount="69"
        fakeVoteCount="401"
        aiProbab="0.31"
        judgement="fake"
      />

      <Post
        name="Neetigya Chahar"
        timestamp="3h"
        newsHeadline="48-Hour Campaign Ban On Bengal BJP's Rahul Sinha For Inciting Forces"
        newsDesc="Bengal BJP leader Rahul Sinha has been banned from campaigning for 48 hours by the Election Commissionover provocative statements and inciting central forces."
        realVoteCount="69"
        fakeVoteCount="401"
        aiProbab="0.31"
        judgement="fake"
      />

      <Post
        name="Neetigya Chahar"
        timestamp="3h"
        newsHeadline="Corona can only infect in day light says Pakistan's Prime Minister."
        newsDesc="As corona cases are rising and the preventive measuers being taken by Pakistani government are lacking behind, the PM Imran Khan in the preventive measuers being taken by Pakistani government are lacking behind, the PM Imran Khan in a public meeting said 'Corona is spread by the help of sun light. Hence it can only be spread in broad day light!'. Opposition back fires. "
        realVoteCount="69"
        fakeVoteCount="401"
        aiProbab="0.31"
        judgement="fake"
      />

      <Post
        name="Neetigya Chahar"
        timestamp="3h"
        newsHeadline="Corona can only infect in day light says Pakistan's Prime Minister."
        newsDesc="As corona cases are rising and the preventive measuers being taken by Pakistani government are lacking behind, the PM Imran Khan in the preventive measuers being taken by Pakistani government are lacking behind, the PM Imran Khan in a public meeting said 'Corona is spread by the help of sun light. Hence it can only be spread in broad day light!'. Opposition back fires. "
        realVoteCount="69"
        fakeVoteCount="401"
        aiProbab="0.31"
        judgement="fake"
      />
    </ScrollView>
  </View>
);

export default TopicGroup;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#000561",
  },
  access: {
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
});

{
  /* <Card>
<Card.Content>
  <Card.Cover source={{ uri: "https://picsum.photos/100" }} />
  <Title>Some random news</Title>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    blandit ultrices orci eu fermentum. Duis semper, est vel gravida
    ullamcorper, nisl ligula mattis augue, eu egestas erat diam
    vulputate velit. Praesent risus turpis, tempus eget tincidunt sed.
  </Paragraph>
  <Progressbar></Progressbar>
</Card.Content>
<Card.Actions>
  <Button icon="shield-check">Mark as Real</Button>
  <Button icon="skull-crossbones">Mark as Fake</Button>
</Card.Actions>
</Card>
<Card>
<Card.Content>
  <Card.Cover source={{ uri: "https://picsum.photos/100" }} />
  <Title>Some random news</Title>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    blandit ultrices orci eu fermentum. Duis semper, est vel gravida
    ullamcorper, nisl ligula mattis augue, eu egestas erat diam
    vulputate velit. Praesent risus turpis, tempus eget tincidunt sed.
  </Paragraph>
</Card.Content>
<Card.Actions>
  <Button icon="shield-check">Mark as Real</Button>
  <Button icon="skull-crossbones">Mark as Fake</Button>
</Card.Actions>
</Card>
<Card>
<Card.Content>
  <Card.Cover source={{ uri: "https://picsum.photos/100" }} />
  <Title>Some random news</Title>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    blandit ultrices orci eu fermentum. Duis semper, est vel gravida
    ullamcorper, nisl ligula mattis augue, eu egestas erat diam
    vulputate velit. Praesent risus turpis, tempus eget tincidunt sed.
  </Paragraph>
</Card.Content>
<Card.Actions>
  <Button icon="shield-check">Mark as Real</Button>
  <Button icon="skull-crossbones">Mark as Fake</Button>
</Card.Actions>
</Card> */
}
