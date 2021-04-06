import React from "react";
import FormInput from "../Form-input/Form-input.component";
import Button from "../Button/Button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import './Signup.ccmponent.scss';

class Signup extends React.Component {


    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handelSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state
        if (password !== confirmPassword) {
            alert("Password not match")
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''

            });

        } catch (error) {
            console.log(error)
        }

    }
    handelChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});

    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (


            <div className={'sign-up'}>
                <h2 className={'title'}>i dont have a sccount</h2>
                <span>Sign up with email and password</span>
                <form className={'sign-up-form'} onClick={this.handelSubmit}>

                    <FormInput type={'text'}
                               name={'displayName'}
                               value={displayName}
                               onChange={this.handelChange}
                               label={'Display Name'}
                               required
                    />
                    <FormInput type={'email'}
                               name={'email'}
                               value={email}
                               onChange={this.handelChange}
                               label={'Email'}
                               required
                    />
                    <FormInput type={'password'}
                               name={'password'}
                               value={password}
                               onChange={this.handelChange}
                               label={'password'}
                               required
                    />
                    <FormInput type={'password'}
                               name={'confirmPassword'}
                               value={confirmPassword}
                               onChange={this.handelChange}
                               label={'confirmPassword'}
                               required
                    />
                    <Button type={'submit'}> SignUp</Button>


                </form>

            </div>
        )
    }
}

export default Signup;