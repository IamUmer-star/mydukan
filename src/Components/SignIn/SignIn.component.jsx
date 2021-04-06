import React from 'react';
import './Signin.style.scss';
import FormInput from "../Form-input/Form-input.component";
import Button from "../Button/Button.component";
import {signInWithGoogle, auth} from "../../firebase/firebase.utils";
import Signup from '../Signup.ccmponent.jsx/Signup.ccmponent'

class SignIn extends React.Component {


    constructor(props) {
        super(props);

        this.state = {

            email: '',
            password: ''
        }
    }

    handelSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
             await auth.signInWithEmailAndPassword(email, password);
             this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error)
        }


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
                    <Button type="submit">Sign in</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignin>
                        {' '}Sign in With Google
                        {' '}
                    </Button>

                </form>
                <Signup/>


            </div>
        )
    }
}

export default SignIn;