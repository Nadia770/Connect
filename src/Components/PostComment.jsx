import React, { Component } from "react";
import { postCommentByArticleId } from "../api";

export class PostComment extends Component {
  state = {
    comment: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    postCommentByArticleId(this.props.article_id, this.state.comment).then(
      (newComment) => {
        this.props.addNewComment(newComment);
      }
    );
    this.setState({ comment: "" });
  };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">
          <textarea
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="Write a comment jessjelly...."
          ></textarea>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
