import React, { Component } from "react";
import { getArticleById } from "../utils";
import Comments from "./Comments";
import { PostComment } from "./PostComment";
import { Votes } from "./Votes";

export class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
  };

  componentDidMount = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then((articleArray) => {
      const article = articleArray[0]
      this.setState({ article, isLoading: false });
    });
  };

  componentDidUpdate(previousProp) {
    const { article_id } = this.props;
    if (article_id !== previousProp.article_id) {
      getArticleById(article_id).then((article) => {
        this.setState({ article, isLoading: false });
      });
    }
  }

  render() {
    const { article, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <h1>Page is loading</h1>
        ) : (
           <section> 
             <p2>Date: {article.created_at}</p2>
             <h3>{article.title}</h3>
             <p2>{article.body}</p2>
             <p2>Posted by: {article.author}</p2>
             <Votes votes={article.votes} id={article.article_id} item="articles"/>
             <Comments article_id={article.article_id} />
           </section>
        )}
      </div>
    );
  }
}
