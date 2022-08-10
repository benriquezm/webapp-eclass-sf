import './styles.css';

const Card = () => {
	return (
		<div className='col'>
			<div className='card h-100'>
				<img
					src='https://static.tvtropes.org/pmwiki/pub/images/evilmortyseason5.png'
					className='img-circle rounded-circle my-4'
					alt='Character of RAM'
				/>
				<div className='card-body'>
					<h5 className='card-title'>Card title</h5>
					<p className='card-text'>
						This is a longer card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
