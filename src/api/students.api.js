import axios from 'axios';
import { URL } from '../config';

export const getStudentsRequest = async () =>
	await axios.get(`${URL}/students`);

export const getStudentRequest = async (id) =>
	await axios.get(`${URL}/students/${id}`);

export const createStudentRequest = async (task) =>
	await axios.post(`${URL}/students`, task);

export const deleteStudentRequest = async (id) =>
	await axios.delete(`${URL}/students/${id}`);

export const updateStudentRequest = async (id, newFields) =>
	await axios.put(`${URL}/students/${id}`, newFields);

export const toggleStudentDoneRequest = async (id, done) =>
	await axios.put(`${URL}/students/${id}`, { done });
