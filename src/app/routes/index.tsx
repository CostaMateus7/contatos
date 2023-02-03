import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/pagina-principal"
        element={
          <Button variant="contained" color="primary">
            Teste 123
          </Button>
        }
      />
      <Route path="*" element={<Navigate to={"/pagina-principal"} />} />
    </Routes>
  );
}
