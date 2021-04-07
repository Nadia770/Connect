import React, { Component } from "react";
import { getArticlesByTopicId } from "../utils";

export class ArticleByTopic extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    const { topic_id } = this.props;
    console.log(topic_id)
    getArticlesByTopicId(topic_id).then((articles) => {
      this.setState({articles, isLoading:false});
    });
  }

  componentDidUpdate(previousProp){
    const { topic_id } = this.props;
    if(topic_id !== previousProp.topic_id){
      getArticlesByTopicId(topic_id).then((articles) => {
        this.setState({ articles, isLoading:false });
      });
    }
  }
  

  render() {
    const { articles, isLoading} = this.state;
    return (
      <div>
      {isLoading? <p>Loading</p>: articles.map((article) => {
          return <li>{article.title}</li>;
        })} 
      </div>
    );
  }
}
