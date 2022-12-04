import { Link, useNavigate } from 'react-router-dom';
import { BsHouseFill, BsPeopleFill, BsPersonPlusFill } from 'react-icons/bs';
import { AiFillBook } from 'react-icons/ai';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';

function SideNavbar({ sidebar, setSidebar }) {
	const navigate = useNavigate();
	const { logged } = useAuth();
	if (!logged) return <></>;

	const toggleSidebar = () => setSidebar(!sidebar);

	return (
		<aside
			className={`fixed left-0 top-0 h-screen bg-black text-white p-2 py-5 rounded-tr-2xl rounded-br-2xl shadow-2xl z-10 transition-[width] duration-75
			text-lg md:text-xl
		${sidebar ? 'w-56' : '[&_span]:hidden w-20'}
		`}
		>
			<Link to='/dashboard'>
				<h2 className='text-2xl text-center p-3 py-7 flex items-center justify-center'>
					<AiFillBook className='text-3xl' />
					<span className='font-semibold hidden sm:block'>Head</span>
					<span className='hidden sm:block'>Box</span>
				</h2>
			</Link>
			<div
				className='absolute p-2 top-0 right-0 font-bold hover:cursor-pointer'
				onClick={toggleSidebar}
			>
				{sidebar ? '<<' : '>>'}
			</div>

			<nav>
				<ul>
					<li className='mb-4' title='Inicio'>
						<Link to='/dashboard'>
							<div className='flex items-center gap-2 px-5 py-2 hover:bg-neutral-800 rounded-md'>
								<BsHouseFill />
								<span className='hidden sm:block'>Inicio</span>
							</div>
						</Link>
					</li>
					<li className='px-2 py-2'>
						<span className='text-neutral-500 hidden sm:block'>
							Administración
						</span>
					</li>
					<li title='Estudiantes'>
						<Link to='/students'>
							<div className='flex items-center gap-2 px-5 py-2 hover:bg-neutral-800 rounded-md'>
								<BsPeopleFill />
								<span className='hidden sm:block'>Estudiantes</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to='/new'>
							<div className='flex items-center gap-2 px-5 py-2 hover:bg-neutral-800 rounded-md'>
								<BsPersonPlusFill />
								<span className='hidden sm:block'>Agregar</span>
							</div>
						</Link>
					</li>
					<li title='Maestros'>
						<Link to='/teachers'>
							<div className='flex items-center gap-2 px-5 py-2 hover:bg-neutral-800 rounded-md'>
								<BsPeopleFill />
								<span className='hidden sm:block'>Maestros</span>
							</div>
						</Link>
					</li>
					<li title='Carreras'>
						<Link to='/careers'>
							<div className='flex items-center gap-2 px-5 py-2 hover:bg-neutral-800 rounded-md'>
								<BsPeopleFill />
								<span className='hidden sm:block'>Carreras</span>
							</div>
						</Link>
					</li>
					<li title='Materias'>
						<Link to='/subjects'>
							<div className='flex items-center gap-2 px-5 py-2 hover:bg-neutral-800 rounded-md'>
								<BsPeopleFill />
								<span className='hidden sm:block'>Materias</span>
							</div>
						</Link>
					</li>
					{/* <li>
						<Link to='/student'>My personal info</Link>
					</li> */}
				</ul>
			</nav>
		</aside>
	);
}

export default SideNavbar;
