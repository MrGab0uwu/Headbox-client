import useTasks from '../hooks/useTasks';
import { useNavigate } from 'react-router-dom';

function StudentField({ student }) {
	const { deleteStudent } = useTasks();
	const navigate = useNavigate();

	return (
		<tr className='text-center'>
			<td className='border'>{student.mat_alu}</td>
			<td className='border capitalize'>{student.nom_alu.toLowerCase()}</td>
			<td className='border'>{student.edad_alu}</td>
			<td className='border'>{student.sem_alu}</td>
			<td className='border'>{student.gen_alu}</td>
			<td className='border'>{student.clave_C1}</td>
			<td className='border'>
				<button
					className='bg-lime-400 text-white font-bold rounded-md px-3 py-1'
					onClick={() => navigate(`/edit/${student.mat_alu}`)}
				>
					Edit
				</button>
			</td>
			<td className='border'>
				<button
					className='bg-red-600 text-white font-bold rounded-md px-3 py-1'
					onClick={() => deleteStudent(student.mat_alu)}
				>
					Delete
				</button>
			</td>
			{/* <button onClick={() => toggleTaskDone(task.id)}>Toggle Task</button> */}
		</tr>
	);
}

export default StudentField;
