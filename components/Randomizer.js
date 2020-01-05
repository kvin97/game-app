import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";

import Finalizer from "./Finalizer";

export default function Randomizer({ setVisibility, userInput, setDisabled }) {
  const [randomNo, setRandomNo] = useState(null);
  const [lowerEdge, setLowerEdge] = useState(null);
  const [upperEdge, setUpperEdge] = useState(null);
  const [attempts, setAttempts] = useState(10);
  const [finalVisibility, setFinalVisibility] = useState(false);
  const [winState, setWinState] = useState(false);

  useEffect(() => {
    setRandomNo(Math.floor(Math.random() * userInput + userInput));
    setUpperEdge(null);
    setLowerEdge(null);
    setAttempts(10);
  }, [userInput]);

  useEffect(() => {
    if (userInput == randomNo) setWinState(true);
    else setWinState(false);
    if (attempts == 0 || userInput === randomNo) {
      setFinalVisibility(true);
    }
  }, [attempts, randomNo]);

  const setGreater = () => {
    setLowerEdge(randomNo);
    if (upperEdge)
      setRandomNo(Math.ceil(Math.random() * (upperEdge - randomNo) + randomNo));
    else setRandomNo(Math.ceil(randomNo + Math.random() * randomNo));
    setAttempts(attempts - 1);
  };

  const setLower = () => {
    setUpperEdge(randomNo);
    if (lowerEdge)
      setRandomNo(
        Math.floor(randomNo - Math.random() * (randomNo - lowerEdge))
      );
    else setRandomNo(Math.floor(randomNo - Math.random() * randomNo));
    setAttempts(attempts - 1);
  };

  const backToMainPage = () => {
    setVisibility(false);
    setDisabled(true);
  };

  return (
    <View>
      <Modal>
        <View style={styles.mainpage}>
          <View style={styles.userInputView}>
            <Text style={styles.titleStyle}>{randomNo}</Text>
            <View style={styles.buttonView}>
              <View style={styles.buttonSpecific}>
                <Button title="LOWER" onPress={setLower} />
              </View>
              <View style={styles.buttonSpecific}>
                <Button color="red" title="GREATER" onPress={setGreater} />
              </View>
            </View>
            <View style={styles.textView}>
              <Text style={styles.textSpecific}>
                Remaining attempts: {attempts}
              </Text>
            </View>
            <View>
              <Button
                color="green"
                title="Back to Main Page"
                onPress={backToMainPage}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Finalizer
        setVisibility={setVisibility}
        finalVisibility={finalVisibility}
        setFinalVisibility={setFinalVisibility}
        setDisabled={setDisabled}
        winState={winState}
        userInput={userInput}
        randomNo={randomNo}
      />
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
    borderRadius: 10,
    alignItems: "center",
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
  },
  textView: {
    padding: 20
  },
  textSpecific: {
    fontSize: 20
  }
});
