import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/Home.component';
import { Login } from '@/pages/login/index';
// import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    );
};

export default AppRoutes;
