import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('contexto debe ser usado con un provider');
	return context;
};

export default useAuth;
