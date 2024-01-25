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
import { Linking } from "react-native";

function Contact() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>About me</Text>

          <Text style={styles.descriptionText}>
            Hi im Jordan the developer of this app! This is my first app on the
            store itself! I started playing Phasmaphobia years ago and decided
            now that I have gained the skills to code that I might as well push
            myself and build an app for it!
          </Text>

          <Text style={styles.questionText}>
            Questions, bugs, comments, or just looking to donate send me an
            email by clicking below!
          </Text>

          <Button
            onPress={() => Linking.openURL("mailto:support@example.com")}
            title="PhasmaGuide1812@outlook.com"
          />
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
  titleText: {
    color: "#F5F5F5",
    fontSize: 34,
    textAlign: "center",
    alignItems: "center",
    marginTop: 50,
  },
  descriptionText: {
    color: "#F5F5F5",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    marginTop: 20,
  },
  questionText: {
    color: "#F5F5F5",
    fontSize: 24,
    textAlign: "center",
    alignItems: "center",
    marginTop: 50,
  },
});

export default Contact;
