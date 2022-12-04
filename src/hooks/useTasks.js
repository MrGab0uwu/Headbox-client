import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext.jsx';

const useTasks = () => {
	const context = useContext(StudentContext);
	if (!context) throw new Error('contexto debe ser usado con un provider');
	return context;
};

export default useTasks;
