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

const Drawer = createDrawerNavigator();

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

export default function App() {
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
  },
  title: {
    borderColor: "red",
  },
});
