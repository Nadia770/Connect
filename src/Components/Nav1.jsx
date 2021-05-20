import React, { Component } from "react";
import { Link } from "@reach/router";
import { getTopics } from "../api";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { House } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import Loader from "./Loader";

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
          <Loader/>
        ) : (
          <nav className="topnav">
            <Link to="/articles">
              <House color="royalblue" size={30} />
            </Link>
            <Dropdown>
              <Dropdown.Toggle size="sm" variant="outline-primary" id="dropdown-basic">
                Topics
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {topics.map((topic) => {
                  return (
                    <Dropdown.Item
                      href={`/${topic.slug}/articles`}
                      key={topic.slug}
                    >
                      {topic.slug}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <h3>Your logged in as: jessjelly</h3>
            <Link to="/">
            <Person color="royalblue" size={30} />
            </Link>
          </nav>
        )}{" "}
      </div>
    );
  }
}
