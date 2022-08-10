import { useParams } from 'react-router-dom';
//  import LayoutPrincipal
import LayoutPrincipal from '../../components/layouts/LayoutPrincipal';

const CharacterDetails = () => {
	const params = useParams();
	console.log('[character-id]: ', params.characterId);

	return (
		<LayoutPrincipal>
			<div>Page for show details of character</div>
		</LayoutPrincipal>
	);
};

export default CharacterDetails;
