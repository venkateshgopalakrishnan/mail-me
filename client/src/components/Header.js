import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <Nav.Link href="/auth/google">Login with Google</Nav.Link>
            <Nav.Link href="/auth/linkedin">Login with Linkedin</Nav.Link>
          </div>
        );
      default:
        return <Nav.Link href="/api/logout">Logout</Nav.Link>;
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Mail Me</Navbar.Brand>
          {/* Without flex: 1 justify-content-end is not working */}
          <Nav className="justify-content-end" style={{ flex: 1 }}>
            <Nav.Item>{this.renderContent()}</Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
