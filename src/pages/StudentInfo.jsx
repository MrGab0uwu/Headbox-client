import { useEffect, useState } from 'react';
import { Router, useParams } from 'react-router-dom';
import useTasks from '../hooks/useTasks';

function StudentInfo() {
	const { getStudent } = useTasks();
	const [student, setStudent] = useState({
		mat_alu: '',
		nom_alu: '',
		edad_alu: '',
		sem_alu: '',
		gen_alu: '',
		clave_C1: '',
	});

	const params = useParams();

	useEffect(() => {
		const loadStudent = async () => {
			const student = await getStudent('A1');
			setStudent({
				mat_alu: student.mat_alu,
				nom_alu: student.nom_alu,
				edad_alu: student.edad_alu,
				sem_alu: student.sem_alu,
				gen_alu: student.gen_alu,
				clave_C1: student.clave_C1,
			});
			console.log(student);
		};

		loadStudent();
	}, []);

	// console.log(student);

	return (
		<div>
			<h1>User Info</h1>
			<img src='' alt='user image' />
			{student.mat_alu}
			{/* <StudentCard student={student} key={student.mat_alu} /> */}
		</div>
	);
}

export default StudentInfo;
