import React, { Component } from "react";
import {Button} from "react-bootstrap"
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
    const { articles, isLoading, error } = this.state;
    return (
      <div>
        {isLoading ? (
          <p>is Loading..</p>
        ) : error ? (
          <DisplayErrors status={error.response.status} msg={error.response.data.msg} />
        ) : (
              <section>
                <Button className="mt-2 mb-2" variant="outline-primary" size="sm" value="created_at" onClick={this.sortArticles}>
              {" "}
              New{" "}
            </Button>
            <Button variant="outline-primary" size="sm" value="comment_count" onClick={this.sortArticles}>
              {" "}
              Popular{" "}
            </Button>
            <Button variant="outline-primary" size="sm" value="votes" onClick={this.sortArticles}>
              {" "}
              Top{" "}
            </Button>
                {articles.map((article) => {
                  return <ArticleCard article={article} key={article.article_id} />;
                })}{" "}
              </section>
            )}
      </div>
    );
  }
}
