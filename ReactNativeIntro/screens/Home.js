import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.Title}>
            <Text style={styles.titleText}>Phasma Helper!</Text>
            <Text style={styles.titleText}>
              This App is to help guide others through the great game of
              Phasmaphobia (Not associated with the developers of the game at
              all.)
            </Text>
          </View>
          <StatusBar style="auto" color="White" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#231942",
  },
  Title: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
  },
  titleText: {
    color: "#F5F5F5",
    fontSize: 24,
    textAlign: "center",
    alignItems: "center",
  },
});
