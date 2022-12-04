import { Formik, Form, Field } from 'formik';
import useAuth from '../hooks/useAuth';
import LoadModal from '../components/LoadModal';

function Login() {
	const { user, authUser, logged } = useAuth();
	return !logged ? (
		<div className='flex flex-col items-center justify-center p-'>
			<h1 className='text-4xl font-bold'>Iniciar sesion</h1>
			<Formik
				initialValues={{
					username: '',
					password: '',
				}}
				onSubmit={async (values) => {
					console.log(values);
					await authUser(values);
				}}
			>
				{({ isSubmitting, handleSubmit }) => (
					<Form
						onSubmit={handleSubmit}
						className='flex flex-col gap-4 p-4 [&>label]:text-xl [&>input]:border-2 [&>input]:border-black [&>input]:p-2 [&>input]:rounded-md w-[30vw]'
					>
						<label htmlFor='username'>Usuario</label>
						<Field type='text' name='username' placeholder='Usuario' />

						<label htmlFor='username'>Contraseña</label>
						<Field type='password' name='password' placeholder='Contraseña' />
						<button
							type='submit'
							disabled={isSubmitting}
							className='bg-neutral-800 hover:bg-neutral-900 py-3 text-lg font-bold text-white rounded-md'
						>
							{isSubmitting ? 'Iniciando...' : 'Iniciar sesion'}
						</button>
					</Form>
				)}
			</Formik>
			<h3>{user.username}</h3>
		</div>
	) : (
		<LoadModal />
	);
}

export default Login;
