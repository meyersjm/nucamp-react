import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle
} from 'reactstrap';

const DisplayCard = ({ item }) => {
	const { image, name, description: desc } = item;
	return (
		<Card>
			<CardImg src={image} alt={name} />
			<CardBody>
				<CardTitle>{name}</CardTitle>
				<CardText>{desc}</CardText>
			</CardBody>
		</Card>
	);
};

export default DisplayCard;
