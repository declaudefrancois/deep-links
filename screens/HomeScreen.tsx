import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../App";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to deep-link tutorial !</Text>
      <Pressable
        onPress={() => navigation.navigate("Items")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#039BE590" : "#039BE5",
          padding: 16,
          borderRadius: 8,
        })}
      >
        <Text style={{ color: "#fff" }}>Go to Items</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
