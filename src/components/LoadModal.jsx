import { AiFillBook } from 'react-icons/ai';

const LoadModal = () => {
	return (
		<div className='z-20 bg-white absolute top-0 left-0 right-0 bottom-0 h-screen w-screen flex items-center justify-center'>
			<h1
				className='text-start font-bold mb-20 drop-shadow-lg text-transparent text-2xl bg-clip-text bg-gradient-to-r from-neutral-600 to-slate-800
				motion-safe:animate-bounce'
			>
				<span className='flex items-center'>
					<AiFillBook className='text-4xl text-neutral-800' /> HeadBox
				</span>
			</h1>
		</div>
	);
};

export default LoadModal;
