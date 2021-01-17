import React from "react";
import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props: any) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>

          <Button
            title="ADD"
            onPress={props.onAddGoal.bind(this, enteredGoal)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: 200,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "70%",
  },
});

export default GoalInput;
