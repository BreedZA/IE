import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input';
import {NavLink, Route} from 'react-router-dom';

class LoginDetails extends Component {
    state = {
        userName : 'Andrew',
        userPassword: 'Scribbles'
    };



    render() {
        return (
            <Route>
                <div>
                    <h2> Enter your Username and password</h2>
                    <form>
                        <h3>User Name</h3>
                        <Input inputType="input" type="text" name="name" placeholder="your name"
                        value={this.state.userName}/>
                        <h3>User Password</h3>
                        <Input
                            inputType="input"
                            type="text" name="name" placeholder="***"
                        value={this.state.userPassword}/>

                        <div>
                            <NavLink to="/progress"><Button>Login</Button></NavLink>
                        </div>

                    </form>
                </div>
            </Route>

        )
    }

}

export default LoginDetails
