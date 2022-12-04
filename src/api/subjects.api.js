import axios from 'axios';

export const getSubjectsRequest = async () =>
	await axios.get('http://localhost:4000/subjects');

export const getSubjectRequest = async (id) =>
	await axios.get(`http://localhost:4000/subjects/${id}`);

export const createSubjectRequest = async (task) =>
	await axios.post('http://localhost:4000/subjects', task);

export const deleteSubjectRequest = async (id) =>
	await axios.delete(`http://localhost:4000/subjects/${id}`);

export const updateSubjectRequest = async (id, newFields) =>
	await axios.put(`http://localhost:4000/subjects/${id}`, newFields);
