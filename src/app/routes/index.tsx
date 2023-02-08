import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppDrawerContext } from '../../shared/contexts/';
import { Dashboard } from '../pages/dashboard/Dashboard';

export default function AppRoutes() {
  const { setDrawerOptions } = useAppDrawerContext();
  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: 'pagina-inicial',
        label: 'Página Inicial',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-principal" element={<Dashboard />} />
      <Route path="*" element={<Navigate to={'/pagina-principal'} />} />
    </Routes>
  );
}
