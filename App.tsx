import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,FlatList } from "react-native";
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
