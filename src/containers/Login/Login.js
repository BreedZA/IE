import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Progress from '../ProgressBar/ProgressBar';
import Loging from '../../components/Loging/Loging';

class Login extends Component {
    state = {
      userName : 'Andrew',
      userPassword: 'Scribbles101'
    };
    render() {
        return(
            <div>
                <Loging />
            </div>
        );
    }
}
export default Login;
