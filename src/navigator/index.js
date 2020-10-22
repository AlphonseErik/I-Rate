import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Icon from "react-native-vector-icons/AntDesign";
import HomeScreen from "../screens/Home";
import AddNewScreen from "../screens/AddNew";
import SearchScreen from "../screens/Search";
import ViewAllScreen from "../screens/ViewAll";
import EditScreen from "../screens/Edit";

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

//create bottom tab component
const BottomTab = () => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "red",
        inactiveTintColor: "#333333",
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddNew"
        component={AddNewScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="pluscircleo" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search1" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Edit"
        component={EditScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="edit" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ViewAll"
        component={ViewAllScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="profile" size={25} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" component={BottomTab} />
        <Stack.Screen name="AddNew" component={AddNewScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
