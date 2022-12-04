import { BsPatchCheckFill, BsPatchExclamationFill } from 'react-icons/bs';

function UserCreated({ open, status, setOpen }) {
	const Popup = ({ children }) => {
		return (
			<div className='bg-white w-[35%] h-[30%] rounded-xl p-5 flex flex-col items-center justify-center gap-[20%]'>
				<div
					className={`text-3xl text-center flex gap-2 items-center justify-center w-[70%] [&>svg]:text-4xl ${
						status ? '[&>svg]:text-green-500' : '[&>svg]:text-red-500'
					}`}
				>
					{children}
				</div>
				<button
					className='text-xl bg-sky-500 text-white p-2 rounded-lg w-[70%]'
					onClick={() => setOpen(!open)}
				>
					Regresar
				</button>
			</div>
		);
	};

	return (
		<div
			className={`${
				open
					? 'z-20 bg-black bg-opacity-80 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center h-screen'
					: 'hidden'
			} `}
		>
			{status ? (
				<Popup>
					<span>Usuario creado</span>
					<BsPatchCheckFill />
				</Popup>
			) : (
				<Popup>
					<span>Error al crear el usuario</span>
					<BsPatchExclamationFill />
				</Popup>
			)}
		</div>
	);
}

export default UserCreated;
