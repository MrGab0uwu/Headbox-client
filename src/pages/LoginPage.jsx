import React from 'react';
import Login from '../components/Login';
import loginJPG from '/login.jpg';
import { URL } from '../config';

function LoginPage() {
	console.log(URL);
	return (
		<div className='bg-white h-screen w-screen grid grid-cols-2'>
			<Login />
			<img className='object-cover h-[100vh] w-[50vw]' src={loginJPG} />
		</div>
	);
}

export default LoginPage;
