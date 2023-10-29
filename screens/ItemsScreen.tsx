import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { StackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface Item {
  id: number;
  title: string;
  // Other properties
}

export const ITEMS: Item[] = [
  {
    id: 1,
    title: "Item 1",
  },
  {
    id: 2,
    title: "Item 2",
  },
  {
    id: 3,
    title: "Item 3",
  },
  {
    id: 4,
    title: "Item 4",
  },
];

type ItemsScreenProps = NativeStackScreenProps<StackParamList, "Items">;

export default function ItemsScreen({ navigation, route }: ItemsScreenProps) {
  const renderItem = useCallback<ListRenderItem<Item>>(({ item }) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate("Item", {
            id: item.id,
          })
        }
      >
        <View style={styles.itemImage} />
        <View style={styles.detailsSection}>
          <Text>Item</Text>
        </View>
      </Pressable>
    );
  }, []);

  useEffect(() => {
    if (route.params?.id) {
      navigation.replace("Item", {
        id: parseInt(`${route.params.id}`),
      });
    }
  }, [route.params?.id]);

  if (route.params?.id) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={ITEMS}
        ListHeaderComponent={() => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Items page</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 3,
    justifyContent: "space-between",
    borderRadius: 16,
  },
  itemImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  detailsSection: {
    paddingTop: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
