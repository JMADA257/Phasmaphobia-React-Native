import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Phasma Helper!</Text>
        <Text>
          This App is to help guide others through the great game of
          Phasmaphobia
        </Text>
        <StatusBar style="auto" />
      </SafeAreaView>
      <View>
        <Image source={
          
          require("./assets/icon.png")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
