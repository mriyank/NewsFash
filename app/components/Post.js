import React from "react";

import { View, StyleSheet, Image } from "react-native";

import { Button } from "react-native-paper";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Display from "./Display";

import Progressbar from "./Progressbar";

function Post({
  name,
  timestamp,
  newsHeadline,
  newsDesc,
  fakeVoteCount,
  realVoteCount,
  aiProbab,
  judgement,
}) {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.timestamp}>{timestamp}</AppText>
      </View>
      <View style={styles.newsHead}>
        <AppText style={styles.newsHeadline}>{newsHeadline}</AppText>
      </View>
      <View style={styles.newsDesc}>
        <AppText style={styles.newsDescText}>{newsDesc}</AppText>
      </View>
      <View style={styles.dashboard}>
        <View style={styles.aiAnalysis}>
          <AppText style={styles.dashTitle}>
            Artificial Intelligence Analysis
          </AppText>
          <View style={styles.label}>
            <AppText style={styles.barLabel}>
              Chances of Realness - {aiProbab * 100}%
            </AppText>
          </View>
          <Progressbar progress={Number(aiProbab)} />
          <View style={styles.voteCount}>
            <AppText style={styles.fakePollCount}>0%</AppText>
            <AppText style={styles.realPollCount}>100%</AppText>
          </View>
        </View>
        <View style={styles.publicOpinion}>
          <AppText style={styles.dashTitle}>Collaborators opinion poll</AppText>
          <View style={styles.voteCount}>
            <AppText
              style={{
                ...styles.fakePollCount,
                fontSize: 14,
                fontWeight: "700",
              }}
            >
              Fake
            </AppText>
            <AppText
              style={{
                ...styles.realPollCount,
                fontSize: 14,
                fontWeight: "700",
              }}
            >
              Real
            </AppText>
          </View>
          <Progressbar
            progress={
              Number(realVoteCount) /
              (Number(fakeVoteCount) + Number(realVoteCount))
            }
          />
          <View style={styles.voteCount}>
            <AppText style={styles.fakePollCount}>{fakeVoteCount}</AppText>
            <AppText style={styles.realPollCount}>{realVoteCount}</AppText>
          </View>
          <View style={styles.voteCount}>
            <Button color="#ffffff" icon="arrow-down-bold-outline">
              Vote as Fake
            </Button>
            <Button color="#ffffff" icon="arrow-up-bold-outline">
              Vote as Real
            </Button>
          </View>
        </View>
        <View style={styles.relateArti}>
          <Button color="#ffffff" icon="newspaper">
            See related articles
          </Button>
        </View>
      </View>
      <View style={styles.judgement}>
        <Display show={judgement === "cooldown"}>
          <AppText style={styles.jcp}>In cooldown period</AppText>
        </Display>
        <Display show={judgement === "pending"}>
          <AppText style={styles.jp}>Pending...</AppText>
        </Display>
        <Display show={judgement === "real"}>
          <AppText style={styles.jreal}>REAL NEWS!</AppText>
        </Display>
        <Display show={judgement === "fake"}>
          <AppText style={styles.jfake}>FAKE NEWS!</AppText>
        </Display>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    margin: 10,
    // height: 150,
    borderRadius: 12,
    backgroundColor: "#5c57c9",
    marginBottom: 20,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  name: {
    flex: 0.6,
    color: "white",
    fontWeight: "700",
    fontSize: 14,
    padding: 8,
  },
  timestamp: {
    flex: 0.4,
    color: "white",
    fontWeight: "700",
    fontSize: 13,
    padding: 8,
    paddingRight: 14,
    textAlign: "right",
  },
  newsHeadline: {
    color: "#ffffff",
    padding: 6,
    fontSize: 22,
  },
  newsDesc: {
    maxHeight: 100,
    margin: 10,
    marginTop: 0,
  },
  newsDescText: {
    fontSize: 16,
    color: "#e0e0e0",
    textAlign: "justify",
  },
  dashboard: {
    margin: 4,
    marginTop: 0,
  },
  publicOpinion: {
    marginTop: 4,
    borderColor: "#8982ff",
    // borderWidth: 1,
    borderRadius: 10,
    padding: 4,
  },
  dashTitle: {
    padding: 4,
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },
  voteCount: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fakePollCount: {
    padding: 2,
    flex: 0.5,
    fontSize: 16,
    color: "white",
    textAlign: "left",
    // borderColor: 'red',
    // borderWidth: 2
  },
  realPollCount: {
    padding: 2,
    flex: 0.5,
    fontSize: 16,
    color: "white",
    textAlign: "right",
    // borderColor: 'red',
    // borderWidth: 2
  },
  aiAnalysis: {
    marginTop: 4,
    borderColor: "#8982ff",
    // borderWidth: 1,
    borderRadius: 10,
    padding: 4,
  },
  barLabel: {
    padding: 2,
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  relateArti: {
    justifyContent: "center",
  },
  jcp: {
    color: "#b6b3e8",
    borderColor: "#b6b3e8",
    borderWidth: 2,
    borderRadius: 16,
    textAlign: "center",
    margin: 10,
    marginTop: 0,
    paddingVertical: 8,
  },
  jp: {
    color: "#b6b3e8",
    textAlign: "center",
    margin: 10,
    marginTop: 0,
    paddingVertical: 8,
  },
  jreal: {
    marginBottom: 10,
    paddingVertical: 8,
    color: "white",
    backgroundColor: "#32a852",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 2,
  },
  jfake: {
    marginBottom: 10,
    paddingVertical: 8,
    color: "white",
    backgroundColor: "red",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 2,
  },
});

export default Post;
