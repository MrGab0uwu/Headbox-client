import { useEffect } from 'react';
import SubjectField from '../components/SubjectField';
import useSubjects from '../hooks/useSubjects';
import usePagination from '../hooks/usePagination';
import Pagination from '../components/Pagination';
import Table from '../components/Table';

function SubjectPage() {
	const { subjects, loadSubjects, setSubjects } = useSubjects();
	const { nPages, currentPage, setCurrentPage, currentRecords } =
		usePagination(subjects);

	useEffect(() => {
		loadSubjects();
	}, []);

	function renderMain() {
		if (subjects.length === 0)
			return (
				<tr>
					<td className='p-5'>Cargando...</td>
				</tr>
			);

		return currentRecords.map((subject) => (
			<SubjectField subject={subject} key={subject.clave_M} />
		));
	}

	const subjectTable = [
		{
			fieldName: 'Matricula',
			order: 'clave_M',
		},
		{
			fieldName: 'Materia',
			order: 'nom_M',
		},
		{
			fieldName: 'Creditos',
			order: 'cred_M',
		},
	];

	return (
		<div className='mb-16 relative text-center'>
			<h1 className='text-3xl p-5 pl-0 font-bold'>Materias</h1>
			<Table data={subjectTable} list={subjects} setList={setSubjects}>
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

export default SubjectPage;
