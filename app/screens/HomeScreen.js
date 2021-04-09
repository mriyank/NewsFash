import * as React from "react";
import {
  Appbar,
  // Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import { Platform } from "react-native";
import SearchBar from "./../components/Searchbar";
import BottomNav from "../components/BottomNav";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const HomeScreen = () => (
  <ScrollView>
    <Appbar.Header>
      <Appbar.Content title="NewsFlash" subtitle={""} />
      {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>

    <SearchBar></SearchBar>

    <Card>
      <Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/400" }} />
        <Title>Some random news title</Title>
        <Paragraph>
          M Sugary sweet lorem ipsum? You got it with Cupcake Ipsum, the only
          text generator that includes marshmallows, carrot cake, and perhaps
          even a cherry on top.
        </Paragraph>
      </Card.Content>

      <Card.Actions>
        <Button icon="shield-check">Real</Button>
        <Button icon="skull-crossbones">Fake</Button>
      </Card.Actions>
    </Card>
    <Card>
      <Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/300" }} />
        <Title>Some random news title</Title>
        <Paragraph>
          M Sugary sweet lorem ipsum? You got it with Cupcake Ipsum, the only
          text generator that includes marshmallows, carrot cake, and perhaps
          even a cherry on top.
        </Paragraph>
      </Card.Content>

      <Card.Actions>
        <Button icon="shield-check">Real</Button>
        <Button icon="skull-crossbones">Fake</Button>
      </Card.Actions>
    </Card>
    <Card>
      <Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/800" }} />
        <Title>Some random news title</Title>
        <Paragraph>
          M Sugary sweet lorem ipsum? You got it with Cupcake Ipsum, the only
          text generator that includes marshmallows, carrot cake, and perhaps
          even a cherry on top.
        </Paragraph>
      </Card.Content>

      <Card.Actions>
        <Button icon="shield-check">Real</Button>
        <Button icon="skull-crossbones">Fake</Button>
      </Card.Actions>
    </Card>

    <BottomNav></BottomNav>
  </ScrollView>
);

export default HomeScreen;
