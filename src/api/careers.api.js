import axios from 'axios';

export const getCareersRequest = async () =>
	await axios.get('http://localhost:4000/careers');

export const getCareerRequest = async (id) =>
	await axios.get(`http://localhost:4000/careers/${id}`);

export const createCareerRequest = async (task) =>
	await axios.post('http://localhost:4000/careers', task);

export const deleteCareerRequest = async (id) =>
	await axios.delete(`http://localhost:4000/careers/${id}`);

export const updateCareerRequest = async (id, newFields) =>
	await axios.put(`http://localhost:4000/careers/${id}`, newFields);
