import { BrowserRouter } from 'react-router-dom';
import { MenuLateral } from '../shared/components';
import { AppDrawerProvider } from '../shared/contexts';
import { AppThemeProvider } from '../shared/contexts/ThemeProvider';
import AppRoutes from './routes';

function App() {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
