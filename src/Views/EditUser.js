import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';

class EditUser extends Component {

    state = {
        userData: {}
    }

    componentDidMount = () => {
        const params = this.props.match.params.id
        const userData = this.props && this.props.signupStateData
        const user = userData.find(user => user.id === params * 1);
        this.setState({
            userData: user
        })
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
        this.props && this.props.editActionData(data)
    }

    render() {
        return (
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 mx-auto mt-5">
                <div className="card">
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Update User</strong>
                    </h5>
                    <div className="card-body px-lg-5 pt-0">
                        <div className="text-center" style={{color: "#757575"}}>
                            <div className="md-form">
                                <input type="text" name="name" className="form-control" value={this.state.userData.name || ""} placeholder="Name" onChange={this.onChangeHandler} />
                            </div>
                            <div className="md-form">
                                <input type="email" name="email" className="form-control" value={this.state.userData.email || ""} placeholder="Email" onChange={this.onChangeHandler} />
                            </div>
                            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 mt-5" onClick={this.submitHandler}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  const ctrSignUpData = state.CtrSignUp.reUserData
  return {
      signupStateData: ctrSignUpData
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editActionData: (data) => dispatch(actionCreator.EditAction(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
