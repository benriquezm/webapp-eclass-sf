interface IListNicknamesProps {
	order: string;
	names: string[];
}

const ListNicknames = (props: IListNicknamesProps) => {
	const { order, names } = props || {};
	/** TODO create helper for resolve section */
	const nicknames = names.filter(String).map((name) => name.trim());

	if (order === 'ASC') {
		nicknames.sort();
	} else {
		nicknames.sort();
		nicknames.reverse();
	}
	/** end TODO */

	return (
		<ul className='list-group pt-5'>
			{nicknames.map((name, index) => {
				return (
					<li key={index + 1} className='list-group-item'>
						{name}
					</li>
				);
			})}
		</ul>
	);
};

export default ListNicknames;
