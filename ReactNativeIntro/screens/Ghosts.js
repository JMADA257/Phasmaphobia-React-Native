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
  ScrollView,
} from "react-native";

export default function Ghosts() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.titleText}>
              Click on a ghost type to learn more about it and some tips and
              tricks!
            </Text>
          </View>
          <View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <Text style={styles.ghostText}>Banshee</Text>
              <Text style={styles.ghostText}>Demon</Text>
              <Text style={styles.ghostText}>Deogen</Text>
              <Text style={styles.ghostText}>Goryo</Text>
              <Text style={styles.ghostText}>Hantu</Text>
              <Text style={styles.ghostText}>Jinn</Text>
              <Text style={styles.ghostText}>Mare</Text>
              <Text style={styles.ghostText}>Moroi</Text>
              <Text style={styles.ghostText}>Myling</Text>
              <Text style={styles.ghostText}>Obake</Text>
              <Text style={styles.ghostText}>Oni</Text>
              <Text style={styles.ghostText}>Onryo</Text>
              <Text style={styles.ghostText}>Phantom</Text>
              <Text style={styles.ghostText}>Poltergeist</Text>
              <Text style={styles.ghostText}>Raiju</Text>
              <Text style={styles.ghostText}>Revenant</Text>
              <Text style={styles.ghostText}>Shade</Text>
              <Text style={styles.ghostText}>Spirit</Text>
              <Text style={styles.ghostText}>Thaye</Text>
              <Text style={styles.ghostText}>The Mimic</Text>
              <Text style={styles.ghostText}>The Twins</Text>
              <Text style={styles.ghostText}>Wraith</Text>
              <Text style={styles.ghostText}>Yokai</Text>
              <Text style={styles.ghostText}>Yurei</Text>
            </ScrollView>
          </View>
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
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  ghostText: {
    fontSize: 24,
    color: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
});
