import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";

import HomeScreen from "./screens/HomeScreen";
import ItemsScreen from "./screens/ItemsScreen";
import ItemDetailsScreen from "./screens/ItemDetailsScreen";
import { Text } from "react-native";

const prefix = Linking.createURL("/");

export type StackParamList = {
  Home: undefined;
  Items:
    | {
        // Query params
        id?: string;
      }
    | undefined;
  Item: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  const linking = {
    prefixes: [prefix, "https://yourdomain.com"],
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Items" component={ItemsScreen} />
        <Stack.Screen name="Item" component={ItemDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
