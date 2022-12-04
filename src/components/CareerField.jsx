function CareerField({ career }) {
	return (
		<tr className='text-center'>
			<td className='border'>{career.clave_C}</td>
			<td className='border capitalize'>{career.nom_C.toLowerCase()}</td>
			<td className='border'>{career.durac_C}</td>
		</tr>
	);
}

export default CareerField;
