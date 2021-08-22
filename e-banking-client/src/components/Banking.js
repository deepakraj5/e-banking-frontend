import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import Cookies from "universal-cookie";
import ClientService from "../services/ClientService";

const Banking = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorList, setErrorList] = useState("");
  const [loading, setLoading] = useState(false);

  const credentials = {
    email,
    password,
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    ClientService.loginAccount(credentials)
      .then((res) => {
        // let clientDetails = JSON.stringify(res.data.user);
        // localStorage.setItem("clientDetails", clientDetails);
        const cookie = new Cookies();
        cookie.set("jwt", res.data.token, { path: "/", maxAge: 480 });
        props.handleDashboard();
      })
      .catch((error) => {
        setErrorList(error.response.data);
        setLoading(false)
      });
  };

  return (
    <div className="details-bar p-3 flex-grow-1 bd-highlight">
      <div className="jumbotron">
        <h2>{props.title} Login</h2>

        <form>
          <div className="form-row">
            <div className="col-md-4 mb3">
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={errorList ? errorList.error : ""}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText={errorList ? errorList.error : ""}
              />
            </div>
          </div>
          {props.title === "Retail Banking" && !loading ? (
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleLogin}
            >
              Login
            </Button>
          ) : props.title === "Retail Banking" && loading ? (
            <button className="btn btn-primary btn-sm" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loging in...
            </button>
          ) : (
            <Button variant="contained" color="primary" size="small" disabled>
              Login
            </Button>
          )}
        </form>

        <div className="new-register">
          {props.title === "Retail Banking" ? (
            <p>
              <Link to="/new">Register Now ? </Link>
            </p>
          ) : (
            <p>Register Now (Coming soon!)</p>
          )}
        </div>

        <p className="text-muted">
          Most traditional banks offer e-banking services as an additional
          method of providing service. Further, many new banks deliver banking
          services primarily through the internet or other electronic delivery
          channels. Also, some banks are ‘internet only’ banks without any
          physical branch anywhere in the country.In India, since 1997, when the
          ICICI Bank first offered internet banking services, today, most
          new-generation banks offer the same to their customers. In fact, all
          major banks provide e-banking services to their customers.
        </p>
      </div>
    </div>
  );
};

export default Banking;
