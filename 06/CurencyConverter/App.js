import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.13,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINNAR: 0.0043,
  BITCOIN: 0.0000041,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.00",
    };
  }

  buttonPressed = (currency) => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter Some Value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];

    this.setState({ resultValue: result.toFixed(2) });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenView}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputcontainer}>
              <TextInput
                style={styles.input}
                selectionColor="#fff"
                keyboardType="numeric"
                placeholder="Enter Value"
                value={this.state.inputValue}
                onChangeText={(inputValue) =>
                  this.setState({
                    inputValue,
                  })
                }
              />
            </View>
            <View style={styles.convertorbuttoncontainer}>
              <TouchableOpacity
                onPress={() => this.buttonPressed("DOLLAR")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("EURO")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Euro</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("POUND")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Pound</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("RUBEL")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Rubel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("AUSDOLLAR")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Aus</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("CANDOLLAR")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Canada</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("YEN")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Yen</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("DINNAR")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Dinnar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("BITCOIN")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Bitty</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#535C68",
    marginTop: 20,
  },
  screenView: {
    flex: 1,
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2,
  },
  resultValue: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
  },
  inputcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE",
  },
  input: {
    color: "#fff",
    fontSize: 30,
  },
  convertorbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2,
  },
  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
  },
  converterbuttontext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
