import React from 'react';

import Searcher from '../../elements/Searcher/Searcher';
import CardList from '../../modules/CardList/CardList';
import './styles.css';

const Body = () => {
	return (
		<div className='container bg-body'>
			<div className='root pb-5'>
				<Searcher />
				<CardList />
			</div>
		</div>
	);
};

export default Body;
