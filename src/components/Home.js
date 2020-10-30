import React from "react";
import Sidebar from "./Sidebar";
import Banking from "./Banking";
import InfoAboutLogin from "./InfoAboutLogin";
import Dashboard from './Dashboard'
import authCheckService from '../services/authCheckService'

class Home extends React.Component {
  state = {
    option: 1,
    dashboard: authCheckService() 
  };

  handleDashboard = () => {
    this.setState(() => ({
      dashboard: authCheckService()
    }))
  }

  handleInfoAboutLogin = () => {
    this.setState(() => ({
      option: 1,
    }));
  };

  handleRetailBanking = () => {
    this.setState(() => ({
      option: 2,
    }));
  };

  handleCoparateBanking = () => {
    this.setState(() => ({
      option: 3,
    }));
  };

  handleMobileBanking = () => {
    this.setState(() => ({
      option: 4,
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("option");
      const option = JSON.parse(json);
      this.setState(() => ({
        option: option,
      }));
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.option !== this.state.option) {
      const json = JSON.stringify(this.state.option);
      localStorage.setItem("option", json);
    }
  }

  render() {
    return (
      <div className="home">
        <div className="container jumbotron shadow bg-white rounded home-bg">
          <p className="text-center">Welcome to City Bank</p>
        </div>

        {this.state.dashboard ? <Dashboard handleDashboard={this.handleDashboard} /> : 

          <div className="container d-flex bd-highlight mb-3 shadow bg-white rounded">
            <Sidebar
              handleRetailBanking={this.handleRetailBanking}
              handleCoparateBanking={this.handleCoparateBanking}
              handleMobileBanking={this.handleMobileBanking}
              handleInfoAboutLogin={this.handleInfoAboutLogin}
            />
            {this.state.option === 1 ? (
              <InfoAboutLogin />
            ) : this.state.option === 2 ? (
              <Banking title={'Retail Banking'} handleDashboard={this.handleDashboard} />
            ) : this.state.option === 3 ? (
              <Banking title={'Coparate Banking'} />
            ) : (
              <Banking title={'Mobile Banking'} />
            )}
          </div>

          }
      </div>
    );
  }
}

export default Home;
