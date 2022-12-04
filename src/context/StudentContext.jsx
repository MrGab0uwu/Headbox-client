import { createContext, useState } from 'react';
import {
	getStudentsRequest,
	getStudentRequest,
	createStudentRequest,
	updateStudentRequest,
	deleteStudentRequest,
} from '../api/students.api';

export const StudentContext = createContext();

export const StudentContextProvider = ({ children }) => {
	const [students, setStudents] = useState([]);

	const loadStudents = async () => {
		const response = await getStudentsRequest();
		console.log(response);
		setStudents(response.data);
	};

	const deleteStudent = async (id) => {
		try {
			const response = await deleteStudentRequest(id);
			console.log(response);
			setStudents(students.filter((students) => students.mat_alu !== id));
		} catch (error) {
			console.error(error);
		}
	};

	const createStudent = async (Student) => {
		try {
			const response = await createStudentRequest(Student);
			console.log(response);
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	};

	const getStudent = async (id) => {
		try {
			const response = await getStudentRequest(id);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	};

	const updateStudent = async (id, newFields) => {
		try {
			const response = await updateStudentRequest(id, newFields);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<StudentContext.Provider
			value={{
				students,
				setStudents,
				loadStudents,
				createStudent,
				deleteStudent,
				getStudent,
				updateStudent,
			}}
		>
			{children}
		</StudentContext.Provider>
	);
};
