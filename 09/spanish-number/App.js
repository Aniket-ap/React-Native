import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo";
const listBackgroundColors = {
  1: "#01CBC6",
  2: "#1d3557",
  3: "#457b9d",
  4: "#264653",
  5: "#2a9d8f",
  6: "#e9c46a",
  7: "#f4a261",
  8: "#e63946",
  9: "#e5989b",
  10: "#d00000",
};

const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav"),
};

export default function App() {
  const playSound = async (number) => {
    const sound = new Audio.Sound();
    try {
      let path = soundList[number];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playbleDurationMillis);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {
              this.playSound("one");
            }}
            style={[{ backgroundColor: listBackgroundColors[1] }, styles.item]}
          >
            <Text style={styles.itemText}>One</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    flex: 1,
    margin: 5,
  },
  logo: {
    alignSelf: "center",
  },
  rowContainer: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  itemText: {
    color: "#fff",
    fontSize: 20,
  },
});
