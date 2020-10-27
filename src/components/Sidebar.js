import React from "react";

const Sidebar = (props) => (
  <div className="side-bar p-3 w-30 bd-highlight">
        <div className="jumbotron">
          <h4 className="text-dark">Banking Options</h4>
            <button className="btn btn-primary btn-font h6" onClick={(e) => props.handleInfoAboutLogin()}>
              Info About Login
            </button> 

            <button className="btn btn-primary btn-font h6" onClick={(e) => props.handleRetailBanking()}>
              Retail Banking
            </button> 

            <button className="btn btn-primary btn-font h6" onClick={(e) => props.handleCoparateBanking()}>
              Coparate Banking
            </button>  

            <button className="btn btn-primary btn-font h6" onClick={(e) => props.handleMobileBanking()}>
              Mobile Banking
            </button>   

        </div>
  </div>
);

export default Sidebar;
