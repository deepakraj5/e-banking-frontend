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
                <label>User Name</label>
                <input type="text" placeholder="User Name" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label>Password</label>
                <input type="password" placeholder="Password" className="form-control" />
              </div>
            </div>
            <button className="btn btn-success btn-sm">Login</button>
          </form>

          <div className="new-register">
            {this.props.title === 'Retail Banking' ? <p><Link to="/new">Register Now ? </Link></p> : <p>Register Now (Coming soon!)</p>}
          </div>

          <p className="text-muted">
            embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful
            of model sentence structures, to generate Lorem Ipsum which looks
            reasonable. The generated Lorem Ipsum is therefore always free from
            repetition, injected humour, or non-characteristic words etc.
          </p>
        </div>
      </div>
    );
  }
}

export default Banking;
