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
import Navigator from "./Routes/homeStack";

export default function App() {
  return <Navigator />;
}
