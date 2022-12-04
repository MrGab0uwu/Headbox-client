import { useState } from 'react';

const usePagination = (data) => {
	// console.log(data);
	// User is currently on this page
	const [currentPage, setCurrentPage] = useState(1);
	// No of Records to be displayed on each page
	const [recordsPerPage] = useState(10);
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

	const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
	const nPages = Math.ceil(data.length / recordsPerPage);

	return {
		nPages,
		currentPage,
		setCurrentPage,
		currentRecords,
	};
};

export default usePagination;
