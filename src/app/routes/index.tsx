import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  useAppThemeContext,
  useAppDrawerContext,
} from '../../shared/contexts/';

export default function AppRoutes() {
  const { toogleTheme } = useAppThemeContext();
  const { toogleDrawerOpen } = useAppDrawerContext();
  return (
    <Routes>
      <Route
        path="/pagina-principal"
        element={
          <>
            <Button variant="contained" color="primary" onClick={toogleTheme}>
              Toogle Theme
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={toogleDrawerOpen}
            >
              Toogle Open
            </Button>
          </>
        }
      />
      <Route path="*" element={<Navigate to={'/pagina-principal'} />} />
    </Routes>
  );
}
