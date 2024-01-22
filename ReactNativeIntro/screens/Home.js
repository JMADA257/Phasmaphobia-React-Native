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
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

const GadgetsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gadgets Screen</Text>
    </View>
  );
};

const MapsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maps Screen</Text>
    </View>
  );
};

const UnlockablesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unlockables Screen</Text>
    </View>
  );
};

const GhostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ghosts Screen</Text>
    </View>
  );
};

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Screen</Text>
    </View>
  );
};

export default function Home({ navigation }) {
  const handlePressButtonGadgets = () => {
    console.log("Gadgets Button pressed!");
  };

  const handlePressButtonUnlockables = () => {
    console.log("Unlockable Button pressed!");
  };
  const handlePressButtonGhosts = () => {
    console.log("Ghost Button pressed!");
  };
  const handlePressButtonContact = () => {
    console.log("Contact Button pressed!");
  };
  const handlePressButtonMaps = () => {
    console.log("Maps Button pressed!");
  };

  const Drawer = createDrawerNavigator();

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="GadgetsScreen" component={GadgetsScreen} />
          <Drawer.Screen name="MapsScreen" component={MapsScreen} />
          <Drawer.Screen
            name="UnlockablesScreen"
            component={UnlockablesScreen}
          />
          <Drawer.Screen name="GhostsScreen" component={GhostsScreen} />
          <Drawer.Screen name="ContactScreen" component={ContactScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.Title}>
          <Text style={styles.titleText}>Phasma Helper!</Text>
          <Text style={styles.titleText}>
            This App is to help guide others through the great game of
            Phasmaphobia (Not associated with the developers of the game at
            all.)
          </Text>
        </View>
        <StatusBar style="auto" color="White" />

        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Gadgets")}
        >
          <Text style={styles.buttonText}>Gadgets</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Maps")}
        >
          <Text style={styles.buttonText}>Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Unlockables")}
        >
          <Text style={styles.buttonText}>Unlockables</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Ghosts")}
        >
          <Text style={styles.buttonText}>Ghosts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Contact")}
        >
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </SafeAreaView>{" "}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#231942",
  },
  Title: {
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
  },
  titleText: {
    color: "#F5F5F5",
  },
  Button: {
    minWidth: "85%",
    minHeight: "10%",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    backgroundColor: "#D7C0D0",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    margin: "auto",
    color: "#0A0B0A",
  },
});
