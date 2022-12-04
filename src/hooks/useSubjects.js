import { useContext } from 'react';
import { SubjectContext } from '../context/SubjectContext';

const useSubjects = () => {
	const context = useContext(SubjectContext);
	if (!context) throw new Error('contexto debe ser usado con un provider');
	return context;
};

export default useSubjects;
