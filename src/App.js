import "./App.css";
import Header from "./Components/Header";
import { Nav } from "./Components/Nav1";
import {Router} from '@reach/router'
import {ArticleList} from './Components/ArticleList' 
import { ArticleByTopic } from "./Components/ArticleByTopic";
import {SingleArticle} from "./Components/SingleArticle"
import { CommentsForArticle } from "./Components/CommentsForArticle";
import DisplayErrors from "./Components/DisplayErrors";


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Router>
      <ArticleList path="/"/>
      <ArticleByTopic path="/:topic_id/articles"/>
      <SingleArticle path="/articles/:article_id"/>
      <CommentsForArticle path="/articles/:article_id/comments"/>
      <DisplayErrors default status={404} msg={"Path not found..."}/>
      </Router>
    </div>
  );
}

export default App;
