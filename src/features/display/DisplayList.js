import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsite/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DisplayList = _ => {
//	const items = [ selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner() ];
	const items = useSelector((state) => [
		selectFeaturedCampsite(state),
		selectFeaturedPromotion(state),
		selectFeaturedPartner(state)
	]);
	console.log('display items:', items);

	return (
		<Row> {
			items.map((item, idx) => {
				const { featuredItem, isLoading, errMsg } = item;
				return isLoading ? <Loading key={idx} />
					: errMsg ? <Error errMsg={errMsg} key={idx} />
					: featuredItem ? (
					<Col md className='m-1' key={idx}>
						<AnimatedDisplayCard item={featuredItem} />
					</Col>) : null;
			})
		};
		</Row>
	);
};

export default DisplayList;
