import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tab)" options={{ headerShown: false }} />
        <Stack.Screen name="index" />
      </Stack>
    </QueryClientProvider>
  );
}
