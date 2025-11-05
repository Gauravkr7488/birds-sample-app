import { Stack } from "expo-router";
import "./global.css";
import { PaperProvider } from "react-native-paper";
import {
  SafeAreaProvider,
  // SafeAreaView,
  // useSafeAreaInsets,
} from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
