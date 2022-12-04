import useAuth from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import SideNavbar from '../components/SideNavbar';
import { useState } from 'react';
import LogoutButton from './LogoutButton';

const ProtectedRoute = ({ Context }) => {
	const [sidebar, setSidebar] = useState(true);
	const { user } = useAuth();
	console.log(user);

	if (!user.username || user.username === 'No User Exists')
		return <Navigate to='/login' />;

	return (
		<Context>
			<LogoutButton />
			<SideNavbar sidebar={sidebar} setSidebar={setSidebar} />
			<div
				className={`px-6 flex justify-center items-center h-screen  ${
					sidebar ? 'ml-56' : 'ml-20'
				}`}
			>
				<Outlet />
			</div>
		</Context>
	);
};

export default ProtectedRoute;
