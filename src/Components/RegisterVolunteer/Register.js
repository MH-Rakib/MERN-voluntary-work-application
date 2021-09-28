import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Register.css";
import { useParams, Redirect } from "react-router";
import FakeData from "../../Assets/FakeData/FakeData";
import { UserContext } from "../../App";

const Register = () => {
  const { field, user } = useContext(UserContext);
  const [volunteerField, setVolunteerField] = field;
  const [loggedInUser, setLoggedInUser] = user;

  console.log(volunteerField);
  const { id } = useParams();
  const [selectedField, setSelectedField] = useState({});
  const [registeredData, setRegisteredData] = useState({});
  const [shouldRedirect, setShouldREdirect] = useState(false);

  useEffect(() => {
    const data = FakeData.find((obj) => obj.id === id);
    setSelectedField(data);
  }, []);

  const handleChange = (e) => {
    const data = { ...registeredData };
    data[e.target.name] = e.target.value;
    setRegisteredData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...registeredData, ...selectedField };
    const obj = [data, ...volunteerField];
    setVolunteerField(obj);
    setShouldREdirect(true);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} className="mx-auto">
            <div className="main login">
              <p className="sign" align="center">
                Register as a Volunteer
              </p>
              <p className="voluntree-title">
                Volunteer For "{selectedField.name}"
              </p>
              <form className="form1" onSubmit={handleSubmit}>
                <input
                  onChange={handleChange}
                  className="inputs"
                  type="text"
                  align="center"
                  value={loggedInUser.name}
                  name="name"
                  required
                />
                <input
                  onChange={handleChange}
                  className="inputs "
                  type="text"
                  align="center"
                  value={loggedInUser.email}
                  name="email"
                  required
                />
                <input
                  onChange={handleChange}
                  className="inputs "
                  type="date"
                  align="center"
                  placeholder="Select Joining Date"
                  name="date"
                  required
                />
                <input
                  onChange={handleChange}
                  className="inputs "
                  type="text"
                  align="center"
                  placeholder="User Address"
                  name="address"
                  required
                />

                <br />

                <button type="submit" className=" submit" align="center">
                  Register
                </button>

                {shouldRedirect && <Redirect to="/myEvents"></Redirect>}

                {/* <p>{loggedInUser.message}</p> */}

                {/* <div className="register">
                  {newUser ? (
                    <p>
                      Already a member?{" "}
                      <span
                        onClick={toggleNewUser}
                        style={{ color: "rgb(55, 121, 219)" }}
                      >
                        Login
                      </span>{" "}
                    </p>
                  ) : (
                    <p>
                      Not a member?{" "}
                      <span
                        onClick={toggleNewUser}
                        style={{ color: "rgb(55, 121, 219)" }}
                      >
                        Sign Up
                      </span>{" "}
                    </p>
                  )} */}
                {/* Already a mebmer?{" "}
                  <Link to={`/login`} style={{ textDecoration: "none" }}>
                    <span> Log In </span>
                  </Link>{" "} */}
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
