import React from "react";
import { Card } from "react-bootstrap";
import { Votes } from "./Votes";
import { TrashFill } from "react-bootstrap-icons";

export default function CommentCard(props) {
  const { comment, deleteComment } = props;

  return (
    <div className="mb-3">
      <Card className="mx-auto .d-inline-flex flex-row justify-content-between align-items-center col-md-8" border='warning' bg='light' >
        {comment.author === "jessjelly" ? (
          <button
            onClick={() => {
              deleteComment(comment.comment_id);
            }}
          >
            <TrashFill />
          </button>
        ) : (
            <Votes
              votes={comment.votes}
              id={comment.comment_id}
              endpoint="comments"
            />
          )}
        <div className="card-container2">
          <Card.Body>
            {/* <Card.Title> {comment.title}</Card.Title> */}
            <Card.Subtitle className="mb-2 text-muted">
              {comment.body}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              posted in {comment.topic} by {comment.author} at {new Date(comment.created_at).toDateString()}
            </Card.Subtitle>
          </Card.Body>
        </div>
      </Card>
    </div>
  )
}


