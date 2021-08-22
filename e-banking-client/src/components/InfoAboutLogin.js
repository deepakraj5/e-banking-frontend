import React from "react";

class InfoAboutLogin extends React.Component {
  render() {
    return (
      <div className="details-bar p-3 flex-grow-1 bd-highlight">
        <div className="jumbotron">
          <h2 className="text-center">Info About Login</h2>
          <p className="text-muted">
            Online banking, also known as internet banking or web banking, is an
            electronic payment system that enables customers of a bank or other
            financial institution to conduct a range of financial transactions
            through the financial institution's website. The online banking
            system will typically connect to or be part of the core banking
            system operated by a bank and is in contrast to branch banking which
            was the traditional way customers accessed banking services.
          </p>
          <h6 className="text-primary">Here are 8 tips to use internet banking safely:</h6>
          <p>1. Always use genuine anti-virus software</p>
          <p>2. Avoid Using Public Wi-Fi or Use VPN software</p>
          <p>3. Check for latest updates of your Smartphone's operating system</p>
          <p className="text-danger">4. Change your password regularly and ensure it's a strong one</p>
          <p>5. Subscribe for mobile notifications</p>
          <p>6. Avoid signing-in to your net-banking account via mailers</p>
          <p>7. Do not use public computers to login to net banking</p>
          <p className="text-danger">8. Check your account regularly</p>
        </div>
      </div>
    );
  }
}

export default InfoAboutLogin;
