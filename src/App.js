import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VoluntreeWorkDetail from "./Pages/VoluntreeWorkDetail";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Register from "./Components/RegisterVolunteer/Register";
import { createContext, useState } from "react";
import RegisteredEvent from "./Pages/RegisteredEvent";
import Admin from "./Pages/Admin";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [volunteerField, setVolunteerField] = useState([]);
  const [availableVolunteerField, setAvailableVolunteerField] = useState([]);
  console.log(availableVolunteerField);

  return (
    <UserContext.Provider
      value={{
        user: [loggedInUser, setLoggedInUser],
        field: [volunteerField, setVolunteerField],
        available: [availableVolunteerField, setAvailableVolunteerField],
      }}
    >
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/Login">
              <Login></Login>
            </Route>
            <Route exact path="/volunteer/:id">
              <VoluntreeWorkDetail></VoluntreeWorkDetail>
            </Route>
            <PrivateRoute exact path="/register/:id">
              <Register></Register>
            </PrivateRoute>
            <PrivateRoute exact path="/myEvents">
              <RegisteredEvent></RegisteredEvent>
            </PrivateRoute>
            <Route exact path="/admin">
              <Admin></Admin>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
