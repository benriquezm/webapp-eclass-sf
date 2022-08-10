//  import LayoutPrincipal
import LayoutPrincipal from '../../components/layouts/LayoutPrincipal';
import Searcher from '../../components/elements/Searcher/Searcher';
import CardList from '../../components/modules/CardList/CardList';
import './styles.css';

const Characters = () => {
	return (
		<LayoutPrincipal>
			<div className='container bg-body'>
				<div className='root pb-5'>
					<Searcher />
					<CardList />
				</div>
			</div>
		</LayoutPrincipal>
	);
};

export default Characters;
