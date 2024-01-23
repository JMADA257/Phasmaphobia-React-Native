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
        <Drawer.Navigator initialRouteName="HomeScreen">
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
