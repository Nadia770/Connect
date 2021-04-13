import React from "react";
import { Link } from "@reach/router";
import { Card } from "react-bootstrap";
import { Votes } from "./Votes";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ArticleCard(props) {
  const { article } = props;

  return (
    <Card className="mx-auto" border='dark'  bg='light' style={{ width: "20rem" }}>
      <Card.Body>
        <Link to={`/articles/${article.article_id}`}>
          <Card.Title> {article.title}</Card.Title>
        </Link>
        <Card.Subtitle className="mb-2 text-muted">
          {" "}
          posted in {article.topic} by {article.author}
        </Card.Subtitle>
        <Card.Link href={`/articles/${article.article_id}/comments`}>
          {article.comment_count} comments
        </Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
        <Votes votes={article.votes} id={article.article_id} endpoint="articles" />
      </Card.Body>
    </Card>
  );
}
