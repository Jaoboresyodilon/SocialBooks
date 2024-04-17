import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "./HomeScreen";
import MessageScreen from "./MessageScreen";
import NotificationScreen from "./NotificationScreen";
import PostScreen from "./PostScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export default function NavigationPage() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: "#008DDA"
            }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={24} color={color} />
                    )
                }} />
                <Tab.Screen name="Message" component={MessageScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="chatbubble" size={20} color={color} />
                    )
                }} />
                <Tab.Screen name="Post" component={PostScreen} options={{
                    tabBarIcon: () => (
                        <Ionicons name="add-circle" size={40} color="#E9446A" style={{
                            shadowColor: "#E9446A",
                            shadowOffset: { width: 0, height: 0 },
                            shadowRadius: 10,
                            shadowOpacity: 0.3
                        }} />
                    )
                }} />
                <Tab.Screen name="Notifications" component={NotificationScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="notifications" size={20} color={color} />
                    )
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={20} color={color} />
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
