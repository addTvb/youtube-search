import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks';
// TODO add type
export const PrivateRoute = ({ children }: any) => {
	// const auth = useAuth();
	const auth = true;
	return auth ? children : <Navigate to='/login' />;
};
