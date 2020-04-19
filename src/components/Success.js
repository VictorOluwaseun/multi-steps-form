import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Success = () => (
 <MuiThemeProvider>
  <>
   <AppBar title="Success" />
   <h1> Submission Received. Thanks </h1>
   <p>You will get an email with further instructions</p>
  </>
 </MuiThemeProvider>
);

export default Success;
