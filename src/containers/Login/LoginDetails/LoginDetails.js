import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input';

class LoginDetails extends Component {
    state = {
        userName : 'Andrew',
        userPassword: 'Scribbles'
    };



    render() {
        return (
            <div>
                <h2> Enter your Username and password</h2>
                <form>
                    <h3>User Name</h3>
                    <Input inputType="input" type="text" name="name" placeholder="your name" />
                    <h3>User Password</h3>
                    <Input
                        inputType="input"
                        type="text" name="name" placeholder="***" />
                    <div>
                        <Button>Login</Button>
                    </div>
                </form>
            </div>
        )
    }

}

export default LoginDetails
