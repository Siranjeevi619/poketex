import React from "react";
import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

const defaultImage = require("../assets/pokemons/pikachu.png");

const PokeCard = ({ name = "Pikachu", imageSrc = defaultImage }) => {
  const [fontsLoaded] = useFonts({
    ProductSans: require("../assets/fonts/product-sans-infanity/ProductSansInfanity.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffcb05" />
       
      </View>
    );
  }
  const powers = [
    {
      name: "Thunderbolt",
      damage: 90,
      level: "heavy",
    },
    {
      name: "Quick Attack",
      damage: 40,
      level: "light",
    },
    {
      name: "Iron Tail",
      damage: 100,
      level: "heavy",
    },
    {
      name: "Electro Ball",
      damage: 80,
      level: "light",
    },
    {
      name: "Thunder",
      damage: 110,
      level: "heavy",
    },
    {
      name: "Double Team",
      damage: 0,
      level: "light",
    },
    {
      name: "Volt Tackle",
      damage: 120,
      level: "heavy",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{name}</Text>
          <View style={styles.pokemonType}>
            <Text style={styles.pokemonTypeText}>Electric</Text>
          </View>
        </View>
        <View style={styles.cardBody}>
          <Image source={imageSrc} style={styles.pokemonImage} />
        </View>
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.pokemonDescription}>
              Pikachu is an Electric-type Pokémon, known for its yellow fur and
              electric abilities. It evolves from Pichu and is the mascot of the
              Pokémon franchise.
            </Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 400,
    width: 350,
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 10,
    marginBottom: 30,
    marginStart: 24,
  },
  cardHeader: {
    alignItems: "center",
    margin: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardBody: {
    flex: 1,
    marginStart: 90,
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: "400",
    fontFamily: "ProductSans",
  },
  pokemonImage: {
    height: 200,
    width: 200,
    padding: 40,
  },
  pokemonType: {
    borderColor: "yellow",
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 19,
    backgroundColor: "#fff",
    shadowColor: "yellow",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  pokemonTypeText: {
    fontSize: 14,
    color: "#000",
    fontFamily: "ProductSans",
  },
  cardFooter: {
    justifyContent: "flex-start",
    alignContent: "center",
    flexDirection: "row",
    gap: 10,
    flex: 1,
    marginTop: 155,
    fontFamily: "ProductSans",
    margin: 20,
    fontSize: 30,
  },
  pokemonDescription: {
    textAlign: "justify",
    fontSize: 14,
    color: "#333",
  },
});
