import { useEffect } from 'react';
import TeacherField from '../components/TeacherField';
import useTeachers from '../hooks/useTeachers';
import usePagination from '../hooks/usePagination';
import Pagination from '../components/Pagination';
import Table from '../components/Table';

function TeacherPage() {
	const { teachers, setTeachers, loadTeachers } = useTeachers();
	const { nPages, currentPage, setCurrentPage, currentRecords } =
		usePagination(teachers);

	useEffect(() => {
		loadTeachers();
	}, []);

	function renderMain() {
		if (teachers.length === 0)
			return (
				<tr>
					<td className='p-5'>Cargando...</td>
				</tr>
			);

		return currentRecords.map((teacher) => (
			<TeacherField teacher={teacher} key={teacher.clave_P} />
		));
	}

	const teachersTable = [
		{
			fieldName: 'Matricula',
			order: 'clave_P',
		},
		{
			fieldName: 'Nombre',
			order: 'nom_P',
		},
		{
			fieldName: 'Direccion',
			order: 'dir_P',
		},
		{
			fieldName: 'Telefono',
			order: 'tel_p',
		},
		{
			fieldName: 'Horario',
			order: 'hor_P',
		},
	];

	return (
		<div className='mb-16 relative text-center'>
			<h1 className='text-3xl p-5 pl-0 font-bold'>Maestros</h1>
			<Table data={teachersTable} list={teachers} setList={setTeachers}>
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

export default TeacherPage;
