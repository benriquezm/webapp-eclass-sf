import { useParams } from 'react-router-dom';
//  import LayoutPrincipal
import LayoutPrincipal from '../../components/layouts/LayoutPrincipal';
import DetailSection from '../../components/modules/DetailSection/DetailSection';

const CharacterDetails = () => {
	const params = useParams();
	const characterId = parseInt(params.characterId!, 10);

	return (
		<LayoutPrincipal>
			<DetailSection ids={characterId} />
		</LayoutPrincipal>
	);
};

export default CharacterDetails;
