import React from 'react';
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

import Card from '../../elements/Card/Card';
import Spinner from '../../elements/Spinner/Spinner';

//	query get all characters from api Rick and Morty
//	TODO resolve query dynamic pagination and separate of module CardList
const GET_ALL_CHARACTERS = gql`
	query GetAllCharacters {
		characters(page: 2) {
			info {
				count
				pages
			}
			results {
				name
				id
				image
			}
		}
	}
`;

const CardList = () => {
	const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);

	if (loading) return <Spinner />;
	if (error) return <p>Error: ${error.message}</p>;
	return (
		<div className='row row-cols-1 row-cols-md-3 g-4'>
			{data.characters.results.map((character: any) => {
				return <Card key={character.id} dataCharacter={character} />;
			})}
		</div>
	);
};

export default CardList;
