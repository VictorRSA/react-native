import React, { Component } from 'react'
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//THESE ARE COMPONENTS FROM MATERIAL UI
export class formUserDetails extends Component {
    continue  = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange} = this.props;
        return (
            <MuiThemeProvider muiTheme>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField
                    hintText='Enter your first Name'
                    floatingLabelText="First Name"
                    onChange = {handleChange('email')}
                    defaultValue = {values.email}

                    />
                    <br />
                    <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField
                    hintText='Enter your first Name'
                    floatingLabelText="First Name"
                    onChange = {handleChange('email')}
                    defaultValue = {values.email}

                    />
                    <br />
                    <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField
                    hintText='Enter your first Name'
                    floatingLabelText="First Name"
                    onChange = {handleChange('email')}
                    defaultValue = {values.email}

                    />
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin:215
    }
}

export default formUserDetails

