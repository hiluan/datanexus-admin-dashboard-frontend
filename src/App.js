import { CssBaseLine, ThemeProvider } from "@mui/material";
import createTheme from "@mui/material/styles";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseLine />
      </ThemeProvider>
    </div>
  );
}

export default App;
