import React from 'react';
import { Link } from "@reach/router";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Votes } from './Votes';

const useStyles = makeStyles({
  root: {
    // minWidth: 100,
    // maxWidth: 400
    'margin-left': '15%',
    width: "70%",
    height: "20%"
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ArticleCard(props) {
  const classes = useStyles();
  const {article} = props

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Date: {article.created_at}
        </Typography>
        <Typography variant="h6" component="h2">
        <Link to={`/articles/${article.article_id}`}>
        {article.title}
        </Link>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          posted in {article.topic} by {article.author}
        </Typography>
        <Typography variant="body2" component="p">
        <Link to={`/articles/${article.article_id}/comments`}>
         {article.comment_count} comments
         </Link>
        </Typography>
        <Typography variant="body2" component="p">
         <Votes votes={article.votes} id={article.article_id} item="articles"/>
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}


// export default function ArticleCard(props) {
//   const {article} = props
//   return (
  
//     <div>
//       <h3>{article.title}</h3>
//     </div>
//   )
// }
