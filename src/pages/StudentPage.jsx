import { useEffect, useState } from 'react';
import StudentField from '../components/StudentField';
import useTasks from '../hooks/useTasks';
import usePagination from '../hooks/usePagination';
import Pagination from '../components/Pagination';
import Table from '../components/Table';

function StudentPage() {
	const { students, loadStudents, setStudents } = useTasks();
	const { nPages, currentPage, setCurrentPage, currentRecords } =
		usePagination(students);

	useEffect(() => {
		loadStudents();
	}, []);

	function renderMain() {
		if (students.length === 0)
			return (
				<tr>
					<td className='p-5'>Cargando...</td>
				</tr>
			);

		return currentRecords.map((student) => (
			<StudentField student={student} key={student.mat_alu} />
		));
	}

	const studentsTable = [
		{
			fieldName: 'Matricula',
			order: 'mat_alu',
		},
		{
			fieldName: 'Nombre',
			order: 'nom_alu',
		},
		{
			fieldName: 'Edad',
			order: 'edad_alu',
		},
		{
			fieldName: 'Semestre',
			order: 'sem_alu',
		},
		{
			fieldName: 'Generacion',
			order: 'gen_alu',
		},
		{
			fieldName: 'Carrera',
			order: 'clave_C1',
		},
		{
			fieldName: null,
			order: 'edit',
		},
		{
			fieldName: null,
			order: 'order',
		},
	];

	return (
		<div className='mb-16 relative text-center'>
			<h1 className='text-3xl p-5 pl-0 font-bold'>Estudiantes</h1>
			<Table data={studentsTable} list={students} setList={setStudents}>
				{renderMain()}
			</Table>
			<Pagination
				nPages={nPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
}

export default StudentPage;
