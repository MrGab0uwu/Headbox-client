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

		setLogged(true);
		setTimeout(async () => {
			const userLogged = await login();
			console.log(response);
			console.log('user', userLogged);
			setUser(userLogged.data);
			console.log(user);
			navigate('/dashboard');
		}, 1000);
	};

	const logoutUser = async () => {
		setLogged(false);
		setTimeout(async () => {
			await logout();
			console.log('logout....');
			const userLogged = await login();
			setUser(userLogged.data);
			console.log('user', userLogged);
		}, 1000);
	};

	return (
		<AuthContext.Provider value={{ user, authUser, logoutUser, logged }}>
			{children}
		</AuthContext.Provider>
	);
};
