import { Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from '../features/campsite/CampsiteDetail';
import CampsitesList from '../features/campsite/CampsitesList';
import { selectRandomCampsite } from '../features/campsite/campsitesSlice';

const CampsiteDirectoryPage = ( props ) => {
	let selectedCampsite = selectRandomCampsite();
	const toggleCampsite = _ => {
		selectedCampsite = selectRandomCampsite();
		console.log(selectedCampsite);
	}

	return (
		<Container>
			<Button onClick={() => toggleCampsite()}>
				Select Random Campsite
			</Button>
			<Row>
				<Col sm='5' md='7'>
					<CampsitesList />
				</Col>
				<Col sm='7' md='5'>
					<CampsiteDetail campsite={selectedCampsite} />
				</Col>
			</Row>
		</Container>
	);
};

export default CampsiteDirectoryPage;
