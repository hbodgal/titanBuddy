import React, { useState, useContext } from "react";
import { Button, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  NavigationContainer,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { DataProvider } from "../store/DataContext";
import { AuthProvider, useAuth } from "./AuthContext";
import { SplashScreen, Stack } from "expo-router"; // Added NavigationContainer for clarity
import { useEffect } from "react";
import { useColorScheme } from "react-native";
// import { createStackNavigator } from '@react-navigation/stack';

import Login from "../components/login";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "Login", // Set initial screen to Login
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // const handleLogout = () => {
  //   setIsLoggedIn(false);  // Set login status to false when the logout button is pressed
  // };

  return (
    <DataProvider>
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </DataProvider>
  );
}

function RootLayoutNav() {
  const { isLoggedIn, handleLogin } = useAuth();
  const colorScheme = useColorScheme();

  if (isLoggedIn) {
    return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    );
  }

  return <Login onLogin={handleLogin} />;
}
