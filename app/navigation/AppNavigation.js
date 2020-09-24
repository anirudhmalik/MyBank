import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screen/WelcomeScreen";
import SearchFeed from "../screen/SearchFeed";
import Heart from "../screen/Heart";

const Stack = createStackNavigator();
const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Search"
      component={SearchFeed}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Heart"
      component={Heart}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigation;
