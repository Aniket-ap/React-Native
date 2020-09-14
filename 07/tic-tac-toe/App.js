import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";

let itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const drawItem = (itemNumber) => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross;
      setIsCross({ isCross: !itemArray[itemNumber] });
    }

    winGame();
  };

  const chooseItemIcon = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };

  const chooseItemColor = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "black";
  };

  const resetGame = () => {
    itemArray.fill("empty");
    setWinMessage({ winMessage: "" });

    //force update to component
    forceUpdate();
  };

  const winGame = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2]
    ) {
      setWinMessage({
        winMessage: (itemArray[0] ? "cross" : "circle").concat(" win"),
      });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage({
        winMessage: (itemArray[3] ? "cross" : "circle").concat(" win"),
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage({
        winMessage: (itemArray[6] ? "cross" : "circle").concat(" win"),
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage({
        winMessage: (itemArray[0] ? "cross" : "circle").concat(" win"),
      });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage({
        winMessage: (itemArray[1] ? "cross" : "circle").concat(" win"),
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage({
        winMessage: (itemArray[2] ? "cross" : "circle").concat(" win"),
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage({
        winMessage: (itemArray[0] ? "cross" : "circle").concat(" win"),
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage({
        winMessage: (itemArray[2] ? "cross" : "circle").concat(" win"),
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(0)}>
              <Entypo
                name={chooseItemIcon(0)}
                size={50}
                color={chooseItemColor(0)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(1)}>
              <Entypo
                name={chooseItemIcon(1)}
                size={50}
                color={chooseItemColor(1)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(2)}>
              <Entypo
                name={chooseItemIcon(2)}
                size={50}
                color={chooseItemColor(2)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(3)}>
              <Entypo
                name={chooseItemIcon(3)}
                size={50}
                color={chooseItemColor(3)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(4)}>
              <Entypo
                name={chooseItemIcon(4)}
                size={50}
                color={chooseItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(5)}>
              <Entypo
                name={chooseItemIcon(5)}
                size={50}
                color={chooseItemColor(5)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(6)}>
              <Entypo
                name={chooseItemIcon(6)}
                size={50}
                color={chooseItemColor(6)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(7)}>
              <Entypo
                name={chooseItemIcon(7)}
                size={50}
                color={chooseItemColor(7)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(8)}>
              <Entypo
                name={chooseItemIcon(8)}
                size={50}
                color={chooseItemColor(8)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.winmessage}>{winMessage}</Text>
      <Button full rounded primary style={styles.button}>
        <Text style={styles.btnText}>Reset Game</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {},
  row: {
    flexDirection: "row",
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30,
  },
  winmessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    margin: 20,
    padding: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
