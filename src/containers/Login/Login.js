import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import LoginDetails from './LoginDetails/LoginDetails';
class Login extends Component {



    render() {
        return(
            <div>
                <LoginDetails />
                <Route
                    path={this.props.match.path + '/progress'}
                     render={() => (<LoginDetails userName={this.state.userName}
                                userPassword={this.state.userPassword}    />
                                    )}
                />
            </div>
        );
    }
}
export default Login;
