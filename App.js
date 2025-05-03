import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import PokeCard from "./components/PokeCard";

export default function App() {
  const statusBar = StatusBar.currentHeight;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flexDirection: "row",
      padding: 10,
      marginTop: statusBar,
    },
    arrangeCard: {
      marginBottom: 100,
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <PokeCard  />
        <PokeCard  />
        <PokeCard />
      </ScrollView>
    </View>
  );
}
