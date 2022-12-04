import axios from 'axios';
import { URL } from '../config';

export const getSubjectsRequest = async () =>
	await axios.get(`${URL}/subjects`);

export const getSubjectRequest = async (id) =>
	await axios.get(`${URL}/subjects/${id}`);

export const createSubjectRequest = async (task) =>
	await axios.post(`${URL}/subjects`, task);

export const deleteSubjectRequest = async (id) =>
	await axios.delete(`${URL}/subjects/${id}`);

export const updateSubjectRequest = async (id, newFields) =>
	await axios.put(`${URL}/subjects/${id}`, newFields);
