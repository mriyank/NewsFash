import * as React from "react";
import { Appbar, Card, Title, Paragraph } from "react-native-paper";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import SearchBar from "./../components/Searchbar";
import BottomNav from "../components/BottomNav";
// import styles from "../config/styles";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const NewsCategories = () => (
  <View style={styles.cont}>
    <Appbar.Header>
      <Appbar.Content title="Categories" subtitle={""} />
      {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>

    <SearchBar />

    <ScrollView>
      <Card>
        <Card.Content>
          <Card.Cover
            source={{
              uri:
                "https://tok2022.weebly.com/uploads/1/7/2/6/17262330/voice_orig.jpg",
            }}
          />
          <Title>Politics</Title>
          <Paragraph>
            Check out all the political news, genuineness in this topic group
          </Paragraph>
        </Card.Content>

        <Card.Actions></Card.Actions>
      </Card>

      <Card>
        <Card.Content>
          <Card.Cover
            source={{
              uri:
                "https://img.freepik.com/free-vector/global-technology-background-with-text-space_1017-19388.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1616976000",
            }}
          />
          <Title>Global News</Title>
          <Paragraph>We verify the news of global concern</Paragraph>
        </Card.Content>
        <Card.Actions></Card.Actions>
      </Card>

      <Card>
        <Card.Content>
          <Card.Cover
            source={{
              uri:
                "https://img.freepik.com/free-vector/cartoon-couple-famous-celebrities-red-carpet-with-paparazzi_33099-657.jpg?size=626&ext=jpg&ga=GA1.2.1614264220.1617062400",
            }}
          />
          <Title>Celebrity</Title>
          <Paragraph>
            Dont trust on paparazzis? Get your news verefied with us!
          </Paragraph>
        </Card.Content>

        <Card.Actions></Card.Actions>
      </Card>

      <Card>
        <Card.Content>
          <Card.Cover
            source={{
              uri:
                "https://cdn.dribbble.com/users/1647667/screenshots/9849363/media/01890923f178ea5693c3816aa0bc65e2.jpg?compress=1&resize=400x300",
            }}
          />

          <Title>Technology</Title>
          <Paragraph>
            Got new tweet form Elon Musk? We test the authenticity for you!
          </Paragraph>
        </Card.Content>

        <Card.Actions></Card.Actions>
      </Card>
    </ScrollView>
    <View style={{ flex: 1 }}>
      <BottomNav />
    </View>
  </View>
);

export default NewsCategories;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
