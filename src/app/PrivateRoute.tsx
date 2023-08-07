import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
	children: JSX.Element;
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
	// const auth = useAuth();
	const auth = true;
	return auth ? children : <Navigate to='/login' />;
};
