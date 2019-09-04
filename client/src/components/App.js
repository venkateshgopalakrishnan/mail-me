import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import {connect} from "react-redux"
import * as actions from '../actions'

import Header from "./Header";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Container>
        <div>
          <BrowserRouter>
            <div>
              <Header />
            </div>
          </BrowserRouter>
        </div>
      </Container>
    );
  }
}

export default connect(null, actions)(App);
