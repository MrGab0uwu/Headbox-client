function Pagination({ nPages, currentPage, setCurrentPage }) {
	const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

	const nextPage = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};
	return (
		<nav className='absolute -bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-14'>
			<ul className='flex shadow-xl rounded-xl bg-white'>
				<li className='flex items-center'>
					<a className='px-4 py-2' onClick={prevPage} href='#'>
						{'<'}
					</a>
				</li>
				{pageNumbers.map((pgNumber) => (
					<li
						key={pgNumber}
						className={`text-white flex items-center ${
							currentPage == pgNumber ? 'bg-sky-600' : 'text-black'
						}`}
					>
						<a
							onClick={() => setCurrentPage(pgNumber)}
							className='px-4 py-2'
							href='#'
						>
							{pgNumber}
						</a>
					</li>
				))}
				<li className='flex items-center'>
					<a className='px-4 py-2' onClick={nextPage} href='#'>
						{'>'}
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
