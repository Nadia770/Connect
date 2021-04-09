import React, { Component } from "react";
import { getArticleById } from "../utils";
import { CommentsForArticle } from "./CommentsForArticle";
import { Votes } from "./Votes";

export class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
  };

  componentDidMount = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then((articleArray) => {
      const article = articleArray[0];
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
            <h3>Date: {article.created_at}</h3>
            <h3>{article.title}</h3>
            <h4>{article.body}</h4>
            <h4>Posted by: {article.author}</h4>
            <Votes
              votes={article.votes}
              id={article.article_id}
              item="articles"
            />
            <CommentsForArticle article_id={article.article_id} />
          </section>
        )}
      </div>
    );
  }
}
