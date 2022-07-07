import { Row, Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const PartnersList = _ => {
//	const partners = selectAllPartners();
	const partners = useSelector(selectAllPartners);
	const isLoading = useSelector((state) => state.partners.isLoading);
	const errMsg = useSelector((state) => state.partners.errMsg);

	//console.log(`All partners: ${selectAllPartners()}`);
	return isLoading ? (
		<Loading />
	) : errMsg ? (
		<Error errMsg={errMsg} />
	) : (
		<Col className='mt-4'>
			<Row>
			{
				partners.map(pt => {
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
