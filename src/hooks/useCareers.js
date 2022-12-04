import { useContext } from 'react';
import { CareerContext } from '../context/CareerContext';

const useCareers = () => {
	const context = useContext(CareerContext);
	if (!context) throw new Error('contexto debe ser usado con un provider');
	return context;
};

export default useCareers;
