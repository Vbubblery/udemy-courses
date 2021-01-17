import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "@components/Header";
import StartGameScreen from "@screens/StartGameScreen";
import GameScreen from "@screens/GameScreen";
import GameOverScreen from "@screens/GameOverScreen";

const fetchFonts = (): Promise<any> => {
  return Font.loadAsync({
    "open-sans": require("@fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("@fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState(undefined as undefined | number);
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(undefined);
  };

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds);
  };

  let content = (
    <StartGameScreen onStartGame={startGameHandler} userChoice={userNumber} />
  );

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0)
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
