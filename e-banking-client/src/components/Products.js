import React from "react";
import Cards from "./Cards";
import Covid19 from '../images/covid19.jpg'
import Investments from '../images/investments.jpg'
import FixedDeposit from '../images/fixed-deposit.jpg'
import Card from '../images/cards.jpg'
import Insurance from '../images/insurance.jpg'
import PremiumBanking from '../images/premium-banking.jpg'

class Products extends React.Component {

  componentDidMount() {
    document.title = 'Products'
  }

  render() {
    return (
      <div>
        {/* <div className="container jumbotron shadow bg-white rounded">
          <h2>Products</h2>
        </div> */}
        <div className="container card-columns">
            <Cards title={'Investments'} details={'New Saving Plans'} image={Investments} />
            <Cards title={'Fixed Deposit'} details={'New Fixed Deposit'}image={FixedDeposit} />
            <Cards title={'Cards'} details={'New Debit Cards'} image={Card} />
            <Cards title={'Insurance'} details={'New Insurance Plans'} image={Insurance} />
            <Cards title={'Premium Banking'} details={'Premium Banking'} image={PremiumBanking} />
            <Cards title={'Covid 19'} details={'Covid 19 Insurance'} image={Covid19} />
        </div>
      </div>
    );
  }
}

export default Products;
