import React from 'react';

import './styles.css';

import Navigation from '../Navigation/Navigation';

const Header = () => {
	return (
		<div className='p-4 p-md-5 text-white bg-dark-aqua'>
			<img
				src='rickandmorty-logo.png'
				className='rounded mx-auto d-block img-fluid'
				alt='Rick and Morty'
			></img>
			<Navigation />
		</div>
	);
};

export default Header;
