import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsiteCard = ({ campsite }) => {
	const { image, name } = campsite;
//const CampsiteCard = ({ image, name }) => { // pretty sure this will work
	// turns out it didn't work, not sure exactly why
	return (
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
	);
}

export default CampsiteCard;
