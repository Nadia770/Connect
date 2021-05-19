import React, { Component } from "react";
import {Button} from "react-bootstrap"
import { getArticlesByTopicId, getSortedArticles  } from "../api";
import ArticleCard from "./ArticleCard";

export class ArticleByTopic extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    const { topic_id } = this.props;
    getArticlesByTopicId(topic_id).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(previousProp) {
    const { topic_id } = this.props;
    if (topic_id !== previousProp.topic_id) {
      getArticlesByTopicId(topic_id).then((articles) => {
        this.setState({ articles, isLoading: false });
      });
    }
  }

  sortArticles = (event) => {
    const query = event.target.value;
    getSortedArticles(query).then((articles) => {
      this.setState({ articles, isLoading: false  });
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <p>is Loading..</p>
        ) : (
          <section > 
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
