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
          <Title>
            Sputnik More Effective Against Mutations, Says Russian Maker. Here's
            Why
          </Title>
          <Paragraph>
            Russia's Sputnik V, the third Covid vaccine to be cleared for use in
            India, is effective against mutant strains, the Russian Direct
            Investment Fund (RDIF) has said.
          </Paragraph>
          <Paragraph>
            "...the reason we are so confident on mutations is that Sputnik is
            the only vaccine in the world it uses two different shots of the
            vaccine. So basically, it's the result of having two different
            shots. We believe we produce higher immune response that lasts
            longer," Dr Dmitriev said
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
          <Title>
            3 Fishermen Feared Killed As Ship Collides With Boat Off Mangaluru
            Coast
          </Title>
          <Paragraph>
            At least three fishermen are feared dead and nine others are missing
            after their fishing boat collided with a foreign vessel off the
            coast of Mangaluru early on Tuesday, sources said. The boat, IFB
            Rabah, with 14 fishermen on board, had set off from Beypore in
            Kozhikode district of Kerala Sunday evening. The boats owner Jaffer
            said in Kozhikode that he had received information that three of
            them died in the mishap. Seven of the fishermen are from Tamil Nadu
            and the remaining from West Bengal and Odisha.
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
          <Title>
            Google Pixel Watch Leaked Renders Suggest Circular Dial, Tipped to
            Launch in October
          </Title>
          <Paragraph>
            Google Pixel Watch renders have surfaced online. The renders show
            the rumoured premium smartwatch that could take on Apple Watch
            Series 6 and Samsung Galaxy Watch 3 from different angles. The
            renders also show the wearable with multiple band colour options and
            watch faces. There seem to be no buttons on the smartwatch except a
            crown located on the right side of the circular dial, as per the
            renders. The smartwatch has been tipped to launch in October
            alongside the Pixel 6 smartphone.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button icon="shield-check">Mark as Real</Button>
          <Button icon="skull-crossbones">Mark as Fake</Button>
        </Card.Actions>
      </Card>
      <BottomNav></BottomNav>
    </ScrollView>
  </>
);

export default AdminScreen;
