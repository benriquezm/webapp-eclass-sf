import { Link } from 'react-router-dom';

import './styles.css';

interface ICardProps {
	dataCharacter: {
		name: string;
		id: number;
		image: string;
	};
}

const Card = (props: ICardProps) => {
	const {
		dataCharacter: { name = '', id = 0, image = '' },
	} = props || {};

	return (
		<div className='col'>
			<div className='card text-center h-100'>
				<img src={image} className='img-circle rounded-circle my-4' alt={name} />
				<div className='card-body'>
					<h5 className='card-title'>{name}</h5>
					{/**
					 * <p className='card-text'>
						This is a longer card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
					</p>
					 */}
					<Link className='card-link' to={`/characters/${id}`}>
						more information
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
