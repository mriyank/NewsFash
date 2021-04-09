import * as React from "react";
import { Appbar, Card, Title, Paragraph } from "react-native-paper";
import { Platform, ScrollView } from "react-native";
import SearchBar from "./../components/Searchbar";
import BottomNav from "../components/BottomNav";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const NewsCategories = () => (
  <ScrollView>
    <Appbar.Header>
      <Appbar.Content title="Categories" subtitle={""} />
      {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>

    <SearchBar></SearchBar>

    <Card>
      <Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/100" }} />
        <Title>Politics</Title>
        <Paragraph>
          Check out all the political news, genuineness in this topic group
        </Paragraph>
      </Card.Content>

      <Card.Actions></Card.Actions>
    </Card>

    <Card>
      <Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/500" }} />
        <Title>News Global</Title>
        <Paragraph>We verify the news of global concern</Paragraph>
      </Card.Content>
      <Card.Actions></Card.Actions>
    </Card>

    <Card>
      <Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/300" }} />
        <Title>Celebrity</Title>
        <Paragraph>
          Dont trust on paparazzis? Get your news verefied with us!
        </Paragraph>
      </Card.Content>

      <Card.Actions></Card.Actions>
    </Card>

    <Card>
      <Card.Content>
        {/* <Card.Cover
          source={require("C:Users/mriya/Documents/GitHubNewsFlash/app/assets/technology.jpg")}
        /> */}
        <Card.Cover source={{ uri: "https://picsum.photos/500" }} />

        <Title>Technology</Title>
        <Paragraph>
          Got new tweet form Elon Musk? We test the authenticity for you!
        </Paragraph>
      </Card.Content>

      <Card.Actions></Card.Actions>
    </Card>
    <BottomNav></BottomNav>
  </ScrollView>
);

export default NewsCategories;
