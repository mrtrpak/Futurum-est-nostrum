import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBNavLink } from 'mdbreact';

class SignupForm extends Component {
  state = {
    password: "",
    email: "",
    passwordState: "password",
    linkText: "Show Password"
  };

  showPassword = event => {
    event.preventDefault();
    if (this.state.passwordState === "password") {
      this.setState({
        passwordState: "text",
        linkText: "Hide Password"
      })
    } else {this.setState({
      passwordState: "password",
      linkText: "Show Password"
    })}
  }
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { email, password} = this.state;

    this.props.onSubmit(email, password);
    event.preventDefault();
  }


  render() {
    const { email, password} = this.state;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Sign Up</strong>
                  </h3>
                </div>
                <MDBInput
                  label="Your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.handleInputChange}
                  value={email}
                  name='email'
                  id="email"
                />
                <MDBInput
                  label="Your password"
                  group
                  type={this.state.passwordState}
                  validate
                  containerClass="mb-0"
                  id='password'
                  type='password'
                  name='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  <a className="blue-text ml-1" onClick={this.showPassword}>{this.state.linkText}</a>
                </p>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="peach"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={this.handleSubmit}
                  >
                    <MDBNavLink to="/UserDash" className="white-text">Sign Up</MDBNavLink>

                  </MDBBtn>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                  or Sign Up with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="red-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="pink-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="purple-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
};

export default SignupForm;