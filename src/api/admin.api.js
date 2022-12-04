import axios from 'axios';

export const getAdmins = async () =>
	await axios.get('http://localhost:4000/login');

export const createNewAdmin = async (newUser) =>
	await axios({
		method: 'POST',
		data: {
			username: newUser.username,
			password: newUser.password,
		},
		withCredentials: true,
		url: 'http://localhost:4000/register',
	});

export const getAdmin = async (newUser) =>
	await axios({
		method: 'POST',
		data: newUser,
		withCredentials: true,
		url: 'http://localhost:4000/login',
	});

export const login = async () =>
	await axios({
		method: 'GET',
		withCredentials: true,
		url: 'http://localhost:4000/user',
	});

export const logout = async () => {
	try {
		const response = await axios({
			method: 'POST',
			withCredentials: true,
			url: 'http://localhost:4000/logout',
		});

		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
