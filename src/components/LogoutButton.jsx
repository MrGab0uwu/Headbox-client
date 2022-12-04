import useAuth from '../hooks/useAuth';
import LoadModal from './LoadModal';

const LogoutButton = () => {
	const { logged, logoutUser } = useAuth();

	return logged ? (
		<button
			className='absolute top-2 right-2 bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white font-bold px-5 py-2 rounded-lg'
			onClick={async () => await logoutUser()}
		>
			Salir
		</button>
	) : (
		<LoadModal />
	);
};

export default LogoutButton;
