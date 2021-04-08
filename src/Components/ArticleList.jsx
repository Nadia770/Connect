import React, { Component } from "react";
import { getAllArticles } from "../utils";
import ArticleCard from "./ArticleCard";


export class ArticleList extends Component {
  state = {
    articles: [],
  };

  componentDidMount = () => {
    const { topic_id } = this.props;
    getAllArticles(topic_id).then((articles) => {
      this.setState({ articles });
    });
  };

  componentDidUpdate(previousProp) {
    const { topic_id } = this.props;
    if (topic_id !== previousProp.topics) {
      getAllArticles(topic_id).then((articles) => {
        this.setState({ articles });
      });
    }
  }
  render() {
    const { articles } = this.state;

    return (
      <section>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
        {" "}
      </section>
    );
  }
}
