import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Button from './src/components/Button'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: require("./src/images/dice1.png"),
    };
    this.playButton = this.playButton.bind(this)
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  playButton = () => {
    let rNumber = this.getRandomValue();
    switch (rNumber) {
      case 1:
        this.setState({ uri: require("./src/images/dice1.png") });
        break;
      case 2:
        this.setState({ uri: require("./src/images/dice2.png") });
        break;
      case 3:
        this.setState({ uri: require("./src/images/dice3.png") });
        break;
      case 4:
        this.setState({ uri: require("./src/images/dice4.png") });
        break;
      case 5:
        this.setState({ uri: require("./src/images/dice5.png") });
        break;
      case 6:
        this.setState({ uri: require("./src/images/dice6.png") });
        break;

      default:
        this.setState({ uri: require("./src/images/dice1.png") });
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.uri} />
        <Button playBtnHandler = {this.playButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f96d80",
    alignItems: "center",
    justifyContent: "center",
  }
});
