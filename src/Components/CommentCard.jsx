import React from 'react';
import { Card } from 'react-bootstrap';
import { Votes } from './Votes';
import { TrashFill } from 'react-bootstrap-icons';

export default function CommentCard(props) {
  const { comment, deleteComment } = props;

  return (
    <div className='mb-3'>
      <Card
        className='mx-auto .d-inline-flex col-md-7 p-lg-3 p-3'
        border='warning'
        bg='light'>
        <div className='card-container2 text-left'>
          <Card.Body>
            <Card.Subtitle className='mb-2 text-muted'>
              posted in {comment.topic} by {comment.author} at{' '}
              {new Date(comment.created_at).toDateString()}
            </Card.Subtitle>
            <Card.Subtitle className='mb-2 mt-3 text-muted'>{comment.body}</Card.Subtitle>
          </Card.Body>
        </div>
        {comment.author === 'jessjelly' ? (
          <button
            style={{ width: '100px', alignSelf: 'center' }}
            onClick={() => {
              deleteComment(comment.comment_id);
            }}>
            <TrashFill />
          </button>
        ) : (
            <Votes votes={comment.votes} id={comment.comment_id} endpoint='comments' mr='mr-2' ml='ml-2' />
          )}
      </Card>
    </div>
  );
}
