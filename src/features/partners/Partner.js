const Partner = ({ partner }) => {
	//!partner ? () => { return null } : null;
	console.log(`Partner.js: partner = ${partner}`);
	if(!partner) return null;
	const { image, name, description } = partner;
	//console.log(`name: ${name}`);
	return (
		<>
			<img src={image} alt={name} style={{ width: '150px' }} />
			<div className='m4'>
				<h5 className='fw-bold'>
					{name}
				</h5>
				{description}
			</div>
		</>
	);
};

export default Partner;
