import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../../shared/contexts/ThemeProvider";

export default function AppRoutes() {
  const { toogleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route
        path="/pagina-principal"
        element={
          <Button variant="contained" color="primary" onClick={toogleTheme}>
            Toogle Theme
          </Button>
        }
      />
      <Route path="*" element={<Navigate to={"/pagina-principal"} />} />
    </Routes>
  );
}
