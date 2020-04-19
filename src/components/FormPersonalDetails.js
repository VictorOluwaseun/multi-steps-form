import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
 continue = (e) => {
  e.preventDefault();
  this.props.nextStep();
 };

 back = (e) => {
  e.preventDefault();
  this.props.prevStep();
 };

 render() {
  const { values, handleChange } = this.props;
  return (
   <MuiThemeProvider>
    <>
     <AppBar title="Enter User Details" />
     <TextField
      hintText="Enter Your First Name"
      floatingLabelText="First Name"
      onChange={handleChange("firstName")}
      defaultValue={values.firstName}
     />{" "}
     <br />
     <TextField
      hintText="Enter Your Last Name"
      floatingLabelText="Last Name"
      onChange={handleChange("lastName")}
      defaultValue={values.lastName}
     />{" "}
     <br />
     <TextField
      hintText="Enter Your Email"
      floatingLabelText="Email"
      onChange={handleChange("email")}
      defaultValue={values.email}
     />{" "}
     <br />
     <RaisedButton
      label="Back"
      primary={true}
      style={styles.button}
      onClick={this.back}
     />
     <RaisedButton
      label="Continue"
      primary={true}
      style={styles.button}
      onClick={this.continue}
     />
    </>
   </MuiThemeProvider>
  );
 }
}

const styles = {
 button: {
  margin: 15,
 },
};

export default FormPersonalDetails;
