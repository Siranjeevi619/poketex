import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AttackTip = ({ name, damage, level }) => {
  return (
    <View>
      <View
        style={[
          styles.toolTip,
          level === "heavy" ? styles.heavy : styles.light,
        ]}
      >
        <Text style={styles.attackName}>{name}</Text>
        <Text style={styles.damage}>{damage}</Text>
      </View>
    </View>
  );
};

export default AttackTip;

const styles = StyleSheet.create({
  toolTip: {
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f9f9f9",
    elevation: 3,
  },
  heavy: {
    backgroundColor: "#ffd700",
  },
  light: {
    backgroundColor: "#fff",
  },
  attackName: {
    fontSize: 14,
    fontWeight: "600",
  },
  damage: {
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    fontWeight: "bold",
    fontSize: 12,
    color: "#333",
    overflow: "hidden",
  },
});
