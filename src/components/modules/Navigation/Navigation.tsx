import React from 'react';

import './styles.css';

const Navigation = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-dark-aqua'>
			<div className='container-fluid'>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='nav nav-pills nav-fill'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='/'>
								Characters
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/favorites'>
								Favorites
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
