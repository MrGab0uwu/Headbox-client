import { Formik, Form, Field } from 'formik';
import { createNewAdmin } from '../api/admin.api';

function Register() {
	return (
		<div className='flex flex-col items-center p-3'>
			<h2>Register</h2>
			<Formik
				initialValues={{
					username: '',
					password: '',
				}}
				onSubmit={async (values) => {
					console.log(values);
					const response = await createNewAdmin(values);
					console.log(response);
				}}
			>
				{({ handleSubmit }) => (
					<Form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4'>
						<Field type='text' name='username' placeholder='Write username' />
						<Field type='text' name='password' placeholder='Password' />
						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Register;
