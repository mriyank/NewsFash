import * as React from "react";
import { Appbar, Card, Title, Paragraph, Button } from "react-native-paper";
import { Platform, ScrollView } from "react-native";
import SearchBar from "./../components/Searchbar";
import BottomNav from "../components/BottomNav";
import Progressbar from "./../components/Progressbar";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const AdminScreen = () => (
  <>
    <Appbar.Header>
      <Appbar.Content title="Admin Panel" subtitle={""} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>

    <SearchBar></SearchBar>

    <ScrollView>
      <Card>
        <Card.Content>
          {/* <Card.Cover source={{ uri: "https://picsum.photos/100" }} /> */}
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
          {/* <Card.Cover source={{ uri: "https://picsum.photos/100" }} /> */}
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
          {/* <Card.Cover source={{ uri: "https://picsum.photos/100" }} /> */}
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
        <BottomNav></BottomNav>
      </Card>
    </ScrollView>
  </>
);

export default AdminScreen;
