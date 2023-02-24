import "react-native-url-polyfill/auto";

import * as SplashScreen from "expo-splash-screen";

import {
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_700Bold,
  useFonts,
} from "@expo-google-fonts/open-sans";

import { MyApp } from "./src";

// Quero que voce crie uma template readme para eu documentar meu projeto

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFontLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_700Bold,
  });

  if (isFontLoaded) {
    SplashScreen.hideAsync();
    return <MyApp />;
  }
}
