import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsite/campsitesSlice';
import CampsiteDetail from '../features/campsite/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';

const CampsiteDetailPage = _ => {
	// when useParams() is called in a component body, if that component
	// was rendered by another component using a URL parameter, then that
	// URL parameter will be available as the first property of an object
	// returned by useParams(). { 0: URL_component, ... }
	const { campsiteId } = useParams();
	const campsite = useSelector(selectCampsiteById(campsiteId));
	console.log('campsite:', campsite);
	const isLoading = useSelector((state) => state.campsites.isLoading);
	const errMsg = useSelector((state) => state.campsites.errMsg);
	let content;

	content = isLoading ? <Loading />
		: errMsg ? <Error errMsg={errMsg} />
		: (
			<>
				<CampsiteDetail campsite={campsite} />
				<CommentsList campsiteId={campsiteId} />
			</>
		);

	return (
		<Container>
			{ campsite && <SubHeader current={campsite.name} detail={true} /> }
			<Row>
				{content}
			</Row>
		</Container>
	);
};

export default CampsiteDetailPage;
