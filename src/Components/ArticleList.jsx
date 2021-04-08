import React, { Component } from "react";
import { getAllArticles, getSortedArticles } from "../utils";
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

  sortArticles = (event) =>{
    const query = event.target.value
    getSortedArticles(query).then((articles) => {
      this.setState({ articles });
    });
  }



  render() {
    const { articles } = this.state;

    return (
      <section>
        <h4>Sorty by:</h4>
        <button value="created_at" onClick={this.sortArticles}> Date </button>
        <button value="comment_count" onClick={this.sortArticles}> Comments </button>
        <button value="votes"onClick={this.sortArticles}> Votes </button>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
        {" "}
      </section>
    );
  }
}
