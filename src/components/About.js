import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="container jumbotron shadow bg-white rounded">
          <h2>About</h2>
        </div>

        <div className="container jumbotron shadow bg-white rounded">
          <p>
            Online banking, also known as internet banking or web banking, is an
            electronic payment system that enables customers of a bank or other
            financial institution to conduct a range of financial transactions
            through the financial institution's website. The online banking
            system will typically connect to or be part of the core banking
            system operated by a bank and is in contrast to branch banking which
            was the traditional way customers accessed banking services.
          </p>

          <p>
            Some banks operate as a "direct bank" (or “virtual bank”), where
            they rely completely on internet banking. Internet banking software
            provides personal and corporate banking services offering features
            such as viewing account balances, obtaining statements, checking
            recent transactions, transferring money between accounts, and making
            payments.
          </p>

          <p>
            The first known deployment of home computer banking to consumers
            came in December 1980 at United American Bank, a community bank
            headquartered in Knoxville, Tenn. United American partnered with
            Radio Shack to produce a secure custom modem for its TRS-80 computer
            that would allow bank customers to access account information
            securely. Services available in its first year included bill pay,
            account balance checks, and loan applications, as well as game
            access, budget and tax calculators and daily newspapers. Thousands
            of customers paid $25–30 per month for the service.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
