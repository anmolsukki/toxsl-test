import React from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';

class Home extends React.Component {
  state = {
    userData: {}
  }

  onChangeHandler = (e) => {
    const { userData } = this.state;
    userData[e.target.name] = e.target.value;
    this.setState({
      userData
    })
  }

  submitHandler = () => {
    const data = {
      userData: this.state.userData
    }
    this.props && this.props.userActionData(data)
  }

  render() {
    console.log("sdfsdfs", this.props.data)
    return (
      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 mx-auto mt-5">
        <div className="card">
          <h5 className="card-header info-color white-text text-center py-4">
            <strong>Sign in</strong>
          </h5>
          <div className="card-body px-lg-5 pt-0">
            <form className="text-center" style={{color: "#757575"}} action="#!">
              <div className="md-form">
                <input type="email" id="materialLoginFormEmail" className="form-control" />
                <label htmlFor="materialLoginFormEmail">E-mail</label>
              </div>
              <div className="md-form">
                <input type="password" id="materialLoginFormPassword" className="form-control" />
                <label htmlFor="materialLoginFormPassword">Password</label>
              </div>
              <div className="d-flex justify-content-end">
                <div>
                  <Link to="#">Forgot password?</Link>
                </div>
              </div>
              <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
              <p>Not a member?<Link to="#">Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userData = state.CtrUser
  return {
    data: userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionData: (data) => dispatch(actionCreator.UserAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
