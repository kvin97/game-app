import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Randomizer from "./components/Randomizer";
export default function App() {
  const [visibility, setVisibility] = useState(false);
  const [userInput, setUserInput] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!userInput) setDisabled(true);
  }, [userInput]);

  const confirmUserInput = () => {
    if (userInput) setDisabled(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainpage}>
        <Text style={styles.titleStyle}>GUESS THE NUMBER</Text>
        <View style={styles.userInputView}>
          <TextInput
            style={styles.userInputText}
            placeholder="Enter your number...!"
            onChangeText={text => setUserInput(text)}
            value={userInput}
          />
          <View style={styles.buttonView}>
            <View style={styles.buttonSpecific}>
              <Button title="CONFIRM" onPress={confirmUserInput} />
            </View>
            <View style={styles.buttonSpecific}>
              <Button
                color="red"
                title="RESET"
                onPress={() => setUserInput(null)}
              />
            </View>
          </View>
          <View>
            <Button
              color="green"
              title="START"
              disabled={disabled}
              onPress={() => setVisibility(true)}
            />
          </View>
        </View>
      </View>
      {visibility && (
        <Randomizer
          setVisibility={setVisibility}
          setDisabled={setDisabled}
          userInput={parseInt(userInput)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  mainpage: {
    alignItems: "center"
  },
  titleStyle: {
    padding: 7,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    fontWeight: "bold"
  },
  userInputView: {
    margin: 20,
    width: "90%",
    height: "70%",
    paddingTop: 60,
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5
  },
  userInputText: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    padding: 5
  },
  buttonView: {
    flexDirection: "row",
    margin: 4,
    width: "64%",
    justifyContent: "space-between"
  },
  buttonSpecific: {
    width: "49%"
  }
});
