import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

//const CampsiteCard = ({ campsite }) => {
//	const { image, name } = campsite;
const CampsiteCard = ({ image, name }) => { // pretty sure this will work
	return (
		<Card>
			<CardImg
				width='100%'
				src={image}
				alt={name}
			/>
			<CardImgOverlay>
				<CardTitle>{props.campsite.name}</CardTitle>
			</CardImgOverlay>
		</Card>
	);
}

export default CampsiteCard;
