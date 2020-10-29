import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../screens/Home';
import AddNew from '../screens/AddNew';
import Search from '../screens/Search';
import ViewAll from '../screens/ViewAll';
import Edit from '../screens/Edit';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

//create bottom tab component
const BottomTab = () => {
    return (
        <Tabs.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false,
                activeTintColor: 'red',
                inactiveTintColor: '#333333'
            }}>
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="home" size={25} color={color} />
                }}
            />
            <Tabs.Screen
                name="AddNew"
                component={AddNew}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="pluscircleo" size={25} color={color} />
                }}
            />
            <Tabs.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="search1" size={25} color={color} />
                }}
            />
            <Tabs.Screen
                name="Edit"
                component={Edit}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="edit" size={25} color={color} />
                }}
            />
            <Tabs.Screen
                name="ViewAll"
                component={ViewAll}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="profile" size={25} color={color} />
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
                <Stack.Screen name="AddNew" component={AddNew} />
                <Stack.Screen name="Edit" component={Edit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppContainer;
