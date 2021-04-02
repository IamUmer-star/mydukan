import React from 'react';
import './Signin.style.scss';
import FormInput from "../Form-input/Form-input.component";


class SignIn extends React.Component {


    constructor(props) {
        super(props);

        this.state = {

            email: '',
            password: ''
        }
    }

    handelSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''})

    };
    handelChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    };

    render() {
        return (

            <div className={'sign-in'}>
                <h2>Please signin </h2>
                <span>Sign in with your email</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput
                        required
                        type="email"
                        name={'email'}
                        label={'Email'}
                        handelCHange={this.handelChange}
                        value={this.state.email}/>

                    <FormInput
                        required
                        type="password"
                        name={'password'}
                        label={'password'}
                        handelCHange={this.handelChange}
                        value={this.state.password}/>
                    <input type="submit" value={'SubmitForm'}/>
                </form>

            </div>
        )
    }
}

export default SignIn;