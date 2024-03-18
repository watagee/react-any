import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/features/routes/AppRoutes';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;