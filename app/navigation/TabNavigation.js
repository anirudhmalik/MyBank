import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "../screen/WelcomeScreen";
import Heart from "../screen/Heart";
import Search from "../screen/SearchFeed";

const Tab = createBottomTabNavigator();
const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={WelcomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name={"home"} size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name={"search-web"} size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Like"
      component={Heart}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name={"heart"} size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
