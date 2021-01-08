import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ExchangeScreen from "./screens/ExchangeScreen";
import SignUpLoginScreen from "./screens/SignupLoginScreen";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createBottomTabNavigator({
  HomeScreen: { screen: HomeScreen },
  ExchangeScreen: { screen: ExchangeScreen },
});

const AppContainer = createAppContainer(switchNavigator);
