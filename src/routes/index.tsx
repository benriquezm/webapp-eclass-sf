import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//  import all routes (pages)
import Characters from './Characters/Characters';
import Favorites from './Favorites/Favorites';

//  import LayoutPrincipal
import LayoutPrincipal from '../components/layouts/LayoutPrincipal';

const RoutesCustom = () => {
	return (
		<BrowserRouter>
			<LayoutPrincipal>
				<Routes>
					<Route path='/' element={<Characters />} />
					<Route path='favorites' element={<Favorites />} />
				</Routes>
			</LayoutPrincipal>
		</BrowserRouter>
	);
};

export default RoutesCustom;
