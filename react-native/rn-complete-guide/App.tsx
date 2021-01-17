import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "@components/GoalItem";
import GoalInput from "@components/GoalInput";
export default function App() {
  const [courseGoal, setCourseGoal] = useState([] as any[]);
  const [isAddModal, setIsAddModal] = useState(false);
  const addGoalHandle = (enteredGoal: string) => {
    if (!enteredGoal) return;
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddModal(false);
  };
  const removeGoalHandle = (goalId: string) => {
    setCourseGoal((currentGoals) =>
      currentGoals.filter((goal) => goal.id != goalId)
    );
  };

  const cancelGoalAddModal = () => {
    setIsAddModal(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddModal(true)} />
      <GoalInput
        visible={isAddModal}
        onAddGoal={addGoalHandle}
        onCancel={cancelGoalAddModal}
      />
      <FlatList
        data={courseGoal}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={removeGoalHandle}
            id={itemData.item.id}
            item={itemData.item.value}
          />
        )}
      />
      {/* <ScrollView>
        {courseGoal.map((goal, index) => (
          <View style={styles.listItem}>
            <Text key={index}>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
