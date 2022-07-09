import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from '../comments/CommentForm';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const CommentsList = ({ campsiteId }) => {
	const comments = useSelector(selectCommentsByCampsiteId(campsiteId)); // expected: array of comments objects
	const isLoading = useSelector((state) => state.comments.isLoading);
	const errMsg = useSelector((state) => state.comments.errMsg);

	return isLoading ? (
		<Loading />
	) : errMsg ? (
		<Error errMsg={errMsg} />
	) : comments && comments.length > 0 ? (
		<Col md='5' className='m-1'>
			<h4>Comments</h4>
			{
				comments.map(comment => <Comment key={comment.id} comment={comment} />)
			}
			<CommentForm campsiteId={campsiteId} />
		</Col>
	) : (
		<Col md='5' className='m-1'>
			There are no comments for this campsite yet.
		</Col>
	);

};

export default CommentsList;
