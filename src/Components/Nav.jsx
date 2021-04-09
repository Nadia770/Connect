import React, { Component } from "react";
import { Link } from "@reach/router";
import { getTopics } from "../utils";

export class Nav extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading } = this.state;
    return (
      <div className="topnav">
        {isLoading ? (
          <h1>Page is loading</h1>
        ) : (
          <nav>
            <Link to="/">
              <h3>Home Page</h3>
            </Link>
            {topics.map((topic) => {
              return (
                <Link key={topic.slug} to={`/${topic.slug}/articles`}>
                  <h3>{topic.slug}</h3>
                </Link>
              );
            })}
          </nav>
        )}{" "}
      </div>
    );
  }
}
