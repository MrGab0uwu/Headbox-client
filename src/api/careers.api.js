import axios from 'axios';
import { URL } from '../config';

export const getCareersRequest = async () => await axios.get(`${URL}/careers`);

export const getCareerRequest = async (id) =>
	await axios.get(`${URL}/careers/${id}`);

export const createCareerRequest = async (task) =>
	await axios.post(`${URL}/careers`, task);

export const deleteCareerRequest = async (id) =>
	await axios.delete(`${URL}/careers/${id}`);

export const updateCareerRequest = async (id, newFields) =>
	await axios.put(`${URL}/careers/${id}`, newFields);
