import { Container } from 'reactstrap';
import CampsitesList from '../features/campsite/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
	return (
		<Container>
			<SubHeader current="Directory" />
			<CampsitesList />
		</Container>
	);
};

export default CampsitesDirectoryPage;

