import axios from 'axios';

export const getTeachersRequest = async () =>
	await axios.get('http://localhost:4000/teachers');

export const getTeacherRequest = async (id) =>
	await axios.get(`http://localhost:4000/teachers/${id}`);

export const createTeacherRequest = async (task) =>
	await axios.post('http://localhost:4000/teachers', task);

export const deleteTeacherRequest = async (id) =>
	await axios.delete(`http://localhost:4000/teachers/${id}`);

export const updateTeacherRequest = async (id, newFields) =>
	await axios.put(`http://localhost:4000/teachers/${id}`, newFields);
