import React from 'react';
import { Link, Redirect } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            email: "",
            password: "",
            loggedIn
        }
    }

    loginHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = () => {
        const { email, password } = this.state;
        const db = this.props.signupStateData.reUserData;
        const user = db.find(el => el.email === email);
        if(email === user.email && password === user.password){
            localStorage.setItem("token", "fgdfhfgfhfgbvgfhfgh")
            this.setState({
                loggedIn: true
            })
        }
        else {
            alert("Enter Valid Email and Password")
        }
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/home" />
        }
        return (
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 mx-auto mt-5">
                <div className="card">
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Sign in</strong>
                    </h5>
                    <div className="card-body px-lg-5 pt-0">
                        <div className="text-center" style={{color: "#757575"}} action="#!">
                            <div className="md-form">
                                <input type="email" name="email" placeholder="Email" className="form-control" onChange={this.loginHandler} />
                            </div>
                            <div className="md-form">
                                <input type="password" name="password" placeholder="Password" className="form-control" onChange={this.loginHandler} />
                            </div>
                            <div className="d-flex justify-content-end">
                                <div>
                                    <Link to="#">Forgot password?</Link>
                                </div>
                            </div>
                            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" onClick={this.submitHandler}>Sign in</button>
                            <p>Not a member?&nbsp;<Link to="signup">Register</Link></p>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps)(Login);
