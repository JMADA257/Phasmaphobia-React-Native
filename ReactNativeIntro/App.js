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

export default function App() {
  const handlePressButtonGadgets = () => {
    console.log("Gadgets Button pressed!");
  };
  const handlePressButtonMaps = () => {
    console.log("Maps Button pressed!");
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

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Phasma Helper!</Text>
        <Text>
          This App is to help guide others through the great game of
          Phasmaphobia
        </Text>

        <StatusBar style="auto" />

        <TouchableOpacity
          style={styles.Button}
          onPress={handlePressButtonGadgets}
        >
          <Text style={styles.buttonText}>Gadgets</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={handlePressButtonMaps}>
          <Text style={styles.buttonText}>Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={handlePressButtonUnlockables}
        >
          <Text style={styles.buttonText}>Unlockables</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={handlePressButtonGhosts}
        >
          <Text style={styles.buttonText}>Ghosts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={handlePressButtonContact}
        >
          <Text style={styles.buttonText}>Contact / Donations</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    textAlign: "center",
  },
  Button: {
    minWidth: "85%",
    minHeight: "10%",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    margin: "auto",
  },
});
