import useTeachers from '../hooks/useTeachers';
import { useNavigate } from 'react-router-dom';

function TeacherField({ teacher }) {
	const { deleteTeacher } = useTeachers();
	const navigate = useNavigate();

	return (
		<tr className='text-center'>
			<td className='border'>{teacher.clave_P}</td>
			<td className='border capitalize'>{teacher.nom_P.toLowerCase()}</td>
			<td className='border'>{teacher.dir_P}</td>
			<td className='border'>{teacher.tel_p}</td>
			<td className='border'>{teacher.hor_P}</td>
			{/* <button onClick={() => toggleTaskDone(task.id)}>Toggle Task</button> */}
		</tr>
	);
}

export default TeacherField;
