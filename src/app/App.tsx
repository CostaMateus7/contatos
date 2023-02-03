import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { lightTheme } from "../shared/themes";
import AppRoutes from "./routes";
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
