import React, { Component } from "react";
import { getTopics } from "../api";
import { Navbar, NavDropdown, Nav} from "react-bootstrap";

export class Navigation extends Component {
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
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="/">Connect News</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Topics" id="collasible-nav-dropdown">
              {topics.map((topic) => {
                  return (
                    <NavDropdown.Item 
                      href={`/${topic.slug}/articles`}
                      key={topic.slug}
                    >
                      {topic.slug}
                      </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )}{" "}
      </div>
    );
  }
}
