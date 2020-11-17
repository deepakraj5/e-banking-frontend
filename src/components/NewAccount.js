import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import Validator from "validator";
import ClientService from "../services/ClientService";

const NewAccount = (props) => {

  useEffect(() => {
    document.title = 'New Account'
  })

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accNo, setAccNo] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [zip, setZip] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [accNoError, setAccNoError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [dobError, setDOBError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorList, setErrorList] = useState({})

  const client = {
    name,
    email,
    accountnumber: parseInt(accNo),
    gender,
    dateofbirth: dob,
    phonenumber: parseInt(phoneNo),
    postalcode: zip,
    password,
  };

  const handleCancel = () => {
    props.history.push('/')
  }

  const handleNewAccount = () => {

    ClientService.newAccount(client).then((res) => {
      if(res.status === 201)
        props.history.push('/')
    }, (error) => {
      setErrorList(error.response.data)
      // console.log(error.response.data)
    })

  }

  const handleName = (e) => {
    setName(e.target.value);
    if (e.target.value !== "") setNameError(false);
    if (e.target.value === "") setNameError(true);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value !== "" || !Validator.isEmail(e.target.value))
      setEmailError(false);
    if (e.target.value === "" || !Validator.isEmail(e.target.value))
      setEmailError(true);
  };

  const handleAccNo = (e) => {
    setAccNo(e.target.value);
    if (e.target.value !== "" || e.target.value.length < 8 || e.target.value.length > 10) 
        setAccNoError(false);
    if (e.target.value === "" || e.target.value.length < 8 || e.target.value.length > 10) 
        setAccNoError(true);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
    if (e.target.value !== "" || !e.target.value.toLowerCase().match(/\b(male|female)\b/)) 
        setGenderError(false);
    if (e.target.value === "" || !e.target.value.toLowerCase().match(/\b(male|female)\b/)) 
        setGenderError(true);
  };

  const handleDOB = (e) => {
    setDOB(e.target.value);
    if (e.target.value !== "") setDOBError(false);
    if (e.target.value === "") setDOBError(true);
  };

  const handlePhoneNo = (e) => {
    setPhoneNo(e.target.value);
    if (e.target.value !== "" || e.target.value.length < 12 || e.target.value.length > 12) 
        setPhoneNoError(false);
    if (e.target.value === "" || e.target.value.length < 12 || e.target.value.length > 12) 
        setPhoneNoError(true);
  };

  const handleZip = (e) => {
    setZip(e.target.value);
    if (e.target.value !== "" || !Validator.isPostalCode(e.target.value, 'IN')) 
        setZipError(false);
    if (e.target.value === "" || !Validator.isPostalCode(e.target.value, 'IN')) 
        setZipError(true);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== "") 
        setPasswordError(false);
    if (e.target.value === "") 
        setPasswordError(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === '') setNameError(true)
    else setNameError(false)

    if(email === '') setEmailError(true)
    else setEmailError(false)

    if(accNo === '') setAccNoError(true)
    else setAccNoError(false)

    if(gender === '') setGenderError(true)
    else setGenderError(false)

    if(dob === '') setDOBError(true)
    else setDOBError(false)

    if(phoneNo === '') setPhoneNoError(true)
    else setPhoneNoError(false)

    if(zip === '') setZipError(true)
    else setZipError(false)

    if(password === '') setPasswordError(true)
    else setPasswordError(false)

    if (name && email && accNo && gender && dob && phoneNo && zip && password)
      handleNewAccount();
  };

  return (
    <div className="container jumbotron shadow bg-white rounded">
      <form>
        <div className="form-row">
          <TextField
            required
            label="Name"
            size="small"
            value={name}
            error={nameError}
            style={{ marginLeft: "7rem", paddingBottom: "2rem" }}
            onChange={handleName}
          />
          <TextField
            required
            value={email}
            error={emailError}
            label="Email"
            type="email"
            style={{ marginLeft: "7rem", paddingBottom: "2rem" }}
            onChange={handleEmail}
            helperText={errorList? errorList.email : ''}
          />
        </div>

        <div className="form-row">
          <TextField
            required
            value={accNo}
            error={accNoError}
            label="Acc Number"
            type="number"
            style={{ marginLeft: "7rem", paddingBottom: "2rem" }}
            onChange={handleAccNo}
            helperText={errorList ? errorList.accountnumber : ''}
          />
          <TextField
            required
            value={gender}
            error={genderError}
            label="Gender"
            style={{ marginLeft: "7rem", paddingBottom: "2rem" }}
            onChange={handleGender}
          />
        </div>

        <div className="form-row">
          <TextField
            required
            value={password}
            error={passwordError}
            label="Password"
            type="password"
            style={{ marginLeft: "7rem", paddingBottom: "2rem" }}
            onChange={handlePassword}
          />

          <TextField
            required
            value={phoneNo}
            error={phoneNoError}
            label="Phone Number"
            type="number"
            style={{ marginLeft: "7rem", paddingBottom: "2rem" }}
            onChange={handlePhoneNo}
            helperText={errorList ? errorList.phonenumber : ''}
          />
        </div>

        <div className="form-row">
          <TextField
            required
            value={zip}
            error={zipError}
            label="Zip"
            type="number"
            style={{ marginLeft: "7rem", paddingBottom: "2rem" }}
            onChange={handleZip}
          />
          <TextField
            required
            error={dobError}
            label="Date of Birth"
            type="date"
            defaultValue="2020-10-26"
            style={{
              marginLeft: "7rem",
              marginRight: "2rem",
              paddingBottom: "2rem",
            }}
            onChange={handleDOB}
          />
        </div>

        <div>
          <Button onClick={handleCancel} variant="contained" size="small" color="secondary">
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handleSubmit}
          >
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewAccount;
