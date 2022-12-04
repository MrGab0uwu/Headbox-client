import { createContext, useState } from 'react';
import { getCareersRequest } from '../api/careers.api';

export const CareerContext = createContext();

export const CareerContextProvider = ({ children }) => {
	const [careers, setCareers] = useState([]);

	const loadCareers = async () => {
		const response = await getCareersRequest();
		console.log(response);
		setCareers(response.data);
	};

	return (
		<CareerContext.Provider
			value={{
				careers,
				setCareers,
				loadCareers,
			}}
		>
			{children}
		</CareerContext.Provider>
	);
};
