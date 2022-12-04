import axios from 'axios';
import { URL } from '../config';

export const getAdmins = async () => await axios.get(`${URL}/login`);

export const createNewAdmin = async (newUser) =>
	await axios({
		method: 'POST',
		data: {
			username: newUser.username,
			password: newUser.password,
		},
		withCredentials: true,
		url: `${URL}/register`,
	});

export const getAdmin = async (newUser) =>
	await axios({
		method: 'POST',
		data: newUser,
		withCredentials: true,
		url: `${URL}/login`,
	});

export const login = async () =>
	await axios({
		method: 'GET',
		withCredentials: true,
		url: `${URL}/user`,
	});

export const logout = async () => {
	try {
		const response = await axios({
			method: 'POST',
			withCredentials: true,
			url: `${URL}/logout`,
		});

		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
