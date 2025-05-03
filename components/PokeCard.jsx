import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
const image = require("../assets/pokemons/pikachu.png");
const PokeCard = () => {
  const [loadFont] = useFonts({
    SfPro: require("../assets/fonts/Open_Sans/static/OpenSans-Regular.ttf"),
  });
  if (!loadFont) {
    return null;
  }
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Pikachu</Text>
          </View>
          <View style={styles.cardBody}>
            <Image source={image} style={styles.pokemonImage} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PokeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pokemonImage: {
    height: 300,
    width: 300,
  },
  card: {
    height: 500,
    width: 400,
    borderColor: "red",
    borderWidth: 2,
  },
  cardHeader: {},
  cardBody: {},
  cardTitle: {
    fontSize: 40,
    fontStyle: "normal",
    fontWeight: "400",
    fontFamily: "SfPro",
  },
});
