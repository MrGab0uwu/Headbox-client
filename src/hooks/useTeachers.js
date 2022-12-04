import { useContext } from 'react';
import { TeacherContext } from '../context/TeacherContext';

const useTasks = () => {
	const context = useContext(TeacherContext);
	if (!context) throw new Error('contexto debe ser usado con un provider');
	return context;
};

export default useTasks;
