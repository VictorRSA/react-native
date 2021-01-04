import React, { Component } from 'react'
import formUserDetails from './formUserDetails'
export class userForm extends Component {

    state = {
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }
    //thiscomponent will have proceedMethod to next step
    nextStep =() => {
        const { step } = this.state;

        this.setState({
            step:step+1,
    
        })

    }
    prevStep = () => {
        const { step } = this.state;

        this.setState({
            step:step-1,
    
        })
    }
    handleChange = input =>e =>{
        this.setState({[input]:e.target.value});

    }

   
    render() {
        const { step } = this.state;
        const { firstName , lastName , email,occupation,city,bio}
        switch(step){
            case 1:
                return (
                    <formUserDetails
                    nextStep={this.nextStep}
                    handleSubmit={this.handleChange}
                    values={this.}>

                    </formUserDetails>
                )
        }

    
        
        return (
            <div>
                
            </div>
        )
    }
}

export default userForm
