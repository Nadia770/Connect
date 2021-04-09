import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Votes } from "./Votes";

const useStyles = makeStyles({
  root: {
    // minWidth: 100,
    // maxWidth: 400
    "margin-left": "15%",
    width: "70%",
    height: "20%",
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CommentCard(props) {
  const classes = useStyles();
  const { comment, deleteComment } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Date: {comment.created_at}
        </Typography>
        <Typography variant="h6" component="h2">
          {comment.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          posted in {comment.topic} by {comment.author}
        </Typography>
        <Typography variant="body2" component="p">
          {comment.body}
        </Typography>

        {comment.author == "jessjelly" ? (
          <button
            onClick={() => {
              deleteComment(comment.comment_id);
            }}
          >
            delete
          </button>
        ) : (
          <Votes
            votes={comment.votes}
            id={comment.comment_id}
            endpoint="comments"
          />
        )}
      </CardContent>
    </Card>
  );
}
