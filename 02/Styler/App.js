import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "stretch",
        marginTop: 50
      }}
    >
      <View style={{ width: 100, height: 100, backgroundColor: "#024249" }} />
      <View style={{ height: 60, backgroundColor: "#16817a" }} />
      <View style={{ height: 100, backgroundColor: "#fa744f" }} />
    </View>
  );
}
