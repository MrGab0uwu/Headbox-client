import { useState } from 'react';
import { BsArrowDownUp } from 'react-icons/bs';

function Table({ children, data, list, setList }) {
	const [sortOrder, setSortOrder] = useState(true);

	const useListTable = (order) => {
		const sortedList = [...list].sort((currentUser, nextUser) =>
			currentUser[order] > nextUser[order] ? 1 : -1
		);

		if (sortOrder) setList(sortedList);
		else setList(sortedList.reverse());

		setSortOrder(!sortOrder);
	};

	const renderThead = () => {
		return data.map((field) =>
			field.fieldName ? (
				<th
					className='px-8 py-4 hover:cursor-pointer hover:bg-neutral-900 first:rounded-tl-xl last:rounded-tr-xl'
					onClick={() => useListTable(field.order)}
					key={field.fieldName}
				>
					<div className='flex justify-center items-center gap-2'>
						{field.fieldName}
						<BsArrowDownUp />
					</div>
				</th>
			) : (
				<th className='px-8 py-4 last:rounded-tr-xl' key={field.order}></th>
			)
		);
	};

	return (
		<table className='bg-white rounded-2xl table-fixed shadow-2xl '>
			<thead>
				<tr className='text-white bg-neutral-800 rounded-tl-xl rounded-tr-xl'>
					{renderThead()}
				</tr>
			</thead>
			<tbody className='h-[350px]'>{children}</tbody>
		</table>
	);
}

export default Table;
