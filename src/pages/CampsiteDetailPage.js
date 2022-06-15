import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsite/campsitesSlice';
import CampsiteDetail from '../features/campsite/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';

const CampsiteDetailPage = _ => {
	// when useParams() is called in a component body, if that component
	// was rendered by another component using a URL parameter, then that
	// URL parameter will be available as the first property of an object
	// returned by useParams(). { 0: URL_component, ... }
	const { campsiteId } = useParams();
	const campsite = selectCampsiteById(campsiteId);

	return (
		<Container>
			<Row>
				<CampsiteDetail campsite={campsite} />
				<CommentsList campsiteId={campsiteId} />
			</Row>
		</Container>
	);
};

export default CampsiteDetailPage;
