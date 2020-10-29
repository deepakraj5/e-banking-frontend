import React from "react";
import { Link } from 'react-router-dom'

class Banking extends React.Component {
  render() {
    return (
      <div className="details-bar p-3 flex-grow-1 bd-highlight">
        <div className="jumbotron">
          <h2>{this.props.title} Login</h2>
          
          <form>
            <div className="form-row">
              <div className="col-md-4 mb3">
                <label>Email</label>
                <input type="email" placeholder="Email" className="form-control form-control-sm" />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label>Password</label>
                <input type="password" placeholder="Password" className="form-control form-control-sm" />
              </div>
            </div>
	    {this.props.title === 'Retail Banking' ? <button className="btn btn-success btn-sm">Login</button> : <button className="btn btn-success 							btn-sm" disabled>Login</button>}
          </form>

          <div className="new-register">
            {this.props.title === 'Retail Banking' ? <p><Link to="/new">Register Now ? </Link></p> : <p>Register Now (Coming soon!)</p>}
          </div>

          <p className="text-muted">
            Most traditional banks offer e-banking services as an additional method of providing service. Further, many new banks deliver banking services primarily through the internet or other electronic delivery channels. Also, some banks are ‘internet only’ banks without any physical branch anywhere in the country.In India, since 1997, when the ICICI Bank first offered internet banking services, today, most new-generation banks offer the same to their customers. In fact, all major banks provide e-banking services to their customers.
          </p>
        </div>
      </div>
    );
  }
}

export default Banking;
