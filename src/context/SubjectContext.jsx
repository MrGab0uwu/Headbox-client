import { createContext, useState } from 'react';
import { getSubjectsRequest } from '../api/subjects.api';

export const SubjectContext = createContext();

export const SubjectContextProvider = ({ children }) => {
	const [subjects, setSubjects] = useState([]);

	const loadSubjects = async () => {
		const response = await getSubjectsRequest();
		console.log(response);
		setSubjects(response.data);
	};

	return (
		<SubjectContext.Provider
			value={{
				subjects,
				setSubjects,
				loadSubjects,
			}}
		>
			{children}
		</SubjectContext.Provider>
	);
};
