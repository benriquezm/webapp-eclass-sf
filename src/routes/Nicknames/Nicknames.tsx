//  import LayoutPrincipal
import LayoutPrincipal from '../../components/layouts/LayoutPrincipal';
import ListNicknames from '../../components/modules/ListNicknames/ListNicknames';

const Nicknames = () => {
	const nicknames = ['Triviño TI', 'Homer Dev', '', ' Ragnar Front', 'Loki UX', ''];
	return (
		<LayoutPrincipal>
			<div className='container bg-body'>
				<div className='root pb-5'>
					<ListNicknames order={'ASC'} names={nicknames} />
				</div>
			</div>
		</LayoutPrincipal>
	);
};

export default Nicknames;
