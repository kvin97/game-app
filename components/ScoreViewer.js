import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ScoreViewer({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.titleStyle}>{item.id}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.titleStyle}>{item.guess}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.titleStyle}>{item.actual}</Text>
      </View>
      <View style={styles.textView}>
        <Text
          style={{
            ...styles.titleStyle,
            color:
              item.state === "STATE"
                ? "black"
                : item.state === "LOST"
                ? "red"
                : "blue"
          }}
        >
          {item.state}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    margin: 2
  },
  textView: {
    width: "24%",
    alignItems: "center"
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 13
  }
});
