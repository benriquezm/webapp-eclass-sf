import React from 'react';

import Searcher from '../../elements/Searcher/Searcher';
import './styles.css';

const Body = () => {
	return (
		<div className='container bg-body'>
			<div className='root'>
				<Searcher />
			</div>
		</div>
	);
};

export default Body;
