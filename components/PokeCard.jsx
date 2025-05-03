import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import AttackTip from "./AttackTip";

const defaultImage = require("../assets/pokemons/pikachu.png");

const PokeCard = ({ name = "Pikachu", imageSrc = defaultImage }) => {
  const [fontsLoaded] = useFonts({
    ProductSans: require("../assets/fonts/product-sans-infanity/ProductSansInfanity.ttf"),
  });

  const [flipped, setFlipped] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  const frontAnimatedStyle = {
    transform: [
      { perspective: 1000 },
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "180deg"],
        }),
      },
    ],
  };

  const backAnimatedStyle = {
    transform: [
      { perspective: 1000 },
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ["180deg", "360deg"],
        }),
      },
    ],
  };

  const handlePress = () => {
    Animated.spring(scaleValue, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      flipCard();
    });
  };

  const flipCard = () => {
    if (flipped) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
    setFlipped(!flipped);
  };

  const powers = [
    { name: "Thunderbolt", damage: 90, level: "heavy" },
    { name: "Quick Attack", damage: 40, level: "light" },
    { name: "Iron Tail", damage: 100, level: "heavy" },
    { name: "Electro Ball", damage: 80, level: "light" },
    { name: "Thunder", damage: 110, level: "heavy" },
    { name: "Double Team", damage: 0, level: "light" },
    { name: "Volt Tackle", damage: 120, level: "heavy" },
  ];

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffcb05" />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View
        style={[styles.wrapper, { transform: [{ scale: scaleValue }] }]}
      >
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
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
            <Text style={styles.pokemonDescription}>
              Pikachu is an Electric-type Pokémon, known for its yellow fur and
              electric abilities. It evolves from Pichu and is the mascot of the
              Pokémon franchise.
            </Text>
          </View>
        </Animated.View>

        <Animated.View
          style={[styles.card, styles.backCard, backAnimatedStyle]}
        >
          <Text style={styles.cardTitle}>{name}'s Attacks</Text>
          <ScrollView style={styles.powerContainer}>
            {powers.map((power, index) => (
              <AttackTip
                key={index}
                name={power.name}
                damage={power.damage}
                level={power.level}
              />
            ))}
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default PokeCard;

const styles = StyleSheet.create({
  wrapper: {
    width: 350,
    height: 400,
    marginBottom: 30,
    marginStart: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 350,
    height: 400,
    position: "absolute",
    top: 0,
    left: 0,
    backfaceVisibility: "hidden",
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 10,
    padding: 10,
  },
  backCard: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    padding: 20,
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
    flex: 1,
    marginTop: 145,
    marginHorizontal: 20,
  },
  pokemonDescription: {
    textAlign: "justify",
    fontSize: 14,
    color: "#333",
  },
  powerContainer: {
    marginTop: 10,
    height: 280,
    width: "100%",
  },
});
