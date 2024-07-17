import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="forgotPassword" />
        <Stack.Screen name="authentication" />
        <Stack.Screen name="register" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
