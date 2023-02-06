import { BrowserRouter } from 'react-router-dom';
import { MenuLateral } from '../shared/components';
import { AppThemeProvider } from '../shared/contexts/ThemeProvider';
import AppRoutes from './routes';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
