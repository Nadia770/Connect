import React, { Component } from 'react'
import { getCommentByArticleId } from '../utils';

export class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };
  componentDidMount = () => {
    const { article_id } = this.props;
    getCommentByArticleId(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

  componentDidUpdate(previousProp) {
    const { article_id } = this.props;
    if (article_id !== previousProp.article_id) {
      getCommentByArticleId(article_id).then((comments) => {
        this.setState({ comments, isLoading: false });
      });
    }
  }

  render() {
    const { comments, isLoading} = this.state;
    return (
      <div>
      {isLoading? <p>Loading</p>: comments.map((comment) => {
          return  <h3>{comment.author}</h3>;
        })} 
      </div>
    );
  }
}
export default Comments
