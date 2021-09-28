import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import UsersList from "../Components/Users_Admin/UsersList";
import data from "../Assets/FakeData/volunteers";
import CreateEvent from "./../Components/Users_Admin/CreateEvent";

const Admin = () => {
  const [category, setCategory] = useState("user");
  const chooseAdminCategory = (category) => {
    setCategory(category);
  };
  const [userData, setuserData] = useState([]);

  const style = {
    fontSize: "20px",
    color: "#222",
    marginBottom: "20px",
    fontWeight: "700",
    textAlign: "left",
    cursor: "pointer",
  };

  useEffect(() => {
    const users = data;
    setuserData(users);
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={2}>
          <p style={style} onClick={() => chooseAdminCategory("user")}>
            All Users{" "}
          </p>
          <p style={style} onClick={() => chooseAdminCategory("create")}>
            Create Events{" "}
          </p>
        </Col>

        <Col lg={10}>
          {category === "user" ? (
            <UsersList data={userData} />
          ) : (
            <CreateEvent />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
