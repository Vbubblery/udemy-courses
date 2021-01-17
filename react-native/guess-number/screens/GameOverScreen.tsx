import React from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import BodyText from "@components/BodyText";
import TitleText from "@components/TitleText";
import Colors from "@constants/color";
import MainButton from "@components/MainButton";
const GameOverScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game Is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={require("@assets/success.png")}
          // source={{
          //   uri:
          //     "https://images.unsplash.com/photo-1609811726941-36a89735945e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: "80%",
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
