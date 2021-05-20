import React, { Component } from "react";
import { getArticleById } from "../api";
import { CommentsForArticle } from "./CommentsForArticle";
import DisplayErrors from "./DisplayErrors";
import { Votes } from "./Votes";
import { Card } from "react-bootstrap";
import Loader from "./Loader";


export class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    error: null
  };

  componentDidMount = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then((articleArray) => {
      const article = articleArray[0];
      this.setState({ article, isLoading: false });
    })
      .catch(error => {
        this.setState({ error, isLoading: false })
      })
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
    const { article, isLoading, error } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loader/>
        ) : error ? <DisplayErrors status={error.response.status} msg={error.response.data.msg} /> : (
          <section>
            <div className = "singleArticleContainer">
              <h3 className = "singleArticleSmallText" >Date: {(new Date(article.created_at)).toDateString()}</h3>
              <h3>{article.title}</h3>
              <h4 className = "singleArticleBody">{article.body}</h4>
              <h4 className = "singleArticleSmallText">Posted by: {article.author}</h4>
              
              <Votes
                votes={article.votes}
                id={article.article_id}
                endpoint="articles"
              />
                     </div>
              <CommentsForArticle article_id={article.article_id} />
              </section>
       
        )}

      </div>
    );
  }
}
