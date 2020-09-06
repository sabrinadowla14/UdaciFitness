import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
<script src="http://localhost:8097"></script>;

export default function App() {
  useEffect(() => {
    console.log("before");
    debugger;
    console.log("after");

    return () => {
      console.log("unmount");
    };
  }, []);
  return (
    <View>
      <Text> Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
