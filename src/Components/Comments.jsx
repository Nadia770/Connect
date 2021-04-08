import React, { Component } from "react";
import { getCommentByArticleId } from "../utils";
import CommentCard from "./CommentCard";
import { PostComment } from "./PostComment";

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
    if (article_id != previousProp.article_id) {
      getCommentByArticleId(article_id).then((comments) => {
        this.setState({ comments, isLoading: false });
      });
    }
  }

  addNewComment = (newComment) => {
    this.setState((currentState) => {
      return { comments: [...currentState, newComment] };
    });
  };

  render() {
    const { comments, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          comments.map((comment) => {
            return (
          <CommentCard comment={comment} key={comment.created_at}/>
            );
          })
        )}
        <PostComment
          article_id={comments.article_id}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}
export default Comments;
