import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../Assets/Images/logo.png";
import userIcon from "../../Assets/Images/user.png";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "./../../App";
import { MdExitToApp } from "react-icons/md";
import { signout } from "./../../Firebase/authenticationMethods";

const Header = () => {
  const { user } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = user;

  const handleSignOut = () => {
    signout().then((res) => {
      setLoggedInUser(res);
    });
  };

  return (
    <Navbar className={classes.header} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className={classes.logo} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={classes.navItems} as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link
              style={{ marginRight: "30px" }}
              className={classes.navItems}
              as={Link}
              to="/myEvents"
            >
              My Events
            </Nav.Link>

            {loggedInUser.isSigned ? (
              <Nav.Link className={classes.navItems}>
                <span>
                  <img src={userIcon} className={classes.userIcon} alt="" />{" "}
                  {loggedInUser.name}
                </span>
                &nbsp; &nbsp;
                <span>
                  <MdExitToApp
                    onClick={handleSignOut}
                    style={{ fontSize: "30px", marginTop: "-5px" }}
                  />
                </span>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="./Login">
                <span className={classes.user}>Login</span>
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="./admin">
              <span className={classes.admin}>Admin</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
