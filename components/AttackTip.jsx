import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AttackTip = ({ name, damage, level }) => {
  return (
    <View style={styles.container}>
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
  container: {
    alignItems: "flex-start",
  },
  toolTip: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    elevation: 3,
  },
  heavy: {
    backgroundColor: "#ffd700", // gold
  },
  light: {
    backgroundColor: "#e0f7fa", // z
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
