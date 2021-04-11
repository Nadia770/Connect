import React, { Component } from "react";
import { getCommentByArticleId, deleteCommentById} from "../api";
import CommentCard from "./CommentCard";
import DisplayErrors from "./DisplayErrors";
import { PostComment } from "./PostComment";

export class CommentsForArticle extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null
  };
  componentDidMount = () => {
    const { article_id } = this.props;
    getCommentByArticleId(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    })
    .catch(error=>{
      this.setState({error, isLoading: false})
   })
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
    const { comments, isLoading, error} = this.state;
    return (
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) :  error? <DisplayErrors status={error.response.status} msg={error.response.data.msg}/> : (
          <div>
               <PostComment
              article_id={this.props.article_id}
              addNewComment={this.addNewComment}
            />
            {comments.map((comment) => {
              return <CommentCard comment={comment} deleteComment={this.deleteComment} key={comment.created_at} />;
            })}

         
          </div>
        )}
      </div>
    );
  }
}
