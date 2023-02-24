import { AppProvider } from "./shared/providers/app-provider";

import { Home } from "./pages/home/home.screen";
import { StatusBar } from "expo-status-bar";

const MyApp: React.FC = () => {
  return (
    <AppProvider>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Home />
    </AppProvider>
  );
};

export { MyApp };
