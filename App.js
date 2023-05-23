import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Registration from "./screens/Registration";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import { API_URL } from "@env";

const Stack = createNativeStackNavigator();

console.warn("=========================================================");
console.warn(`CHECK EXPO IP AND SERVER IP: ${API_URL}`);
console.warn("=========================================================");

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      {/* <Registration /> */}
      <Stack.Navigator
        initialRouteName="registration"
        // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="registration" component={Registration} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "red",
  },
});
