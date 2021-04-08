import React, { Component } from "react";
import { getArticleById } from "../utils";
import ArticleCard from "./ArticleCard";

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
    // console.log(article.article)
    return (
      <div>
        {isLoading ? (
          <h1>Page is loading</h1>
        ) : (
          <ArticleCard article={article} key={article.article_id} />
        )}
      </div>
    );
  }
}
