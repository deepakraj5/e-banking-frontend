import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import authCheckService from "../services/authCheckService";
import ClietService from "../services/ClientService";

const FundTransFer = (props) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = (e) => {
      e.preventDefault()

      ClietService.fundTransfer(accountNumber, amount).then((res) => {
        props.history.push('/')
      }).catch((error) => {
          props.history.push('/')
      })
  }

  useEffect(() => {

    document.title = 'Fund Transfer'

    if (!authCheckService()) {
      props.history.push("/");
    }
  });

  return (
    <div
      className="container jumbotron bg-transparent rounded"
      style={{ textAlign: "center", height: "30rem" }}
    >
      <div
        className="card shadow bg-white rounded mx-auto"
        style={{ maxWidth: "20rem" }}
      >
        <div className="card-header">Fund Transfer</div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">IMPS transaction</h6>
          <TextField
            label="Account Number"
            onChange={(e) => setAccountNumber(e.target.value)}
            style={{ marginBottom: "2rem" }}
          />
          <TextField
            label="&#x20B9; Amount"
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginBottom: "2rem" }}
          />
          <Button color="secondary" variant="contained" size="small" onClick={handleTransfer}>
            Transfer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FundTransFer;
