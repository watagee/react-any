import { Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/useAuth';

// 子コンポーネントの型をPropsとして定義します
type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
