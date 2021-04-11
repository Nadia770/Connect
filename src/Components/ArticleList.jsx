import React, { Component } from "react";
import { getAllArticles, getSortedArticles } from "../api";
import ArticleCard from "./ArticleCard";
import DisplayErrors from "./DisplayErrors";

export class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    error: null,
  };

  componentDidMount = () => {
    const { topic_id } = this.props;
    getAllArticles(topic_id).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  componentDidUpdate(previousProp) {
    const { topic_id } = this.props;
    if (topic_id !== previousProp.topics) {
      getAllArticles(topic_id)
        .then((articles) => {
          this.setState({ articles, isLoading: false });
        })
        .catch((error) => {
          this.setState({ error, isLoading: false });
        });
    }
  }

  sortArticles = (event) => {
    const query = event.target.value;
    getSortedArticles(query).then((articles) => {
      this.setState({ articles });
    });
  };

  render() {
    const { articles, isLoading, error} = this.state;
    return (
      <div>
        {isLoading ? (
          <p>is Loading..</p>
        ) : error ? (
          <DisplayErrors status={error.response.status} msg={error.response.data.msg} />
        ) : (
          <section>
            <h4>Sorty by:</h4>
            <button value="created_at" onClick={this.sortArticles}>
              {" "}
              New{" "}
            </button>
            <button value="comment_count" onClick={this.sortArticles}>
              {" "}
              Popular{" "}
            </button>
            <button value="votes" onClick={this.sortArticles}>
              {" "}
              Top{" "}
            </button>
            {articles.map((article) => {
              return <ArticleCard article={article} key={article.article_id} />;
            })}{" "}
          </section>
        )}
      </div>
    );
  }
}
