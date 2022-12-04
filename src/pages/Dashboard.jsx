import { AiFillBook } from 'react-icons/ai';
import useAuth from '../hooks/useAuth';

function Dashboard() {
	const { user } = useAuth();

	return (
		<>
			<h1 className='text-start font-bold mb-20 drop-shadow-lg text-transparent text-6xl bg-clip-text bg-gradient-to-r from-neutral-600 to-slate-800'>
				<span className='block text-4xl'>{user.username}</span>
				Bienvenido a
				<span className='flex items-center'>
					<AiFillBook className='text-7xl text-neutral-800' /> HeadBox
				</span>
			</h1>
		</>
	);
}

export default Dashboard;
