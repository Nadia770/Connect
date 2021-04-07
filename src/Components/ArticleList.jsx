import React, { Component } from "react";
import { getAllArticles } from "../utils";

export class ArticleList extends Component {
  state = {
    articles: [],
    
  };

  componentDidMount = () => {
   const {topic_id} = this.props
   getAllArticles(topic_id).then((articles) => {
      this.setState({ articles});
    });
  };

  componentDidUpdate(previousProp){
    const {topic_id}=this.props
    if(topic_id !== previousProp.topics){
      getAllArticles(topic_id).then((articles) => {
        this.setState({ articles });
      });
    }
  }
  render() {
    const { articles } = this.state;

    return (
      <ol>
        {articles.map((article) => {
          return (
            <div>
              <li>{article.title}</li>
              <h5>posted in by {article.author}</h5>
            </div>
          );
        })}
      </ol>
    );
  }
}
