import React from 'react';
import { Link } from '@reach/router';
import { Card } from 'react-bootstrap';
import { Votes } from './Votes';

export default function ArticleCard(props) {
	const { article } = props;

	return (
		<div className='mb-3'>
			<Card
				className='mx-auto .d-inline-flex flex-row justify-content-between align-items-center col-md-8 p-lg-5'
				border='warning'
				bg='light'>
				<div className='card-container1'>
					<Votes votes={article.votes} id={article.article_id} endpoint='articles' xm={12} md={12} lg={12} />
				</div>
				<div className='card-container2'>
					<Card.Body>
						<Link to={`/articles/${article.article_id}`}>
							<Card.Title> {article.title}</Card.Title>
						</Link>
						<Card.Subtitle className='mb-2 text-muted'>
							{' '}
							posted in {article.topic} by {article.author}
						</Card.Subtitle>
						<Card.Subtitle className='mb-2 text-muted'>
							{article.body.substring(0, 200)}...Read More
						</Card.Subtitle>
					</Card.Body>
				</div>

				<div className='card-container3 mt-4'>
					<Card.Link href={`/articles/${article.article_id}`}>
						{article.comment_count} comments
					</Card.Link>
				</div>
			</Card>
		</div>
	);
}
