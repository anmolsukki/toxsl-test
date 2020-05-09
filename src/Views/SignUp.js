import React from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';

class SignUp extends React.Component {
    state = {
        userData: {}
    }

    onChangeHandler = (e) => {
        const { userData } = this.state;
        userData[e.target.name] = e.target.value;
        userData['id'] = Date.now()
        this.setState({
            userData
        })
    }

    submitHandler = () => {
        const data = {
            userData: this.state.userData
        }
        this.props && this.props.SignUpActionData(data)
    }

    render() {
        return (
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 mx-auto mt-5">
                <div className="card">
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Sign Up</strong>
                    </h5>
                    <div className="card-body px-lg-5 pt-0">
                        <div className="text-center" style={{color: "#757575"}}>
                            <div className="md-form">
                                <input type="text" name="name" className="form-control" placeholder="Name" onChange={this.onChangeHandler} />
                            </div>
                            <div className="md-form">
                                <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.onChangeHandler} />
                            </div>
                            <div className="md-form">
                                <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.onChangeHandler} />
                            </div>
                            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 mt-5" onClick={this.submitHandler}>Sign Up</button>
                            <p>Already a member?&nbsp;<Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        SignUpActionData: (data) => dispatch(actionCreator.SignUpAction(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
