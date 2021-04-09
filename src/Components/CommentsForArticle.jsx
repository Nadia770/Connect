import React, { Component } from "react";
import { getCommentByArticleId, deleteCommentById} from "../utils";
import CommentCard from "./CommentCard";
import { PostComment } from "./PostComment";

export class CommentsForArticle extends Component {
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

  addNewComment = (newComment) => {
    this.setState((currentState) => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };


 deleteComment= (comment_id)=>{
  deleteCommentById(comment_id).then(()=>{
    this.setState((currentState)=>{
      const updatedComments= [...currentState.comments]
      updatedComments.filter((comment)=>{
        return comment.comment_id !== comment_id  
       })
       return {comments:updatedComments}
    })
  })
 }

  render() {
    const { comments, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <div>
            {comments.map((comment) => {
              return <CommentCard comment={comment} deleteComment={this.deleteComment} key={comment.created_at} />;
            })}

            <PostComment
              article_id={this.props.article_id}
              addNewComment={this.addNewComment}
            />
          </div>
        )}
      </div>
    );
  }
}
