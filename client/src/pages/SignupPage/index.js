import React, { Component } from 'react';
import SignupForm from "../../components/SignupForm"
import "./style.css"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import { Link, Redirect } from 'react-router-dom';

class Signup extends Component {
  static contextType = AuthContext;
  state = {
    error: "",
    redirectToReferrer: false
  }

  handleSubmit = (email, name, password, confirm) => {
    if (password !== confirm) {
      return this.setState({ error: "Passwords do not match." });
    }

    API.Users.create(email, password, name)
      .then(response => response.data)
      .then(() => {
        this.setState({ redirectToReferrer: true, error: "" })
      })
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/LoginPage" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="mainPageColor">
        <React.Fragment>
          <br />
          <MDBContainer>
            <MDBRow>
              <MDBCol className="white-text">
                <br />
                <h3 className="loremText">Welcome the most advanced and free buisness card design studio on the internet.  Explore our intricately designed templates and masterfully crafted UI. Built by a small team of four fullstack web dev students.</h3>
              </MDBCol>
              <MDBCol>
                <MDBCol>
                  <SignupForm onSubmit={this.handleSubmit} />
                </MDBCol>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </React.Fragment>
      </div>
    )
  }
}







export default Signup;
