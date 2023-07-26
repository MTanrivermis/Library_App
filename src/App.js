import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";
import { useThemeContext } from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext";

function App() {
  const { myTheme } = useThemeContext();
  const themes = myTheme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
