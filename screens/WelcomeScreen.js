import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";
import TargetScreen from "./TargetScreen";
import SettingsScreen from "./SettingsScreen";
import Analytics from "./Analytics";
import Bank from "./Bank";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import BillsScreen from "./BillsScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Bills & Data" component={BillsScreen}  options={{
        headerStyle: { backgroundColor: '#01063D'},
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: '#f6f6f6' },
      }}/>
    </Stack.Navigator>
  );
}

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  if (routeName === 'Bills & Data') {
    return false;
  }
  return true;
}

function WelcomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 30,
          // marginBottom: 40,
          margin: 25,
          elevation: 0,
          height: 60,
          backgroundColor: "#01063D",
        },
        tabBarInactiveTintColor: "#ffffff",
        tabBarActiveTintColor: "#01C853",
        // tabBarLabel: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore1" size={size} color={color} />
            // <Icon name="home-1" />
            // <Image source={require('../assets/img/home.png')}/>
          ),
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
            if (routeName === 'Bills & Data') {
              return { display: 'none' };
            }
            return {
              borderRadius: 30,
              margin: 25,
              elevation: 0,
              height: 60,
              backgroundColor: "#01063D",
            };
          })(route),
        })}
      />
      <Tab.Screen
        name="Target"
        component={TargetScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="analytics" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bank"
        component={Bank}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bank" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore1" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default WelcomeScreen;
