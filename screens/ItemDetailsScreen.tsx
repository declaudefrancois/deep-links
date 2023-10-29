import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import { ITEMS } from "./ItemsScreen";

type ItemDetailsScreenProps = NativeStackScreenProps<StackParamList, "Item">;

export default function ItemDetailsScreen({
  navigation,
  route,
}: ItemDetailsScreenProps) {
  const { id } = route.params;
  const item = ITEMS.find((item) => item.id === id);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Item not found</Text>
        <Button
          title="Go to Items"
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate("Items");
            }
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title} #{item.id}</Text>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        amet illo officiis animi ipsam dignissimos impedit eos eveniet quisquam
        molestiae quidem voluptas commodi ullam minima ut, consequatur maxime
        dolor non?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  itemImage: {
    width: "100%",
    height: 300,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
