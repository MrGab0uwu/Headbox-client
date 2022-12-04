import axios from 'axios';

export const getStudentsRequest = async () =>
	await axios.get('http://localhost:4000/students');

export const getStudentRequest = async (id) =>
	await axios.get(`http://localhost:4000/students/${id}`);

export const createStudentRequest = async (task) =>
	await axios.post('http://localhost:4000/students', task);

export const deleteStudentRequest = async (id) =>
	await axios.delete(`http://localhost:4000/students/${id}`);

export const updateStudentRequest = async (id, newFields) =>
	await axios.put(`http://localhost:4000/students/${id}`, newFields);

export const toggleStudentDoneRequest = async (id, done) =>
	await axios.put(`http://localhost:4000/students/${id}`, { done });
