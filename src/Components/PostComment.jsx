import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { postCommentByArticleId } from '../api';

export class PostComment extends Component {
	state = {
		comment: ''
	};

	handleSubmit = (event) => {
		event.preventDefault();
		postCommentByArticleId(this.props.article_id, this.state.comment).then((newComment) => {
			this.props.addNewComment(newComment);
		});
		this.setState({ comment: '' });
	};

	handleChange = (event) => {
		this.setState({ comment: event.target.value });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Card
					className='mx-auto .d-inline-flex col-md-7 p-lg-3 pt-lg-4 p-3 m-3'
					border='warning'
					bg='light'>
					<label htmlFor='comment'>
						<textarea
							style={{
								width: '75%',
								outline: 'none',
								// border: 0,
								borderRadius: '5px',
								padding: '5px',
								background: '#fff'
							}}
							value={this.state.comment}
							onChange={this.handleChange}
							placeholder='Write a comment jessjelly....'></textarea>
					</label>{' '}
					<br />
					<button
						className='px-3 p-2'
						style={{
							width: '150px',
							alignSelf: 'center',
							borderRadius: '15px',
							background: '#fff'
						}}>
						Submit
					</button>
				</Card>
			</form>
		);
	}
}