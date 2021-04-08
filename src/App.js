import "./App.css";
import Header from "./Components/Header";
import { Nav } from "./Components/Nav";
import {Router} from '@reach/router'
import {ArticleList} from './Components/ArticleList' 
import { ArticleByTopic } from "./Components/ArticleByTopic";
import {SingleArticle} from "./Components/SingleArticle"
import {Comments} from "./Components/Comments"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Router>
      <ArticleList path="/"/>
      <ArticleByTopic path="/:topic_id/articles"/>
      <SingleArticle path="/articles/:article_id"/>
      <Comments path="/articles/:article_id"/>
      </Router>
    </div>
  );
}

export default App;
