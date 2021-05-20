import * as React from "react";
import {
  Appbar,
  Card,
  Title,
  Paragraph,
  Button,
  Subheading,
} from "react-native-paper";
import { Platform, ScrollView } from "react-native";
import SearchBar from "./../components/Searchbar";
import BottomNav from "../components/BottomNav";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const HomeScreen = () => (
  <>
    <Appbar.Header>
      <Appbar.Content title="NewsFash" subtitle={""} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>

    <SearchBar></SearchBar>
    <ScrollView>
      <Card>
        <Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/400" }} />
          <Title>Some random news title</Title>
          <Subheading>
            Marked by admin as: real/fake
            {/* <Button icon="shield-check"></Button> */}
          </Subheading>
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
          <Subheading>
            Marked by admin as: real/fake
            {/* <Button icon="shield-check"></Button> */}
          </Subheading>
          <Paragraph>
            M Sugary sweet lorem ipsum? You got it with Cupcake Ipsum, the only
            text generator that includes marshmallows, carrot cake, and perhaps
            even a cherry on top.
          </Paragraph>
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
          <Subheading>
            Marked by admin as: real/fake
            {/* <Button icon="shield-check"></Button> */}
          </Subheading>
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
      
    </ScrollView>
  </>
);

export default HomeScreen;
