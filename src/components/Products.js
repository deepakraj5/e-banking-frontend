import React from "react";
import Cards from "./Cards";
import Covid19 from '../images/covid19.jpg'
import Investments from '../images/investments.jpg'
import FixedDeposit from '../images/fixed-deposit.jpg'
import Card from '../images/cards.jpg'
import Insurance from '../images/insurance.jpg'
import PremiumBanking from '../images/premium-banking.jpg'

class Products extends React.Component {
  render() {
    return (
      <div>
        <div className="container jumbotron shadow bg-white rounded">
          <h2>Products</h2>
        </div>
        <div className="container card-columns">
            <Cards title={'Covid 19'} details={'Covid 19 Saving'} image={Covid19} />
            <Cards title={'Investments'} details={'New Plans Saving'} image={Investments} />
            <Cards title={'Fixed Deposit'} details={'Covid 19 Saving'}image={FixedDeposit} />
            <Cards title={'Cards'} details={'Covid 19 Saving'} image={Card} />
            <Cards title={'Insurance'} details={'Covid 19 Saving'} image={Insurance} />
            <Cards title={'Premium Banking'} details={'Covid 19 Saving'} image={PremiumBanking} />
        </div>
      </div>
    );
  }
}

export default Products;
