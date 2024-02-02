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
import { NavigationContainer } from "@react-navigation/native";

export default function Gadgets() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.titleText}>
              Click on a gadget to learn what the advanced versions do!
            </Text>
          </View>
          <View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <Text style={styles.gadgetText}>D.O.T.S. Projector</Text>
              <Text style={styles.gadgetText}>EMF Reader</Text>
              <Text style={styles.gadgetText}>Flashlight</Text>
              <Text style={styles.gadgetText}>Photo Camera</Text>
              <Text style={styles.gadgetText}>Igniter</Text>
              <Text style={styles.gadgetText}>Firelight</Text>
              <Text style={styles.gadgetText}>UV Light</Text>
              <Text style={styles.gadgetText}>Crucifix</Text>
              <Text style={styles.gadgetText}>Video Camera</Text>
              <Text style={styles.gadgetText}>Spirit Box</Text>
              <Text style={styles.gadgetText}>Thermometer</Text>
              <Text style={styles.gadgetText}>Salt</Text>
              <Text style={styles.gadgetText}>Incense</Text>
              <Text style={styles.gadgetText}>Tripod</Text>
              <Text style={styles.gadgetText}>Motion Sensor</Text>
              <Text style={styles.gadgetText}>Sound Sensor</Text>
              <Text style={styles.gadgetText}>Sanity Medication</Text>
              <Text style={styles.gadgetText}>Ghost Writing Book</Text>
              <Text style={styles.gadgetText}>Parabolic Microphone</Text>
              <Text style={styles.gadgetText}>Head Gear</Text>
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
  gadgetText: {
    fontSize: 24,
    color: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
});
