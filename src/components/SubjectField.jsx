function SubjectField({ subject }) {
	return (
		<tr className='text-center'>
			<td className='border'>{subject.clave_M}</td>
			<td className='border capitalize'>{subject.nom_M.toLowerCase()}</td>
			<td className='border'>{subject.cred_M}</td>
		</tr>
	);
}

export default SubjectField;
