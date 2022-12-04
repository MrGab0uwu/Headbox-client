import { useEffect } from 'react';
import CareerField from '../components/CareerField';
import usePagination from '../hooks/usePagination';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import useCareers from '../hooks/useCareers';

function StudentPage() {
	const { careers, loadCareers, setCareers } = useCareers();
	const { nPages, currentPage, setCurrentPage, currentRecords } =
		usePagination(careers);

	useEffect(() => {
		loadCareers();
	}, []);

	function renderMain() {
		if (careers.length === 0)
			return (
				<tr>
					<td className='p-5'>Cargando...</td>
				</tr>
			);

		return currentRecords.map((career) => (
			<CareerField career={career} key={career.clave_C} />
		));
	}

	const careersTable = [
		{
			fieldName: 'Matricula',
			order: 'clave_C',
		},
		{
			fieldName: 'Carrera',
			order: 'nom_C',
		},
		{
			fieldName: 'Duracion',
			order: 'durac_C',
		},
	];

	return (
		<div className='mb-16 relative text-center'>
			<h1 className='text-3xl p-5 pl-0 font-bold'>Carreras</h1>
			<Table data={careersTable} list={careers} setList={setCareers}>
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
