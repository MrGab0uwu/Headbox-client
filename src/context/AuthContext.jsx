import { createContext, useState } from 'react';
import { getAdmin, login, logout } from '../api/admin.api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({ username: '' });
	const [logged, setLogged] = useState(false);
	const navigate = useNavigate();

	const authUser = async (values) => {
		const response = await getAdmin(values);

		if (response.data === 'No User Exists') {
			console.log(response);
			setLogged(false);
			return setUser({ username: 'User no exists' });
		}

		const userLogged = await login();
		console.log('response', response);
		console.log('user', userLogged);
		setUser(userLogged.data);
		setLogged(true);
		console.log(user);
		navigate('/dashboard');
	};

	const logoutUser = async () => {
		await logout();
		console.log('logout....');
		const userLogged = await login();
		setUser(userLogged.data);
		console.log('user', userLogged);
		setLogged(false);
	};

	return (
		<AuthContext.Provider value={{ user, authUser, logoutUser, logged }}>
			{children}
		</AuthContext.Provider>
	);
};
