import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthenticatedStack"
        component={AuthenticatedStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        // contentStyle: { backgroundColor: Colors.primary100 },
        headerShown: false,
        // presentation: "modal",
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <SafeAreaView> */}
      <Navigation />
      {/* </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
