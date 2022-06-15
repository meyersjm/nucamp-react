import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => {
	const { id, image, name } = campsite;
//const CampsiteCard = ({ image, name }) => { // pretty sure this will work
	// turns out it didn't work, not sure exactly why
	return (
		<Link to={`${id}`}>
			<Card>
				<CardImg
					width='100%'
					src={image}
					alt={name}
				/>
				<CardImgOverlay>
					<CardTitle>{name}</CardTitle>
				</CardImgOverlay>
			</Card>
		</Link>
	);
}

export default CampsiteCard;
