import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Navigation = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-dark-aqua mt-4'>
			<div className='container-fluid'>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='nav nav-pills nav-fill'>
						<li className='nav-item'>
							<Link className='nav-link active' to='/'>
								Characters
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/favorites'>
								Favorites
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/nicknames'>
								Nicknames
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
