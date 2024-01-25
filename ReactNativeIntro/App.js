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
import HomeScreen from "./screens/Home";
import GadgetsScreen from "./screens/Gadgets";
import MapsScreen from "./screens/Maps";
import UnlockablesScreen from "./screens/Unlockables";
import GhostsScreen from "./screens/Ghosts";
import ContactScreen from "./screens/Contact";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Gadgets" component={GadgetsScreen} />
          <Drawer.Screen name="Maps" component={MapsScreen} />
          <Drawer.Screen
            name="Unlockables"
            component={UnlockablesScreen}
          />
          <Drawer.Screen name="Ghosts" component={GhostsScreen} />
          <Drawer.Screen name="Contact" component={ContactScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#231942",
  },

  title: {
    borderColor: "red",
  },
});
