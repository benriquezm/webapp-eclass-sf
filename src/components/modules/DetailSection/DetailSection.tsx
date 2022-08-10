// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

import './styles.css';
import Spinner from '../../elements/Spinner/Spinner';

//	query get all characters from api Rick and Morty
//	TODO resolve separate of module DetailSection
const GET_CHARACTER_BY_ID = gql`
	query GetCharacterById($ids: [ID!]!) {
		charactersByIds(ids: $ids) {
			id
			name
			status
			species
			type
			gender
			image
			created
			location {
				name
			}
			episode {
				name
			}
			origin {
				dimension
			}
		}
	}
`;

interface ICharacterProps {
	ids: number;
}

const Character = (props: ICharacterProps) => {
	const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
		variables: { ids: props.ids },
	});
	console.log('[ids]: ', props.ids);

	if (loading) return <Spinner />;
	if (error) return <p>Error: ${error.message}</p>;

	return (
		<section className='py-5 text-white'>
			<div className='container px-4 px-lg-5 my-5'>
				{data.charactersByIds.map((character: any) => {
					console.log('[character]: ', character);
					return (
						<div key={character.id} className='row gx-4 gx-lg-5 align-items-center'>
							<div className='col-md-6'>
								<img
									className='card-img-top mb-5 mb-md-0'
									src={character.image}
									alt='...'
								/>
							</div>
							<div className='col-md-6'>
								{/** <div className='small mb-1'>SKU: BST-498</div> */}
								<h1 className='display-5 fw-bolder'>{character.name}</h1>
								{/**
								 * <div className='fs-5 mb-5'>
									<span className='text-decoration-line-through'>$45.00</span>
									<span>$40.00</span>
								</div>
								 */}
								{character.episode.map((item: any, index: any) => {
									return (
										<p key={index + 1} className='small mb-1'>
											<span>Espisode: </span>
											{item.name}
										</p>
									);
								})}
								<p className='small mb-1'>
									<span>Gender: </span>
									{character.gender}
								</p>
								<p className='small mb-1'>
									<span>Species: </span>
									{character.species}
								</p>
								{/**
						 * <div className='d-flex'>
							<input
								className='form-control text-center me-3'
								id='inputQuantity'
								type='num'
								value='1'
								style={{ maxWidth: '3em' }}
							/>
							<button className='btn btn-outline-dark flex-shrink-0' type='button'>
								<i className='bi-cart-fill me-1'></i>
								Add to cart
							</button>
						</div>
						 */}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Character;
