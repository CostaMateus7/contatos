import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/pagina-principal" element={<p>Página Inicial</p>} />
      <Route path="*" element={<Navigate to={"/pagina-principal"} />} />
    </Routes>
  );
}
