import { createContext, useState } from 'react';
import {
	getTeachersRequest,
	getTeacherRequest,
	createTeacherRequest,
	updateTeacherRequest,
	deleteTeacherRequest,
} from '../api/teachers.api';

export const TeacherContext = createContext();

export const TeacherContextProvider = ({ children }) => {
	const [teachers, setTeachers] = useState([]);

	const loadTeachers = async () => {
		const response = await getTeachersRequest();
		console.log(response);
		setTeachers(response.data);
	};

	const deleteTeacher = async (id) => {
		try {
			const response = await deleteTeacherRequest(id);
			console.log(response);
			setTeachers(teachers.filter((students) => students.mat_alu !== id));
		} catch (error) {
			console.error(error);
		}
	};

	const createTeacher = async (Student) => {
		try {
			const response = await createTeacherRequest(Student);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	const getTeacher = async (id) => {
		try {
			const response = await getTeacherRequest(id);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	};

	const updateTeacher = async (id, newFields) => {
		try {
			const response = await updateTeacherRequest(id, newFields);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<TeacherContext.Provider
			value={{
				teachers,
				setTeachers,
				loadTeachers,
				createTeacher,
				deleteTeacher,
				getTeacher,
				updateTeacher,
			}}
		>
			{children}
		</TeacherContext.Provider>
	);
};
