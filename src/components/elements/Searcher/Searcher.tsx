import React from 'react';

const Searcher = () => {
	return (
		<div className='col-md-6 offset-md-3'>
			<form className='d-flex mt-5' role='search'>
				<input
					className='form-control me-2'
					type='search'
					placeholder='Search characters of Rick and Morty serie'
					aria-label='Search'
				/>
			</form>
		</div>
	);
};

export default Searcher;
