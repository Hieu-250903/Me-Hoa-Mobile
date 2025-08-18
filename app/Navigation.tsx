import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: true, title: 'Login' }} />
        <Stack.Screen name="register" options={{ headerShown: true, title: 'Register' }} />
        <Stack.Screen name="forgot-password" options={{ headerShown: true, title: 'Forgot Password' }} />
      </Stack>
    </>
  );
}


