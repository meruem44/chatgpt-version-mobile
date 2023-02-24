import { ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";
import { MessagesContextProvider } from "../contexts/messages.context";

import { DARK_THEME } from "../designs/themes/dark.theme";

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <MessagesContextProvider>
      <ThemeProvider theme={DARK_THEME}>{children}</ThemeProvider>
    </MessagesContextProvider>
  );
};

export { AppProvider };
