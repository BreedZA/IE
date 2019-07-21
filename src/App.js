import React, {Component} from 'react';

import ProgressBar from './containers/ProgressBar/ProgressBar';
import Login from './containers/Login/Login';
import Patients from './containers/Patient/Patients';

import {Route, Switch} from 'react-router-dom'

class App extends Component{
  render() {
    return (

        <div>



              <Switch>
                  <Route path="/" exact component={Login}/>
                  <Route path="/progress" component={ProgressBar}/>
                  <Route path="/patients" component={Patients}/>

              </Switch>

        </div>

    );
  }
}
//
//<Login/>
//<ProgressBar />


export default App;
