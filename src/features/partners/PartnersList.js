import { Row, Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = _ => {
//	const partners = selectAllPartners();

	//console.log(`All partners: ${selectAllPartners()}`);
	return (
		<Col className='mt-4'>
			<Row>
			{
				selectAllPartners().map(pt => {
					//console.log(`Pt = ${pt.id}`);
					return (
						<div className='d-flex mb-5' key={pt.id}>
							<Partner partner={pt} />
						</div>
					);
				})
			}
			</Row>
		</Col>
	);
};

export default PartnersList;
