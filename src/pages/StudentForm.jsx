import { Formik, Form, Field } from 'formik';
import useTasks from '../hooks/useTasks';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserCreated from './UserCreated';

function StudentForm() {
	const { createStudent, getStudent, updateStudent } = useTasks();
	const [modal, setModal] = useState(false);
	const [status, setStatus] = useState(true);
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
			if (params.id) {
				console.log('loading...');
				const student = await getStudent(params.id);
				setStudent({
					mat_alu: student.mat_alu,
					nom_alu: student.nom_alu,
					edad_alu: student.edad_alu,
					sem_alu: student.sem_alu,
					gen_alu: student.gen_alu,
					clave_C1: student.clave_C1,
				});
				console.log(student);
			}
		};

		loadStudent();
	}, []);

	return (
		<>
			<div className='bg-white shadow-xl p-5 px-8 rounded-lg flex flex-col gap-6 w-[40%]'>
				<h2 className='capitalize text-3xl font-bold'>
					{params.id
						? `${student.nom_alu.toLowerCase()}`
						: 'Agregar Nuevo Alumno'}
				</h2>
				<Formik
					initialValues={student}
					enableReinitialize={true}
					onSubmit={async (values, actions) => {
						console.log(values);
						actions.resetForm();
						if (params.id) {
							console.log(values);
							await updateStudent(params.id, values);
						} else {
							const response = await createStudent(values);
							setModal(!modal);
							setStatus(response);
						}
						setStudent({
							mat_alu: '',
							nom_alu: '',
							edad_alu: '',
							sem_alu: 0,
							gen_alu: 0,
							clave_C1: '',
						});
					}}
				>
					{({ handleSubmit, isSubmitting }) => (
						<Form
							onSubmit={handleSubmit}
							className='[&>div]:flex [&>div]:flex-col flex flex-col gap-2
							[&>div>label]:text-xl [&>div>input]:border [&>div>input]:px-2 [&>div>input]:py-2 [&>div>input]:rounded-lg
						'
						>
							<div>
								<label>Matricula</label>
								<Field type='text' name='mat_alu' placeholder='Matricula' />
							</div>

							<div>
								<label>Nombre</label>
								<Field
									name='nom_alu'
									// rows='3'
									placeholder='Nombre'
									// as='textarea'
								/>
							</div>

							<div>
								<label>Edad</label>
								<Field name='edad_alu' placeholder='Edad' />
							</div>

							<div>
								<label>Semestre</label>
								<Field name='sem_alu' placeholder='Semestre' />
							</div>

							<div>
								<label>Gen</label>
								<Field name='gen_alu' placeholder='Generacion 0000-0000' />
							</div>

							<div>
								<label>Clave carrera</label>
								<Field name='clave_C1' placeholder='Carrera' />
							</div>

							<button
								type='submit'
								disabled={isSubmitting}
								className='bg-sky-500 py-2 rounded-lg text-white font-bold text-lg'
							>
								{isSubmitting ? 'Guardando..' : 'Guardar'}
							</button>
						</Form>
					)}
				</Formik>
			</div>
			<UserCreated open={modal} status={status} setOpen={setModal} />
		</>
	);
}

export default StudentForm;
