import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: true, title: 'Login' }} />
      <Stack.Screen name="register" options={{ headerShown: true, title: 'Register' }} />
      <Stack.Screen name="forgot-password" options={{ headerShown: true, title: 'Forgot Password' }} />
    </Stack>
  );
}


