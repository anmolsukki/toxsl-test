import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';

class Home extends React.Component {

  deleteHandler = (index) => {
    const data = {
      userData: index
    }
    this.props && this.props.SignUpActionData(data)
  }

  render() {
    if(this.props.signupStateData.reUserData.length === 0){
      localStorage.clear()
      window.location.reload()
    }
    const db = this.props.signupStateData.reUserData;
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 mx-auto mt-5">
        <table className="table">
          <thead className="black white-text">
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {db.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>
                    <span className="badge badge-info" style={{cursor: "pointer"}}><Link to={{ pathname: `/users/edit/${data.id}`}}>Edit</Link></span>&nbsp;&nbsp;
                    <span className="badge badge-danger" style={{cursor: "pointer"}} onClick={() => this.deleteHandler(data.id)}>Delete</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const ctrSignUpData = state.CtrSignUp
  return {
      signupStateData: ctrSignUpData
  };
};

const mapDispatchToProps = (dispatch) => {
return {
  SignUpActionData: (data) => dispatch(actionCreator.SignUpAction(data)),
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
