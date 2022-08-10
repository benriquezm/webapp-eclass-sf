import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//  import all routes (pages)
import Characters from './Characters/Characters';
import CharacterDetails from './CharacterDetails/CharacterDetails';
import Favorites from './Favorites/Favorites';

const RoutesCustom = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Characters />} />
				<Route path='characters' element={<Characters />} />
				<Route path='characters/:characterId' element={<CharacterDetails />} />
				<Route path='favorites' element={<Favorites />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesCustom;
