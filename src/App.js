import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import ProgressBar from './containers/ProgressBar/ProgressBar';
import Login from './containers/Login/Login';

import {Route, Switch} from 'react-router-dom'

class App extends Component{
  render() {
    return (

        <div>


          <Layout>

              <Switch>
                  <Route path="/" exact component={Login}/>
                  <Route path="/progress" component={ProgressBar}/>
              </Switch>
          </Layout>
        </div>

    );
  }
}
//
//<Login/>
//<ProgressBar />


export default App;
