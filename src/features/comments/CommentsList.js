import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
	const comments = selectCommentsByCampsiteId(campsiteId); // expected: array of comments objects
	if (comments && comments.length > 0) {
//	(comments && comments.length > 0) ? {
		return (
			<Col md='5' className='m-1'>
				<h4>Comments</h4>
				{
					comments.map((comment) => {
						return (
							<Comment key={comment.id} comment={comment} />
						)
					})
				}
			</Col>
		);
	} else {
		return (
			<Col md='5' className='m-1'>
				There are no comments for this campsite yet.
			</Col>
		);
	}

};

export default CommentsList;
