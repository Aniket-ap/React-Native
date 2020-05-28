import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Button extends React.Component {
    render(){
        return(
            <TouchableOpacity onPress={this.props.playBtnHandler}>
                <Text style={styles.clickbutton} >Play Game</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    clickbutton : {
    marginTop: 35,
    fontSize: 25,
    color: "#fff",
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderColor: "#fff",
    borderRadius: 5,
    }
})
