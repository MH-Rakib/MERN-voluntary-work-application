import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import data from "../../Assets/FakeData/volunteers";
import User from "./User";
import "./User.css";

const UsersList = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <h4 className="uaerInfoTitle">Registered Users</h4>
      <Row className="userInfoHeader">
        <Col lg={3}>
          <div>
            <p className="admin-userInfo">User Name</p>
          </div>
        </Col>
        <Col lg={3}>
          <div>
            <p className="admin-userInfo">Email</p>
          </div>
        </Col>
        <Col lg={2}>
          <div>
            <p className="admin-userInfo">Field</p>
          </div>
        </Col>
        <Col lg={2}>
          <div>
            <p className="admin-userInfo">Date</p>
          </div>
        </Col>
        <Col lg={2}>
          <div>
            <p className="admin-userInfo">Delete User</p>
          </div>
        </Col>
      </Row>
      {data.map((obj) => (
        <Row className="userInfoBody">
          <User obj={obj}></User>
        </Row>
      ))}
    </Container>
  );
};

export default UsersList;
