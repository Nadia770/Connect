import React from "react";
import { Link } from "@reach/router";
import { Card } from "react-bootstrap";
import { Votes } from "./Votes";

export default function ArticleCard(props) {
  const { article } = props;

  return (
    <Card border="dark"  bg="light" style={{ width: "18rem" }}>
      <Card.Body>
        <Link to={`/articles/${article.article_id}`}>
          <Card.Title> {article.title}</Card.Title>
        </Link>
        <Card.Subtitle className="mb-2 text-muted">
          {" "}
          posted in {article.topic} by {article.author}
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="{`/articles/${article.article_id}/comments`}">
          {article.comment_count} comments
        </Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}

        <Votes votes={article.votes} id={article.article_id} item="articles" />
      </Card.Body>
    </Card>
  );
}
